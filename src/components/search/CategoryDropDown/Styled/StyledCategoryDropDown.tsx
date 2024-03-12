import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

const CategoryFilter = styled.button`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 100px;
  border: 1px solid var(--color-black-35, #353542);
  background: var(--color-black-25, #252530);
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;

const FilterText = styled.div`
  color: var(--color-gray-9f, #9fa6b2);

  ${fontStyle({ w: 400, s: 14, l: 17 })};
`;
export { CategoryFilter, FilterText };
