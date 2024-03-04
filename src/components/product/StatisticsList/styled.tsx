import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  ${fontStyle({ w: 600, s: 18, l: 21.4 })};
  color: var(--color-white);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: auto;
    ${fontStyle({ w: 600, s: 19, l: 30 })};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 600, s: 20, l: 23.8 })};
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 2rem;
  }
`;
