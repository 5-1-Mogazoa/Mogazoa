import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

const StyledButton = styled.button`
  display: none;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: block;
    color: var(--white-white_F1F1F5, #f1f1f5);
    ${fontStyle({ w: 400, s: 14, l: 22 })};
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;

export { StyledButton as StyledButton };
