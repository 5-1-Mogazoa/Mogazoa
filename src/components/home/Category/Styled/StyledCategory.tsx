import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const HiddenRadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

export const CustomRadio = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 15px 20px;
  text-align: center;

  ${HiddenRadioInput}:hover + &,
  ${HiddenRadioInput}:checked + & {
    color: var(--color-white-f1, #f1f1f5);
    border-radius: 8px;
    border: 1px solid var(--black-black_353542, #353542);
    background: var(--black-black_252530, #252530);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 160px;
    height: 45px;
    text-align: start;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 4px;

  color: var(--gray-gray_6E6E82, #6e6e82);
  ${fontStyle({ w: 500, s: 14, l: 16 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 200px;
    height: 50px;

    ${fontStyle({ w: 500, s: 16, l: 18 })};
  }
`;
