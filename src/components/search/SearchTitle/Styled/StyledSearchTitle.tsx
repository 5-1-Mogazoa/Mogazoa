import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

const SearchTitleName = styled.div`
  margin: 60px 0 30px;
  color: var(--color-white, #f1f1f5);
  ${fontStyle({ w: 600, s: 20, l: 28 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 600, s: 24, l: 29 })};
  }
`;

export { SearchTitleName };
