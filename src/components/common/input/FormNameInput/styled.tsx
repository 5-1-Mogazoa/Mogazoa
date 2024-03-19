import styled, { css } from "styled-components";
import { fontStyle } from "@/styles/theme";

export const ProductNameInputWrap = styled.div`
  position: relative;
`;

export const ProductNameInput = styled.input`
  display: flex;
  width: 295px;
  height: 55px;
  padding: 23px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-black-35, #353542);
  background: var(--color-black-25, #252530);
  color: var(--color-white, #f1f1f5);
  ${fontStyle({ w: 400, s: 14, l: 17 })};

  &:hover,
  &:focus {
    border: 1px solid var(--color-main-blue, #5097fa);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: flex;
    width: 360px;
    height: 60px;
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    height: 70px;
  }
`;

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
  top: 65px;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 360px;
    top: 70px;
  }
`;

export const matchedStyles = css`
  background: var(--color-black-35, #353542);
  color: var(--color-white, #f1f1f5);
`;

export const ProductCheckedNameItem = styled.li`
  display: flex;
  padding: 6px 20px;
  gap: 10px;
  border-radius: 6px;
  color: var(--color-gray-6e, #6e6e82);

  ${fontStyle({ w: 400, s: 14, l: 20 })};
  ${(props) => props.isMatch && matchedStyles}

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;
