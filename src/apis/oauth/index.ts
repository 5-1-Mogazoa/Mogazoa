import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";

export const postOauthSignInData = async (id_token: string, provider: string) => {
  const requestProps = {
    method: "post",
    endPoint: API_ROUTE.OAUTH_SIGNIN(provider),
    data: {
      redirectUri: `${location.origin}/oauth/${provider}`,
      token: id_token,
    },
  };

  return await apiCall(requestProps);
};
