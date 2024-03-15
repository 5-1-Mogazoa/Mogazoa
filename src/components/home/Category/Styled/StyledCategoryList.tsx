import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

type CategoryListWrapProps = {
  $isCategory: boolean;
};

export const CategoryListWrap = styled.div<CategoryListWrapProps>`
  position: fixed;
  inset: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #17171c;
  z-index: 50;
  display: ${({ $isCategory }) => ($isCategory ? "flex" : "none")};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    position: static;
    display: block;
    margin-top: 45px;
    width: 180px;
    height: auto;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 220px;
  }
`;

export const CategoryTitle = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px 20px;
  color: var(--color-white-f1, #f1f1f5);
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 160px;
    height: 45px;
    text-align: start;
    ${fontStyle({ w: 500, s: 14, l: 16 })};
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 200px;
    height: 50px;

    ${fontStyle({ w: 500, s: 16, l: 18 })};
  }
`;

export const CloseButton = styled.button`
  color: var(--color-white-f1, #f1f1f5);
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;

export const CategoryListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
