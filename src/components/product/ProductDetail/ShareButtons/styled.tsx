import styled from "styled-components";

export const StyledButtonContainer = styled.div`
  position: static;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    position: absolute;
    right: 0;
    top: 3.2rem;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.6rem;
  background-color: var(--color-black-25);

  &:hover {
    border: 0.1rem solid var(--color-main-blue);
  }
`;
