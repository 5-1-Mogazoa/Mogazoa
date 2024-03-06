import styled from "styled-components";
import * as S from "../StatisticsList/styled";

export const Container = styled(S.Container)``;

export const List = styled(S.List)`
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex-direction: column;
  }
`;
