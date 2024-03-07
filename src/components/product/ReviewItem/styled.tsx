import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  padding: 2rem;
  border: 0.1rem solid var(--color-black-35);
  border-radius: 1.2rem;
  background-color: var(--color-black-25);
  color: var(--color-white);

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 68.4rem;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding: 3rem;
    width: 94rem;
  }
`;

export const ContentsWithFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
