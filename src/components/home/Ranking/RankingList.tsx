import Ranking from "./Ranking";
import { RankingWarp, RankingScroll, RankingTitle } from "./Styled/StyledRankingList";

export default function RankingList() {
  return (
    <>
      <RankingWarp>
        <RankingTitle>리뷰어랭킹</RankingTitle>
        <RankingScroll>
          <Ranking />
        </RankingScroll>
      </RankingWarp>
    </>
  );
}
