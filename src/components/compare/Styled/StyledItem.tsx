import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const ProductCheckedNameWrap = styled.ul`
  display: flex;
  width: 295px;
  padding: 10px;
  flex-direction: column;
  gap: 5px;
  border-radius: 8px;
  border: 1px solid var(--color-black-35, #353542);
  background: var(--color-black-25, #252530);
  position: absolute;
  top: 80px;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 360px;
  }
`;

export const ProductCheckedNameItem = styled.li`
  display: flex;
  padding: 6px 20px;
  gap: 10px;
  border-radius: 6px;
  color: var(--color-gray-6e, #6e6e82);
  ${fontStyle({ w: 400, s: 14, l: 20 })};
  // ${(props) => props.isMatch && matchedStyles}

  &:hover {
    background: var(--color-black-35, #353542);
    color: var(--color-white, #f1f1f5);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;
