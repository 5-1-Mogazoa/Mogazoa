import { fontStyle } from "@/styles/theme";
import styled from "styled-components";
const SearchProductsBox = styled.div`
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding: 0 30px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding: 0;
  }
`;
const SearchFilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    justify-content: flex-end;
  }
`;

export { SearchProductsBox, SearchFilterBox };
