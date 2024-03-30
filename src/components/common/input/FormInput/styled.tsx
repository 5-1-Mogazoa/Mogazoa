import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--color-black-35);
  background-color: var(--color-black-25);
  cursor: pointer;
  ${fontStyle({ w: 400, s: 14, l: 16.7 })};
  color: var(--color-white);

  &::placeholder {
    color: var(--color-gray-6e);
  }

  &:focus {
    border: 0.1rem solid var(--color-main-blue);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    height: 6rem;
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    height: 7rem;

    &::placeholder {
      ${fontStyle({ w: 400, s: 16, l: 22 })};
    }
  }
`;

export const SearchDropDown = styled.div`
  position: absolute;
  top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--color-black-35);
  background-color: var(--color-black-25);
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.toast};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    top: 6.5rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    top: 7.5rem;
  }
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  padding-left: 2rem;
  border-radius: 0.6rem;
  ${fontStyle({ w: 400, s: 14, l: 20 })};
  color: var(--color-gray-6e);

  &:hover {
    background-color: var(--color-black-35);
  }
`;

export const Info = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
  padding-left: 2rem;
  ${fontStyle({ w: 400, s: 13, l: 18 })};
  color: var(--color-red);
`;
