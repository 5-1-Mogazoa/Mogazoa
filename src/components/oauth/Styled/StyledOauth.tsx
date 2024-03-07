import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

type OauthProps = {
  $provider: "google" | "kakao";
};

const StyledOauthContainer = styled.div`
  display: flex;
  width: 132px;
  margin: 0 auto;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
`;

const StyledOauthText = styled.span`
  color: var(--color-gray-6e, #6e6e82);
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 16 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 18 })};
  }
`;

const StyledOauthButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledOauthButtonCircle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: url("/icons/circle.svg") no-repeat center / cover;
`;

const StyledOauthButton = styled.button<OauthProps>`
  display: flex;
  width: 28px;
  height: 28px;
  padding: 3.5px 3.919px 3.501px 3.5px;
  justify-content: center;
  align-items: center;
  background: url(${({ $provider }) => `/icons/${$provider}.svg`}) no-repeat center/ cover;
`;

export {
  StyledOauthButton,
  StyledOauthButtonCircle,
  StyledOauthButtonContainer,
  StyledOauthContainer,
  StyledOauthText,
};
