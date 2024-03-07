import styled from "styled-components";
// import { theme } from "@/styles/theme";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  padding: 2.3rem 2rem;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 1.6rem 3rem;
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 100%;
    height: 100%;
    padding: 1.6rem 9rem;
  }
`;

export { StyledContainer as StyleContainer };
