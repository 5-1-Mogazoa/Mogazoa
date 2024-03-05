import { useQuery } from "@tanstack/react-query";
import RankingListItem from "../../common/menu/RankingListItem";
import { getUserRank } from "@/src/apis/ranking";

export default function Ranking() {
  const { data: userRank } = useQuery({
    queryKey: ["userRank"],
    queryFn: () => getUserRank(),
  });

  return (
    <>
      {userRank?.map((user: any, index: number) => {
        return (
          <RankingListItem
            key={index}
            userImage={user.image}
            rankNum={String(index + 1)}
            ranking={index + 1}
            reviewerName={user.nickname}
            Followers={10}
            Reviewer={10}
          />
        );
      })}
    </>
  );
}
