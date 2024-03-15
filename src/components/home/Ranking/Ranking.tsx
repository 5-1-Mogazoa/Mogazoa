import { useQuery } from "@tanstack/react-query";
import RankingListItem from "../../common/menu/RankingListItem";
import { getUserRank, getUserReviewed, getUserData } from "@/src/apis/user";
import { useEffect, useState } from "react";

export default function Ranking() {
  const { data: userRank } = useQuery({
    queryKey: ["userRank"],
    queryFn: () => getUserRank(),
  });

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    // 유저 랭킹 정보가 로딩되었을 때만 실행
    if (userRank) {
      const fetchUserDetails = async () => {
        const userDetailsPromises = userRank.map(async (user) => {
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
          <RankingListItem
            key={index}
            userImage={user.image}
            rankNum={String(index + 1)}
            ranking={index + 1}
            reviewerName={user.nickname}
            Followers={user.followers.followersCount}
            Reviewer={user.allReviews.length}
          />
        );
      })}
    </>
  );
}
