import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

const StyledProfileTextBox = styled.textarea`
  display: flex;
  width: 100%;
  height: 120px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  resize: none;
  outline: none;

  border-radius: 8px;
  border: 1px solid var(--color-black-35, #353542);
  background: var(--color-black-25, #252530);

  color: var(--color-white-f1, #f1f1f5);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 20 })};

  &:focus {
    border-color: var(--color-main-blue, #5097fa);
  }

  &:placeholder {
    color: var(--color-gray-6e, #6e6e82);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    height: 16rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;

const StyledProfileLetterCount = styled.span`
  background: none;
  color: var(--color-gray-6e, #6e6e82);
  text-align: right;
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 10 })};

  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const StyledProfileTextBoxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 120px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    height: 160px;
  }
`;

type StyledInputProps = {
  $isError?: boolean;
  $isVisibility?: boolean;
};

const StyledProfileInput = styled.input<StyledInputProps>`
  display: flex;
  width: 100%;
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

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    height: 70px;

    ${fontStyle({ w: 400, s: 16, l: 10 })};
  }
`;

const StyledProfileDescription = styled.span<StyledInputProps>`
  color: ${({ $isError }) => ($isError ? "var(--color-red-ff, #F00)" : "var(--color-gray_6e, #6e6e82)")};

  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 12, l: 10 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 14, l: 10 })};
  }
`;

const StyledProfilePrimaryButton = styled.button`
  margin-top: 5px;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  background: var(--color-main-gradation, linear-gradient(91deg, #5097fa 0%, #5363ff 100%));

  &:disabled {
    background: var(--color-black-35, #353542);
    color: var(--color-gray-6e, #6e6e82);
  }

  color: var(--color-white-f1, #f1f1f5);
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 600, s: 16, l: 18 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    margin-top: 25px;
    height: 55px;
    flex-shrink: 1;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    margin-top: 20px;
    height: 65px;
    ${fontStyle({ w: 600, s: 18, l: 20 })};
  }
`;

const StyledProfileForm = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 20px;
  }
`;

const StyledLabel = styled.label`
  display: none;
`;

const StyledImageContainer = styled.div`
  width: 140px;
  font-size: 0;
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 160px;
  }
`;

export {
  StyledProfileDescription,
  StyledProfileInput,
  StyledProfileLetterCount,
  StyledProfileTextBox,
  StyledProfileTextBoxContainer,
  StyledProfilePrimaryButton,
  StyledProfileForm,
  StyledLabel,
  StyledImageContainer,
};
