import * as S from "./styled";
import ReviewItemUser from "./ReviewItemUser";
import ReviewContents from "./ReviewContents";
import ReviewFooter from "./ReviewFooter";
import { getUserFollowers, getUserRank, getUserReviewed } from "@/src/apis/user";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReviewListType } from "@/src/apis/product/schema";
import { getUserFollowersResponseType, getUserReviewedResponseType } from "@/src/apis/user/schema";
import { OrderType } from "../ReviewList";

type ReviewItemProps = {
  review: ReviewListType;
  order: OrderType;
  loginToggle: () => void;
};

function ReviewItem({ review, order, loginToggle }: ReviewItemProps) {
  const [userCount, setUserCount] = useState({ ranking: 0, follower: 0, reviewed: 0 });
  const { user, reviewImages, content, rating, userId: writerId } = review;
  const userId = Number(localStorage.getItem("userId"));
  const createdByMe = writerId === userId;

  const { data: userRank } = useQuery({
    queryKey: ["userRank"],
    queryFn: getUserRank,
  });

  useEffect(() => {
    // 유저 랭킹 정보가 로딩되었을 때만 실행(배열이고 빈배열이 아닐 경우)
    // 유저의 팔로우, 쓴 리뷰 데이터 가져오기
    if (Array.isArray(userRank) && userRank.length > 0) {
      const findUserInfo = async () => {
        const rankingIndex = userRank.findIndex((rank) => rank.id === user.id);
        const followersData = (await getUserFollowers(user.id, 0)) as getUserFollowersResponseType;

        const reviewedData = (await getUserReviewed(user.id, 0)) as getUserReviewedResponseType;

        const userCountData = {
          ranking: rankingIndex + 1,
          follower: followersData?.list.length ?? 0,
          reviewed: reviewedData?.list.length ?? 0,
        };

        setUserCount(userCountData);
      };

      findUserInfo();
    }
  }, [userRank, user.id]);

  return (
    <S.Container>
      <ReviewItemUser user={user} userCount={userCount} rating={rating} />
      <S.ContentsWithFooter>
        <ReviewContents content={content} reviewImages={reviewImages} />
        <ReviewFooter
          review={review}
          createdByMe={createdByMe}
          order={order}
          rating={rating}
          loginToggle={loginToggle}
        />
      </S.ContentsWithFooter>
    </S.Container>
  );
}

export default ReviewItem;
