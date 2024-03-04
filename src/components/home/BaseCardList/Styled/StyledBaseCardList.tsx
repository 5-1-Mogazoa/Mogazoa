import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const CardListBoxWrap = styled.div`
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding: 0 30px;
  }

  @media (min-width: 1090px) {
    max-width: 1090px;
  }
`;

export const CardListTitleBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 60px 0 30px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    gap: 20px;
    margin: 80px 0 30px;
  }
`;

export const CardListTitle = styled.div`
  color: var(--color-white, #f1f1f5);
  ${fontStyle({ w: 600, s: 20, l: 28 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    ${fontStyle({ w: 600, s: 24, l: 28 })};
  }
`;

export const CardListDes = styled.span`
  background: var(--main-main_gradation, linear-gradient(91deg, #5097fa 0%, #5363ff 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${fontStyle({ w: 600, s: 20, l: 28 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    ${fontStyle({ w: 600, s: 24, l: 28 })};
  }
`;

export const CardListBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;

  @media (min-width: 1090px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
