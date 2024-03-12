import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  padding: 3rem 2rem 0;
  margin-bottom: 6rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding: 4rem 3rem 0;
    margin-bottom: 7rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding: 6rem 0 0;
    margin-bottom: 7rem;
  }
`;
