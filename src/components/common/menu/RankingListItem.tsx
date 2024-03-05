import { StyledRankingChip } from "../chip/Styled/StyledRankingChip";
import {
  StyledData,
  StyledDataContainer,
  StyledDatasContainer,
  StyledRankingListItem,
  StyledRankingListItemImage,
  StyledReviewerContainer,
  StyledReviewerName,
  StyledTextContainer,
} from "./Styled/StyledRankingListItem";

type RankingListItemProps = {
  userImage: string;
  rankNum: string;
  ranking: number;
  reviewerName: string;
  Followers: number;
  Reviewer: number;
};

export default function RankingListItem({
  userImage,
  rankNum,
  ranking,
  reviewerName,
  Followers,
  Reviewer,
}: RankingListItemProps) {
  const rankText = rankNum ? `${rankNum}등` : "";
  return (
    <>
      {/* 아래 상세 내용은 props로 채워주시면 될 것 같습니다. */}
      <StyledRankingListItem>
        <StyledRankingListItemImage $imageURL={userImage} />
        <StyledTextContainer>
          <StyledReviewerContainer>
            <StyledRankingChip $ranking={rankText}>{ranking}등</StyledRankingChip>
            <StyledReviewerName>{reviewerName}</StyledReviewerName>
          </StyledReviewerContainer>
          <StyledDatasContainer>
            <StyledDataContainer>
              <StyledData>팔로워</StyledData>
              <StyledData>{Followers}</StyledData>
            </StyledDataContainer>
            <StyledDataContainer>
              <StyledData>리뷰</StyledData>
              <StyledData>{Reviewer}</StyledData>
            </StyledDataContainer>
          </StyledDatasContainer>
        </StyledTextContainer>
      </StyledRankingListItem>
    </>
  );
}
