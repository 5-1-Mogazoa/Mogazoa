import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

type DropdownProps = {
  $isOpen: boolean;
};

const StyledDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledDropdownButton = styled.button<DropdownProps>`
  display: flex;
  width: 335px;
  height: 55px;
  padding: 17px 20px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid ${(props) => (props.$isOpen ? "var(--color-main-blue, #5097FA)" : "var(--color-black-35, #353542)")};
  background: var(--color-black-25, #252530);

  color: ${(props) => (props.$isOpen ? "var(--color-white-f1, #F1F1F5)" : "var(--color-gray-6e, #6e6e82)")};
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 16 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 360px;
    height: 60px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 400px;
    padding: 20px 23px;
    ${fontStyle({ w: 400, s: 16, l: 18 })};
  }
`;

const StyledDropdownIcon = styled.div<DropdownProps>`
  position: absolute;
  top: 17px;
  right: 20px;
  width: 20px;
  height: 20px;

  background: url(${(props) => (props.$isOpen ? "/icons/dropup.svg" : "/icons/dropdown.svg")}) no-repeat center / cover;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 22px;
    height: 22px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 24px;
    height: 24px;
    top: 20px;
    right: 23px;
  }
`;

const StyledDropdownContent = styled.div<DropdownProps>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  top: 105%;
  left: 0;
  z-index: 1;

  width: 335px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  border-radius: 8px;
  border: 1px solid var(--black-black_353542, #353542);
  background: var(--black-black_252530, #252530);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 360px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 400px;
  }
`;

const StyledDropdownItem = styled.div`
  cursor: pointer;
  display: flex;
  padding: 6px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 6px;

  color: var(--color-gray-6e, #6e6e82);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 20 })};

  &:hover {
    background: var(--color-black-35, #353542);
    color: var(--color-white-f1, #f1f1f5);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;

export { StyledDropdownIcon, StyledDropdownButton, StyledDropdownContainer, StyledDropdownContent, StyledDropdownItem };
