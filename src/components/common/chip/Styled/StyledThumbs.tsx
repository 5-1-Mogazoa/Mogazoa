import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

type StyledThumbsProps = {
  $isClicked: boolean;
};

const StyledThumbs = styled.div<StyledThumbsProps>`
  cursor: pointer;
  display: inline-flex;
  padding: 6px 10px;
  align-items: center;
  gap: 5px;

  border-radius: 100px;
  border: 1px solid var(--color-black-35, #353542);
  background: var(--color-black-25, #252530);

  color: ${(props) => (props.$isClicked ? "var(--color-pink-ff, #FF2F9F)" : "var(--color-gray-9f, #9fa6b2)")};
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 12, l: 14 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    ${fontStyle({ w: 400, s: 14, l: 16 })};
  }
`;

const StyledThumbsIcon = styled.div<StyledThumbsProps>`
  width: 14px;
  height: 14px;
  background: url(${(props) => (props.$isClicked ? "/icons/upfull.svg" : "/icons/upempty.svg")}) no-repeat center /
    cover;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 18px;
    height: 18px;
  }
`;

export { StyledThumbs, StyledThumbsIcon };
