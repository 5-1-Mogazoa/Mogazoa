import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

export const StyledDescription = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  ${fontStyle({ w: 400, s: 14, l: 22 })};
  color: var(--color-gray-6e);

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;
