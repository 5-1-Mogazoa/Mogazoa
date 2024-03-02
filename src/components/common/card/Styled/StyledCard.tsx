import { fontStyle } from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";

export const StyledCardWarp = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-black-35, #353542);
  background: var(--color-black-25, #252530);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    gap: 10px 10px 20px 10px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding: 20px 20px 25px 20px;
    gap: 25px;
  }
`;

export const StyledImageWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const StyedImageWidth = styled.div`
  padding-top: 70%;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
`;

export const CardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardTitle = styled.div`
  color: var(--color-white, #f1f1f5);
  ${fontStyle({ w: 500, s: 14, l: 17 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    ${fontStyle({ w: 500, s: 16, l: 19 })};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 500, s: 18, l: 21.5 })};
  }
`;

export const CardUserReaction = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserReactionWarp = styled.div`
  display: flex;
  gap: 10px;
  color: var(--color-gray-9f, #9fa6b2);
  ${fontStyle({ w: 300, s: 12, l: 15 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    ${fontStyle({ w: 300, s: 14, l: 17 })};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 300, s: 16, l: 19 })};
  }
`;
export const Review = styled.div``;

export const Pick = styled.div``;

export const Rate = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

export const RateImage = styled(Image)`
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 15px;
    height: 15px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 16px;
    height: 16px;
  }
`;

export const RateScore = styled.div`
  color: var(--color-gray-9f, #9fa6b2);
  ${fontStyle({ w: 300, s: 12, l: 15 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    ${fontStyle({ w: 300, s: 14, l: 17 })};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 300, s: 16, l: 19 })};
  }
`;
