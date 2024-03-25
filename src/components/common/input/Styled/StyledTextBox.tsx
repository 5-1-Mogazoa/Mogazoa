import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

const StyledTextBox = styled.textarea`
  display: flex;
  width: 100%;
  /* height: 120px; */
  height: 63px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  resize: none;
  outline: none;
  border: none;
  background: var(--color-black-25, #252530);
  color: var(--color-white-f1, #f1f1f5);
  ${fontStyle({ w: 400, s: 14, l: 20 })};

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라 */
  }

  &:placeholder {
    color: var(--color-gray-6e, #6e6e82);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 100%;
    height: 103px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 100%;
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;

const StyledLetterCount = styled.span`
  background: none;
  color: var(--color-gray-6e, #6e6e82);
  text-align: right;
  ${fontStyle({ w: 400, s: 14, l: 10 })};

  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const StyledTextBoxContainer = styled.div`
  position: relative;
  padding: 20px 20px;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid var(--color-black-35, #353542);
  background: var(--color-black-25, #252530);

  &:focus {
    border: 1px solid var(--color-main-blue, #5097fa);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    height: 160px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    height: 160px;
  }
`;

export { StyledTextBox, StyledLetterCount, StyledTextBoxContainer };
