import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import { AuthDataType } from "@/src/types/auth/authDataType";

export const postSignUpData = async (data: AuthDataType) => {
  const requestProps = {
    method: "post",
    endPoint: API_ROUTE.AUTH_SIGNUP,
    data: data,
  };

  return await apiCall(requestProps);
};

export const postSignInData = async (data: AuthDataType) => {
  const requestProps = {
    method: "post",
    endPoint: API_ROUTE.AUTH_SIGNIN,
    data: data,
  };

  return await apiCall(requestProps);
};
