import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    gap: 1.5rem;
    padding: 4rem 0;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 2rem;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  height: 2.8rem;
  ${fontStyle({ w: 400, s: 14, l: 16.7 })};
  color: var(--color-gray-6e);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    height: 3.2rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 2rem;
    ${fontStyle({ w: 400, s: 16, l: 19 })};
  }
`;
