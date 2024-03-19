import styled from "styled-components";
import { fontStyle } from "@/styles/theme";
import { CategoryType } from "@/src/apis/product/schema";

type StyledCategoryChipProps = {
  $category: CategoryType | undefined;
  $small: boolean;
};

export const StyledCategoryChip = styled.div<StyledCategoryChipProps>`
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: fit-content;

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
      case "의류/잡화":
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
      case "의류/잡화":
        return "#757AFF";
      case "앱":
        return "#3098E3";
    }
  }};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    font-size: ${({ $small }) => ($small ? "1.2rem" : "1.8rem")};
    font-weight: ${({ $small }) => ($small ? "400" : "500")};
    line-height: ${({ $small }) => ($small ? "1.4rem" : "2rem")};
  }
`;
