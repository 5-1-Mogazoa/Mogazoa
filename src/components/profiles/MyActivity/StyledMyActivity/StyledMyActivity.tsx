import ReactNode from "react"; // Import ReactNode directly
import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

export const StyledActivities = styled.div`
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 509px;
    margin: 0 auto;
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 100%;
  }
`;

export const ActivityList = styled.div`
  color: var(--white-white_F1F1F5, #f1f1f5);
  margin-bottom: 30px;
  ${fontStyle({ w: 600, s: 18, l: 21 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 600, s: 20, l: 24 })};
  }
`;

export const StyledMyActivitiesBox = styled.div`
  display: flex;
  gap: 20px;
`;
export const StyledMyActivities = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 119px;
  padding: 20px 21px;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 12px;
  border: 1px solid var(--black-black_353542, #353542);
  background: var(--black-black_252530, #252530);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
  }
`;
export const StyledMyActivitiesText = styled.div`
  color: var(--gray-gray_9FA6B2, #9fa6b2);
  text-align: center;
  ${fontStyle({ w: 500, s: 14, l: 20 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 600, s: 16, l: 19 })};
  }
`;
export const StyledMyActivitiesNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: var(--white-white_F1F1F5, #f1f1f5);
  ${fontStyle({ w: 400, s: 20, l: 24 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
  }
`;

export const StyledRatings = styled.span`
  color: white;
  ${fontStyle({ w: 400, s: 20, l: 24 })};
`;
