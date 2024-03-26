import { OrderOptionType, OrderType } from "@/src/components/product/ReviewList";
import { fontStyle } from "@/styles/theme";
import { HTMLAttributes } from "react";
import styled from "styled-components";

type SortDropdownProps = {
  $isOpen: boolean;
};

export const StyledSortDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSortDropdownButton = styled.button<SortDropdownProps>`
  display: inline-flex;
  align-items: center;
  width: 100px;
  padding: 0 10px;

  color: ${(props) => (props.$isOpen ? "var(--color-white-f1, #F1F1F5)" : "var(--color-gray-6e, #6e6e82)")};
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 16 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 140px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding: 0 20px;
    width: 160px;
    ${fontStyle({ w: 400, s: 16, l: 18 })};
  }
`;

export const StyledSortDropdownIcon = styled.div<SortDropdownProps>`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

  background: url(${(props) => (props.$isOpen ? "/icons/dropup.svg" : "/icons/dropdown.svg")}) no-repeat center / cover;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    right: 10px;
    width: 22px;
    height: 22px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    right: 20px;
    width: 24px;
    height: 24px;
  }
`;

export const StyledSortDropdownContent = styled.div<SortDropdownProps>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  top: 105%;
  left: 0;
  z-index: 1;
  margin-top: 5px;

  width: 100px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  border-radius: 8px;
  border: 1px solid var(--black-black_353542, #353542);
  background: var(--black-black_252530, #252530);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 140px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 160px;
  }
`;

export const StyledSortDropdownItemWrap = styled.li`
  list-style: none;
`;

type StyledSortDropdownItemProps = HTMLAttributes<HTMLDivElement> & {
  value: OrderOptionType;
  onClick: (selectedOrder: OrderType) => void;
};

export const StyledSortDropdownItem = styled.div<StyledSortDropdownItemProps>`
  cursor: pointer;
  display: flex;
  padding: 6px 5px;
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
    padding: 6px 20px;
  }
`;
