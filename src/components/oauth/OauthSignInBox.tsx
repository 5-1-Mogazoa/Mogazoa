import { useMutation } from "@tanstack/react-query";
import {
  StyledOauthButton,
  StyledOauthButtonCircle,
  StyledOauthButtonContainer,
  StyledOauthContainer,
  StyledOauthText,
} from "./Styled/StyledOauth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { OauthResponseType } from "@/src/types/oauth/oauthDataType";
import { postOauthSignInData } from "@/src/apis/oauth";
import { PAGE_ROUTES } from "@/src/routes";
import { useOauth } from "@/src/lib/OauthProvider";
import { postToken } from "@/src/apis/auth";

type mutationParameterType = {
  idToken: string;
  provider: string;
};

export default function OauthSignInBox() {
  const router = useRouter();
  const postMutation = useMutation({
    mutationFn: ({ idToken, provider }: mutationParameterType) => postOauthSignInData(idToken, provider),
  });
  const { setToken } = useOauth();

  useEffect(() => {
    if (router.asPath.split("/signin")[1]) {
      let idToken = "";
      let provider = "";
      if (router.asPath.indexOf("code=") !== -1) {
        idToken = router.asPath.split("code=")[1];
        provider = "kakao";
      } else {
        idToken = router.asPath.split("id_token=")[1].split("&")[0];
        provider = "google";
      }
      (async () => {
        try {
          const result = (await postMutation.mutateAsync({
            idToken,
            provider: provider,
          })) as OauthResponseType;
          const accessToken = result.accessToken;
          const userId = result.user.id;
          await postToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("userId", String(userId));
          router.push("/");
        } catch (error: any) {
          //TODO: error 타입 지정
          if (error.response.status === 403) {
            alert("회원가입이 필요합니다.");
            setToken(idToken);
            router.push(`${PAGE_ROUTES.OAUTH_SIGNUP}/${provider}`);
          } else {
            console.error(error);
          }
        }
      })();
    }
  }, []);

  const handleKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `${location.origin}/signin`,
      scope: "openid",
      nonce: `${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`,
    });
  };

  return (
    <StyledOauthContainer>
      <StyledOauthText>SNS로 바로 시작하기</StyledOauthText>
      <StyledOauthButtonContainer>
        <a
          href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${location.origin}/signin&response_type=id_token&scope=openid&nonce=${
            Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
          }`}>
          <StyledOauthButtonCircle>
            <StyledOauthButton $provider="google" />
          </StyledOauthButtonCircle>
        </a>
        <StyledOauthButtonCircle onClick={handleKakaoLogin}>
          <StyledOauthButton $provider="kakao" />
        </StyledOauthButtonCircle>
      </StyledOauthButtonContainer>
    </StyledOauthContainer>
  );
}
