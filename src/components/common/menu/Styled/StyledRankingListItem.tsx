import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

type StyledRankingListProps = {
  $imageURL: string;
};

const StyledRankingListItem = styled.li`
  display: flex;
  gap: 10px;
`;

const StyledRankingListItemImage = styled.div<StyledRankingListProps>`
  width: 36px;
  height: 36px;
  border-radius: 100px;
  background: url(${({ $imageURL }) => $imageURL}) no-repeat center / cover;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 42px;
    height: 42px;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 9px;
  }
`;

const StyledReviewerContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledReviewerName = styled.div`
  color: var(--white-white_F1F1F5, #f1f1f5);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 16 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 18 })};
  }
`;

const StyledDatasContainer = styled.div`
  display: flex;
  height: 14px;
  align-items: center;
  gap: 10px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 15px;
  }
`;

const StyledDataContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;

const StyledData = styled.div`
  color: var(--color-gray-6e, #6e6e82);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 300, s: 10, l: 12 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 300, s: 12, l: 14 })};
  }
`;

export {
  StyledData,
  StyledDataContainer,
  StyledDatasContainer,
  StyledRankingListItem,
  StyledRankingListItemImage,
  StyledReviewerContainer,
  StyledReviewerName,
  StyledTextContainer,
};
