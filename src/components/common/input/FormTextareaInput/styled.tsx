import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Counter = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 0.8rem;
  ${fontStyle({ w: 400, s: 14, l: 16.7 })};
  color: var(--color-gray-6e);
`;
