import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

type StyledCategoryMenuBarProps = {
  $selected?: boolean;
};

const StyledCategoryMenuBarTitle = styled.div`
  display: flex;
  width: 160px;
  height: 45px;
  padding: 15px 20px;
  align-items: center;
  gap: 10px;

  color: var(--color-white-f1, #f1f1f5);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 500, s: 14, l: 16 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 200px;
    height: 50px;

    ${fontStyle({ w: 500, s: 16, l: 18 })};
  }
`;

const StyledCategoryMenuItem = styled.div<StyledCategoryMenuBarProps>`
  cursor: pointer;
  display: flex;
  width: 160px;
  height: 45px;
  padding: 15px 20px;
  align-items: center;
  gap: 10px;

  color: var(--color-gray-6e, #6e6e82);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 500, s: 14, l: 16 })};

  ${({ $selected: $selceted }) =>
    $selceted &&
    `
      color: var(--color-white-f1, #F1F1F5);
      border-radius: 8px;
      border: 1px solid var(--black-black_353542, #353542);
      background: var(--black-black_252530, #252530);
    `}

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 200px;
    height: 50px;

    ${fontStyle({ w: 500, s: 16, l: 18 })};
  }
`;

export { StyledCategoryMenuBarTitle, StyledCategoryMenuItem };
