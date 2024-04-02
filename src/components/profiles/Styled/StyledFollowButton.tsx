import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

type StyledFollowButtonProps = {
  $isFollowing: boolean;
};

export const StyledFollowButton = styled.button<StyledFollowButtonProps>`
  display: flex;
  width: 295px;
  height: 50px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;

  &:disabled {
    background: var(--color-black-35, #353542);
    color: var(--color-gray-6e, #6e6e82);
  }

  ${({ $isFollowing }) =>
    !$isFollowing
      ? `background: var(--color-main-gradation, linear-gradient(91deg, #5097fa 0%, #5363ff 100%));
  color: var(--color-white-f1, #f1f1f5);`
      : `border: 1px solid var(--color-gray-9f, #9fa6b2);
  background: unset;
  color: var(--color-gray-9f, #9fa6b2);`};

  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 600, s: 16, l: 18 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 450px;
    height: 55px;
    flex-shrink: 1;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 300px;
    height: 65px;
    ${fontStyle({ w: 600, s: 18, l: 20 })};
  }
`;
