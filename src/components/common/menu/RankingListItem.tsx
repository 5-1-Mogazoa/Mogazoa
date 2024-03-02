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

export default function RankingListItem() {
  return (
    <>
      {/* 아래 상세 내용은 props로 채워주시면 될 것 같습니다. */}
      <StyledRankingListItem>
        <StyledRankingListItemImage $imageURL="https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1709337600&semt=ais" />
        <StyledTextContainer>
          <StyledReviewerContainer>
            <StyledRankingChip $ranking="1등">1등</StyledRankingChip>
            <StyledReviewerName>리뷰어 이름</StyledReviewerName>
          </StyledReviewerContainer>
          <StyledDatasContainer>
            <StyledDataContainer>
              <StyledData>팔로워</StyledData>
              <StyledData>123</StyledData>
            </StyledDataContainer>
            <StyledDataContainer>
              <StyledData>리뷰</StyledData>
              <StyledData>234</StyledData>
            </StyledDataContainer>
          </StyledDatasContainer>
        </StyledTextContainer>
      </StyledRankingListItem>
    </>
  );
}
