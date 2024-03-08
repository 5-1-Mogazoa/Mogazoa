import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    align-items: flex-start;
    width: 15.9rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 16.4rem;
  }
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 3.6rem;
  height: 3.6rem;
  overflow: hidden;
  border-radius: 999px;
  object-fit: cover;
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 4.2rem;
    height: 4.2rem;
  }
`;

export const UserTextInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0.6rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 1.5rem;
  }
`;

export const NameWithFollowReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 0.9rem;
  }
`;

export const NameWithRanking = styled.div`
  display: flex;
  gap: 0.5rem;
  ${fontStyle({ w: 400, s: 14, l: 16.7 })};
  color: var(--color-white);

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 19 })};
  }
`;

export const FollowReview = styled.div`
  display: flex;
  gap: 1rem;
  ${fontStyle({ w: 300, s: 10, l: 11.9 })};
  color: var(--color-gray-6e);

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 300, s: 12, l: 14.3 })};
  }
`;
