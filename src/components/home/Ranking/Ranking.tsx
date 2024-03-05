import { useQuery } from "@tanstack/react-query";
import RankingListItem from "../../common/menu/RankingListItem";
import { getUserRank, getUserReviewed, getUserFollowers } from "@/src/apis/ranking";
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
          const followers = await getUserFollowers(userId);
          const reviewer = await getUserReviewed(userId);

          return {
            ...user,
            followers,
            reviewer,
          };
        });

        const userDetailsData = await Promise.all(userDetailsPromises);
        setUserDetails(userDetailsData?.slice(0, 5));
      };

      fetchUserDetails();
    }
  }, [userRank]);

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
            Followers={user.followers.list.length}
            Reviewer={user.reviewer.list.length}
          />
        );
      })}
    </>
  );
}
