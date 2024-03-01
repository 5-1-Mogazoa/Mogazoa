import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

const StyledTextBox = styled.textarea`
  display: flex;
  width: 295px;
  height: 120px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  resize: none;
  outline: none;

  border-radius: 8px;
  border: 1px solid var(--color-black-35, #353542);
  background: var(--color-black-25, #252530);

  color: var(--color-white-f1, #f1f1f5);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 20 })};

  &:focus {
    border-color: var(--color-main-blue, #5097fa);
  }

  &:placeholder {
    color: var(--color-gray-6e, #6e6e82);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 360px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 400px;
    height: 128px;

    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;

const StyledLetterCount = styled.span`
  background: none;
  color: var(--color-gray-6e, #6e6e82);
  text-align: right;
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 10 })};

  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const StyledTextBoxContainer = styled.div`
  position: relative;
  width: 295px;
  height: 120px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 360px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 400px;
    height: 128px;
  }
`;

export { StyledTextBox, StyledLetterCount, StyledTextBoxContainer };
