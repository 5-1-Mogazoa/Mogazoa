import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 335px;
  gap: 30px;
  padding-top: 30px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding-top: 181px;
    width: 440px;
    gap: 40px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding-top: 90px;
    width: 640px;
  }
`;

const StyledSignInForm = styled(StyledSignUpForm)`
  padding-top: 108px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding-top: 250px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding-top: 181px;
  }
`;

const StyledOauthSignUpForm = styled(StyledSignUpForm)`
  padding-top: 228px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding-top: 376px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding-top: 315px;
  }
`;

const StyledSignUpButtonContainer = styled.div`
  margin-top: 126px;
  width: 335px;
  height: 50px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    margin-top: 20px;
    width: 440px;
    height: 55px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 640px;
    height: 65px;
  }
`;

const StyledSignInButtonContainer = styled(StyledSignUpButtonContainer)`
  margin-top: 30px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    margin-top: 20px;
  }
`;

const StyledOauthSignUpButtonContainer = styled(StyledSignInButtonContainer)``;

const StyledOauthErrorContainer = styled(StyledSignUpForm)`
  padding-top: 257px;
  gap: 80px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding-top: 385px;
    gap: 120px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding-top: 323px;
    gap: 140px;
  }
`;

const StyledOauthErrorMessage = styled.span`
  color: var(--color-white-f1, #f1f1f5);
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 600, s: 20, l: 28 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 600, s: 24, l: 28 })};
  }
`;

export {
  StyledOauthErrorContainer,
  StyledOauthErrorMessage,
  StyledOauthSignUpButtonContainer,
  StyledOauthSignUpForm,
  StyledSignUpButtonContainer,
  StyledSignUpForm,
  StyledSignInButtonContainer,
  StyledSignInForm,
};
