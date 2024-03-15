import { fontStyle } from "@/styles/theme";
import { StyledPrimaryButton } from "../button/Styled/StyledButton";
import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

type ContainerProps = {
  $isSmall: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 33.5rem;
  padding: 2rem;
  border-radius: 1.2rem;
  background-color: var(--color-black-1c);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: ${({ $isSmall }) => ($isSmall === true ? "50rem" : "59rem")};
    padding: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: ${({ $isSmall }) => ($isSmall === true ? "50rem" : "62rem")};
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  ${fontStyle({ w: 600, s: 20, l: 28 })};
  color: var(--color-white);

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 600, s: 24, l: 28.6 })};
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    top: -1.8rem;
    right: -1.8rem;
    width: 3.6rem;
    height: 3.6rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    top: -2rem;
    right: -2rem;
    width: 4rem;
    height: 4rem;
  }
`;

// compare_comfirm의 경우 children이 없어서 헤더와 버튼 사이의 간격을 주기 위한 스타일
export const EmptyGapBox = styled.div`
  height: 3rem;
  width: 100%;
`;

export const ModalButton = styled(StyledPrimaryButton)`
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 100%;
  }
`;
