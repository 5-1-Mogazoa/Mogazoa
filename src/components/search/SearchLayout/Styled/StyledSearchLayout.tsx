import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const SearchLayout = styled.div`
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: grid;
    grid-template-columns: 180px calc(100% - 180px);
    grid-template-areas: "category mainWrap";
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 1560px;
    margin: 0 auto;
  }
`;
export const CategoryListWrap = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: block;
    grid-area: category;
  }
`;

export const MainWrap = styled.div`
  grid-area: mainWrap;
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    display: grid;
    grid-template-areas: "main rank";
    grid-template-columns: calc(100% - 250px) 250px;
  }
`;

export const RankingListWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    grid-area: rank;
  }
`;

export const SearchCardListWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 100%;
    grid-area: main;
    padding: 0 60px 0 90px;
  }
`;
