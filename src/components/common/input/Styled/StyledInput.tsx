import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

type StyledInputProps = {
  $isError?: boolean;
  $isVisibility?: boolean;
};

const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  width: 335px;
  height: 55px;
  padding: 23px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${({ $isError }) => ($isError ? "var(--color-red-ff, #F00)" : "var(--color-black-35, #353542)")};
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
    width: 440px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 640px;
    height: 70px;

    ${fontStyle({ w: 400, s: 16, l: 10 })};
  }
`;

const StyledLabel = styled.label`
  color: var(--color-white_f1, #f1f1f5);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 10 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 10 })};
  }
`;

const StyledDescription = styled.span<StyledInputProps>`
  color: ${({ $isError }) => ($isError ? "var(--color-red-ff, #F00)" : "var(--color-gray_6e, #6e6e82)")};

  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 12, l: 10 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 14, l: 10 })};
  }
`;

const StyledInputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const StyledPasswordInputContainer = styled.div`
  position: relative;
  width: 335px;
  height: 55px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 440px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 640px;
    height: 70px;
  }
`;

const StyledPasswordOnOffButton = styled.button<StyledInputProps>`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: url(${({ $isVisibility }) => ($isVisibility ? "/icons/visibilityOn.svg" : "/icons/visibilityOff.svg")})
    no-repeat center / cover;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 24px;
    height: 24px;
  }
`;

export {
  StyledPasswordInputContainer,
  StyledPasswordOnOffButton,
  StyledInputContainer,
  StyledDescription,
  StyledInput,
  StyledLabel,
};
