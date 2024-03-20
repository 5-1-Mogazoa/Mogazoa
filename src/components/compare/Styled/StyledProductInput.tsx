import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: var(--color-white_f1, #f1f1f5);
  ${fontStyle({ w: 400, s: 16, l: 10 })};
`;

const StyledProductInput = styled.input`
  display: flex;
  width: 335px;
  height: 55px;
  padding: 23px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-black-35, #353542);
  background: var(--color-black-25, #252530);

  color: var(--color-white_f1, #f1f1f5);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 10 })};

  &:placeholder {
    color: var(--color-gray-6e, #6e6e82);
  }

  &:focus {
    border: 1px solid var(--color-main-blue, #5097fa);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 240px;
    align-items: flex-start;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 350px;
    height: 70px;
    align-items: center;

    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;
export { StyledProductInput as ProductInput, StyledLabel as Label };
