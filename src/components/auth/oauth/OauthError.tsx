import Link from "next/link";
import { StyledPrimaryButton } from "../../common/button/Styled/StyledButton";
import { StyledOauthErrorContainer, StyledOauthErrorMessage } from "../Styled/StyledAuthForm";

export default function OauthError() {
  return (
    <StyledOauthErrorContainer>
      <StyledOauthErrorMessage>비정상적인 접근입니다.</StyledOauthErrorMessage>
      <Link href="/">
        <StyledPrimaryButton type="button">홈으로 가기</StyledPrimaryButton>
      </Link>
    </StyledOauthErrorContainer>
  );
}
