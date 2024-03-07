import Image from "next/image";
import {
  StyledOauthButton,
  StyledOauthButtonCircle,
  StyledOauthButtonContainer,
  StyledOauthContainer,
  StyledOauthText,
} from "./Styled/StyledOauth";

export default function OatuhSignInBox() {
  return (
    <StyledOauthContainer>
      <StyledOauthText>SNS로 바로 시작하기</StyledOauthText>
      <StyledOauthButtonContainer>
        <StyledOauthButtonCircle>
          <StyledOauthButton $provider="google" />
        </StyledOauthButtonCircle>
        <StyledOauthButtonCircle>
          <StyledOauthButton $provider="kakao" />
        </StyledOauthButtonCircle>
      </StyledOauthButtonContainer>
    </StyledOauthContainer>
  );
}
