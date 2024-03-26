import { useQuery } from "@tanstack/react-query";
import RankingListItem from "../../common/menu/RankingListItem";
import { getUserRank, getUserReviewed, getUserData } from "@/src/apis/user";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { PAGE_ROUTES } from "@/src/routes";
import { GetUserRankResponseType } from "@/src/apis/user/schema";
interface UserDetails {
  id: number;
  followers: number;
  allReviews: number;
}

export default function Ranking() {
  const { data: userRank } = useQuery<GetUserRankResponseType>({
    queryKey: ["userRank"],
    queryFn: () => getUserRank(),
  });

  const [userDetails, setUserDetails] = useState<UserDetails[]>([]);

  useEffect(() => {
    // 유저 랭킹 정보가 로딩되었을 때만 실행
    if (userRank) {
      const fetchUserDetails = async () => {
        // userRank가 배열인지 확인하고, 배열이 아니면 배열로 변환
        const rankArray = Array.isArray(userRank) ? userRank : [userRank];
        const userDetailsPromises = rankArray.map(async (user) => {
          const userId = user.id;
          const followers = await getUserData(userId);
          const allReviews = await fetchAllUserReviews(userId);

          return {
            ...user,
            followers,
            allReviews,
          };
        });
        const userDetailsData = await Promise.all(userDetailsPromises);
        setUserDetails(userDetailsData?.slice(0, 5));
      };

      fetchUserDetails();
    }
  }, [userRank]);

  const fetchAllUserReviews = async (userId: number) => {
    let allReviews: any = [];
    let cursor = null;

    do {
      const { list, nextCursor } = await getUserReviewed(userId, cursor);
      allReviews = [...allReviews, ...list];
      cursor = nextCursor;
    } while (cursor !== null);

    return allReviews;
  };

  return (
    <>
      {userDetails?.map((user: any, index: number) => {
        return (
          <Link key={index} href={PAGE_ROUTES.USER_DETAIL(user.id)}>
            <RankingListItem
              userImage={user.image}
              rankNum={String(index + 1)}
              ranking={index + 1}
              reviewerName={user.nickname}
              Followers={user.followers.followersCount}
              Reviewer={user.allReviews.length}
            />
          </Link>
        );
      })}
    </>
  );
}
