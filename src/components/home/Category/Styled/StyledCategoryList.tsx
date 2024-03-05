import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const CategoryListWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 180px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 220px;
  }
`;

export const CategoryTitle = styled.div`
  width: 160px;
  height: 45px;
  padding: 15px 20px;

  color: var(--color-white-f1, #f1f1f5);
  ${fontStyle({ w: 500, s: 14, l: 16 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 200px;
    height: 50px;

    ${fontStyle({ w: 500, s: 16, l: 18 })};
  }
`;

export const CategoryListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
