import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${fontStyle({ w: 400, s: 12, l: 14.3 })};
  color: var(--color-gray-6e);

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 14, l: 16.7 })};
  }
`;

export const DateWithButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 2rem;
  }
`;

export const EditDeleteButtons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    ${fontStyle({ w: 300, s: 12, l: 14.3 })};
    color: var(--color-gray-9f);
    text-decoration: underline;

    @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
      ${fontStyle({ w: 400, s: 14, l: 16.7 })};
    }
  }
`;

type LikeIconProps = {
  $isLiked: boolean;
};

export const LikeButton = styled.button<LikeIconProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  height: 2.6rem;
  padding: 0.6rem 1rem;
  border: 0.1rem solid var(--color-black-35);
  border-radius: 10rem;
  ${fontStyle({ w: 400, s: 12, l: 14.3 })};
  color: ${({ $isLiked }) => ($isLiked ? "var(--color-main-blue)" : "var(--color-gray-9f)")};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    height: 3rem;
    padding: 0.6rem 1.2rem;
    ${fontStyle({ w: 400, s: 14, l: 16.7 })};
  }
`;

export const LikeIcon = styled.div`
  position: relative;
  width: 1.4rem;
  height: 1.4rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
