import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

type StyledCategoryChipProps = {
  $category:
    | "음악"
    | "영화/드라마"
    | "강의/책"
    | "호텔"
    | "가구/인테리어"
    | "식당"
    | "전자기기"
    | "화장품"
    | "의류/악세서리"
    | "앱";
};

export const StyledCategoryChip = styled.div<StyledCategoryChipProps>`
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 6px;

  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 12, l: 14 })};

  background: ${({ $category }) => {
    switch ($category) {
      case "음악":
        return "rgba(197, 209, 124, 0.1)";
      case "영화/드라마":
        return "rgba(247, 85, 50, 0.10)";
      case "강의/책":
        return "rgba(169, 83, 255, 0.10)";
      case "호텔":
        return "rgba(73, 175, 26, 0.10)";
      case "가구/인테리어":
        return "rgba(214, 118, 193, 0.10)";
      case "식당":
        return "rgba(255, 126, 70, 0.10)";
      case "전자기기":
        return "rgba(35, 181, 129, 0.10)";
      case "화장품":
        return "rgba(253, 82, 154, 0.10)";
      case "의류/악세서리":
        return "rgba(117, 122, 255, 0.10)";
      case "앱":
        return "rgba(48, 152, 227, 0.10)";
    }
  }};

  color: ${({ $category }) => {
    switch ($category) {
      case "음악":
        return "#c5d17c";
      case "영화/드라마":
        return "#F75532";
      case "강의/책":
        return "#A953FF";
      case "호텔":
        return "#49AF1A";
      case "가구/인테리어":
        return "#D676C1";
      case "식당":
        return "#FF7E46";
      case "전자기기":
        return "#23B581";
      case "화장품":
        return "#FD529A";
      case "의류/악세서리":
        return "#757AFF";
      case "앱":
        return "#3098E3";
    }
  }};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 500, s: 18, l: 20 })};
  }
`;