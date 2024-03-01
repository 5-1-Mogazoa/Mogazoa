import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

type StyledRankingChipProps = {
  $ranking: "1등" | "2등" | "3등";
};

export const StyledRankingChip = styled.div<StyledRankingChipProps>`
  display: inline-flex;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 50px;

  text-align: center;
  font-family: Pretendard;
  ${fontStyle({ w: 400, s: 10, l: 12 })};

  background: ${({ $ranking }) => {
    switch ($ranking) {
      case "1등":
        return "var(--color-pink-10, rgba(255, 47, 159, 0.10))";
      case "2등":
        return "var(--color-green-10, rgba(5, 213, 139, 0.10))";
      case "3등":
        return "rgba(159, 166, 178, 0.10)";
    }
  }};

  color: ${({ $ranking }) => {
    switch ($ranking) {
      case "1등":
        return "var(--color-pink-ff, #FF2F9F)";
      case "2등":
        return "var(--color-green-ff, #05D58B)";
      case "3등":
        return "var(--color-gray-9f, #9FA6B2)";
    }
  }};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding: 2px 8px;
    ${fontStyle({ w: 400, s: 12, l: 14 })};
  }
`;
