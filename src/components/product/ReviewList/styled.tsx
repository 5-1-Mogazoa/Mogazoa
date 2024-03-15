import styled from "styled-components";
import * as S from "../StatisticsList/styled";
import { fontStyle } from "@/styles/theme";

export const Container = styled(S.Container)`
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 68.4rem;
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 94rem;
  }
`;

export const TitleWithOrer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled(S.List)`
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex-direction: column;
  }
`;

export const NoList = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  ${fontStyle({ w: 400, s: 14, l: 22 })};
  color: var(--color-gray-6e);

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;

export const ScrollButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  ${fontStyle({ w: 400, s: 14, l: 22 })};
  color: var(--color-gray-6e);

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;
