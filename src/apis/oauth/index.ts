import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import { OauthDataType } from "@/src/types/oauth/oauthDataType";

export const postOauthSignInData = async (id_token: string, provider: string) => {
  const requestProps = {
    method: "post",
    endPoint: API_ROUTE.OAUTH_SIGNIN(provider),
    data: {
      redirectUri: `${location.origin}/signin`,
      token: id_token,
    },
  };

  return await apiCall(requestProps);
};

export const postOauthSignUpData = async (data: OauthDataType, provider: string) => {
  const requestProps = {
    method: "post",
    endPoint: API_ROUTE.OAUTH_SIGNUP(provider),
    data: {
      nickname: data.nickname,
      redirectUri: `${location.origin}/oauth/signup/kakao`,
      token: data.token,
    },
  };

  return await apiCall(requestProps);
};
