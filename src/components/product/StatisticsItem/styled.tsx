import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 2rem;
  width: 100%;
  border: 0.1rem solid var(--color-black-35);
  border-radius: 1.2rem;
  background-color: var(--color-black-25);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 21.8rem;
    height: 16.9rem;
    padding: 3rem 0;
    align-items: center;
    gap: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 30rem;
    height: 19rem;
    gap: 2rem;
  }
`;

export const TitleWithCount = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${fontStyle({ w: 500, s: 14, l: 19 })};
  color: var(--color-white);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    ${fontStyle({ w: 500, s: 16, l: 19 })};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 2rem;
    ${fontStyle({ w: 500, s: 18, l: 21.4 })};
  }
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  height: 1.9rem;
  gap: 0.5rem;
  ${fontStyle({ w: 300, s: 16, l: 19 })};
  color: var(--color-gray-9f);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    height: 100%;
    ${fontStyle({ w: 300, s: 20, l: 23.8 })}
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 300, s: 24, l: 28.6 })}
  }
`;

export const Icon = styled.div`
  position: relative;
  width: 1.9rem;
  height: 1.9rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const Result = styled.div`
  ${fontStyle({ w: 300, s: 12, l: 18 })};
  color: var(--color-gray-6e);

  & span {
    color: var(--color-white);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 13.1rem;
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 15.2rem;
    ${fontStyle({ w: 300, s: 14, l: 20 })}
  }
`;
