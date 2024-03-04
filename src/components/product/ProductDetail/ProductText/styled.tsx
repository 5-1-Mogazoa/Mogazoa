import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    gap: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 1rem;
  }
`;

export const TagWithShare = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const TitleWithFavorite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  ${fontStyle({ w: 600, s: 20, l: 28 })};
  color: var(--color-white);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    justify-content: flex-start;
    gap: 1.5rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    margin-bottom: 1rem;
  }
`;

export const Description = styled.p`
  ${fontStyle({ w: 400, s: 14, l: 20 })};
  color: var(--color-white);
  overflow: hidden;
  white-space: normal;
  /* word-break: keep-all; */
  word-break: normal;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
