import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/src/routes";
import { useRouter } from "next/router";
import { getUserData, getUserFollowees, getUserFollowers, getUserReviewed } from "@/src/apis/user";
import { categoryList } from "@/src/utils/categoryList";
import UserProductList from "@/src/components/profiles/UserProductList";
import FollowInfoModal from "@/src/components/profiles/FollowInfoModal";
import MyPageProfileButtons from "@/src/components/profiles/MyPageProfileButtons";
import FollowButton from "@/src/components/profiles/FollowButton";
import { fontStyle } from "@/styles/theme";
import MyActivity from "./MyActivity/MyActivity";
import FilterProduct from "./FilterProduct/FilterProduct";
import { StyledFloatButton } from "../common/button/Styled/StyledFloatButton";

/**
 * 1. 상품 카드 사이즈 변경
 * 2. 활동내역 css 변경
 * 3. 팔로잉 수 누르면 모달창 띄우기
 * 4. 본인 id면 마이페이지로 이동
 *    -
 */

const StyledProfileLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 20px;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 509px;
    margin: 0 auto;
    padding: 0;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    flex-direction: row;
    width: 1340px;
    gap: 60px;
    height: 608px;
  }
`;

// 프로필 styled component
const StyledProfileBox = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--black-black_353542, #353542);
  background: var(--black-black_252530, #252530);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 30px;
  margin-bottom: 60px;
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 509px;
    margin: 0 auto 60px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 340px;
    margin: 0;
  }
`;

const StyledPageRight = styled.div`
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 940px;
  }
`;
const StyledImageBox = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 180px;
    height: 180px;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0px;
`;

const StyledProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 300px;
    gap: 20px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 20px;
  }
`;

const StyledProfileNickname = styled.div`
  color: var(--white-white_F1F1F5, #f1f1f5);
  font-size: 24px;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    /* font-size: 20px; */
    font-family: Pretendard;
    ${fontStyle({ w: 600, s: 20, l: 24 })};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 600, s: 24, l: 20 })};
  }
`;

const StyledProfileDesc = styled.div`
  color: #9fa6b2;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    font-family: Pretendard;

    ${fontStyle({ w: 400, s: 14, l: 20 })};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    color: var(--gray-gray_6E6E82, #6e6e82);
    width: 300px;
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;

const StyledProfileButton = styled.button`
  color: white;
  border-radius: 8px;
  background: var(--main-main_gradation, linear-gradient(91deg, #5097fa 0%, #5363ff 100%));
  padding: 24px;
  width: 100%;
`;

const StyledFollowInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 50px;
  }
`;
const StyledFollowNumber = styled.button`
  color: var(--white-white_F1F1F5, #f1f1f5);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    line-height: normal;
    ${fontStyle({ w: 600, s: 20, l: 22 })};
  }
`;

const StyledFollowText = styled.div`
  color: var(--gray-gray_9FA6B2, #9fa6b2);
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;

type Props = {
  isMe: boolean;
};

export default function Userprofile({ isMe }: Props) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [dataType, setDataType] = useState<"REVIEWED" | "CREATED" | "FAVORITE">("REVIEWED");
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);
  const [userId, setUserId] = useState(0);
  useEffect(() => {
    if (isMe) {
      const userIdData = Number(localStorage.getItem("userId"));
      setUserId(userIdData);
    } else {
      const userIdNumber = Number(router.query.userId);
      setUserId(userIdNumber);
    }
  }, [router.query, isMe]);

  const { data: USERDATA } = useQuery({
    queryKey: ["USERDATA", userId],
    queryFn: () => getUserData(userId),
  });

  const { data: FOLLOWEES } = useQuery({
    queryKey: [QUERY_KEY.FOLLOWEES, userId],
    queryFn: () => getUserFollowees(userId, 0),
  });

  const { data: FOLLOWERS } = useQuery({
    queryKey: [QUERY_KEY.FOLLOWERS, userId],
    queryFn: () => getUserFollowers(userId, 0),
  });
  const { data: REVIEWS } = useQuery({
    queryKey: [QUERY_KEY.REVIEWS, userId],
    queryFn: () => getUserReviewed(userId, 0),
  });

  const followingCount = USERDATA?.followeesCount;
  const followersCount = USERDATA?.followersCount;
  const reviewsCount = REVIEWS?.list.length ?? 0;
  const ratingEverage = REVIEWS?.list.length
    ? Math.floor((REVIEWS?.list.reduce((acc, item) => acc + item.rating, 0) / reviewsCount) * 10) / 10
    : 0;

  const categoryCount: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 };
  REVIEWS?.list.forEach((item) => categoryCount[item.categoryId]++);
  // 프로퍼티 값 중 최대값을 구합니다.
  const maxPropertyValue = Math.max(...Object.values(categoryCount));

  // 최대값을 가진 프로퍼티의 키를 찾습니다.
  const maxPropertyKey = Object.keys(categoryCount).find((key) => categoryCount[Number(key)] === maxPropertyValue);

  const favoriteCategory = categoryList[Number(maxPropertyKey) - 1].name;
  if (!USERDATA) return null;
  return (
    <>
      <StyledProfileLayout>
        {/* 프로필 */}

        <StyledProfileBox>
          <StyledImageBox>
            {/* Next Image로 바꾸기 & next.config.mjs 수정하기 & 사용법 익혀서 하기 */}
            <StyledImage fill src={USERDATA?.image ? USERDATA?.image : "/icons/default_profile.svg"} alt="프로필사진" />
          </StyledImageBox>

          <StyledProfileText>
            <StyledProfileNickname>{USERDATA?.nickname}</StyledProfileNickname>
            <StyledProfileDesc>{USERDATA?.description}</StyledProfileDesc>
          </StyledProfileText>
          <StyledFollowInfo>
            <button
              onClick={() => {
                setIsFollowerModalOpen(true);
              }}>
              <StyledFollowNumber>{followersCount}</StyledFollowNumber>
              <StyledFollowText>팔로워</StyledFollowText>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="1" height="48" viewBox="0 0 1 48" fill="none">
              <path d="M0.5 0V48" stroke="#353542" />
            </svg>
            <div>
              {/* 1. 팔로잉 수를 누른다. 
								2. 모달이 열린다.
								3. 모달에 유저 목록이 보인다.
						*/}
              <button
                onClick={() => {
                  setIsFollowingModalOpen(true);
                }}>
                <StyledFollowNumber>{followingCount}</StyledFollowNumber>
                <StyledFollowText>팔로잉</StyledFollowText>
              </button>
            </div>
          </StyledFollowInfo>
          {isMe ? <MyPageProfileButtons /> : <FollowButton isFollowingData={USERDATA?.isFollowing} userId={userId} />}
        </StyledProfileBox>

        <StyledPageRight>
          <MyActivity ratingEverage={ratingEverage} reviewsCount={reviewsCount} favoriteCategory={favoriteCategory} />
          <FilterProduct dataType={dataType} setDataType={setDataType} />
          <UserProductList userId={userId} dataType={dataType}></UserProductList>
        </StyledPageRight>
      </StyledProfileLayout>
      <StyledFloatButton>+</StyledFloatButton>
      {isFollowingModalOpen && (
        <FollowInfoModal
          followList={(FOLLOWEES as any).list}
          setIsOpen={setIsFollowingModalOpen}
          dataType="followee"
          userId={userId}
          nickname={USERDATA?.nickname}
        />
      )}
      {isFollowerModalOpen && (
        <FollowInfoModal
          followList={(FOLLOWERS as any).list}
          setIsOpen={setIsFollowerModalOpen}
          dataType="follower"
          userId={userId}
          nickname={USERDATA?.nickname}
        />
      )}
    </>
  );
}
