import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex-direction: row;
    width: 68.4rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 94rem;
    gap: 4rem;
  }
`;

export const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 23.6rem;
  border-radius: 0.8rem;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 28rem;
    height: 19.7rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 35.5rem;
    height: 24rem;
  }
`;

export const ProductTextWithButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 38.4rem;
    gap: 6rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 54.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex-direction: row;
  }
`;
