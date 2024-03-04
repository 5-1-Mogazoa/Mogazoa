import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  padding: 2rem;
  border: 0.1rem solid var(--color-black-35);
  border-radius: 1.2rem;
  background-color: var(--color-black-25);
  color: var(--color-white);
`;

export const UserWithRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UserImage = styled.div`
  position: relative;
  width: 3.6rem;
  height: 3.6rem;
  overflow: hidden;
  border-radius: 999px;
`;

export const NameFollowReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const NameWithRanking = styled.div`
  display: flex;
  gap: 0.5rem;
  ${fontStyle({ w: 400, s: 14, l: 16.7 })};
  color: var(--color-white);
`;

export const FollowReview = styled.p`
  ${fontStyle({ w: 300, s: 10, l: 11.9 })};
  color: var(--color-gray-6e);
`;
