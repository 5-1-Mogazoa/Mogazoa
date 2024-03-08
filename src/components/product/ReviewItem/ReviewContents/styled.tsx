import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  ${fontStyle({ w: 400, s: 12, l: 16 })};
  word-break: normal;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 45.5rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 65rem;
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;

export const ImageList = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 2rem;
  }
`;

export const Image = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  border-radius: 0.8rem;
  overflow: hidden;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 8rem;
    height: 8rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 10rem;
    height: 10rem;
  }
`;
