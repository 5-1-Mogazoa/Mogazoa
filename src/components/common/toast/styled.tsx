import { fontStyle } from "@/styles/theme";
import styled, { keyframes } from "styled-components";

interface ContainerType {
  $type?: "success" | "error" | string;
  $mobileStyle?: string;
  $tabletStyle?: string;
  $desktopStyle?: string;
}

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  50% {
    opacity: 0.9;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(2rem);
  }
`;

export const Container = styled.div<ContainerType>`
  ${({ $mobileStyle }) => ($mobileStyle ? $mobileStyle : "position: fixed; bottom: 5rem; left: 35%;")};
  padding: 1rem 1.4rem;
  border-radius: 0.6rem;
  z-index: ${({ theme }) => theme.zIndex.toast};
  ${fontStyle({ w: 400, s: 13, l: 14 })};
  color: var(--color-white);
  background-color: ${({ $type }) => ($type === "success" ? "var(--color-main-blue)" : "var(--color-red)")};
  opacity: 0;
  animation: ${fadeInOut} 3s ease forwards;
  animation-duration: 3s;
  white-space: nowrap; // 강제로 1줄 만들기

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    ${({ $tabletStyle }) => ($tabletStyle ? $tabletStyle : "left: 45%;")};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${({ $desktopStyle }) => ($desktopStyle ? $desktopStyle : "")};
  }
`;
