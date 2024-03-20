import { fontStyle } from "@/styles/theme";
import styled, { keyframes } from "styled-components";

interface ContainerType {
  $type: "success" | "error" | string;
}

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 0.9;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const Container = styled.div<ContainerType>`
  position: absolute;
  bottom: 140%;
  left: -30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.8rem 1.2rem;
  border-radius: 0.6rem;
  z-index: ${({ theme }) => theme.zIndex.toast};
  ${fontStyle({ w: 400, s: 12, l: 14 })};
  color: var(--color-white);
  background-color: ${({ $type }) => ($type === "success" ? "var(--color-main-blue)" : "var(--color-red)")};
  opacity: 0;
  animation: ${fadeInOut} 3s ease forwards;
  animation-duration: 3s;
  white-space: nowrap; // 강제로 1줄 만들기
`;
