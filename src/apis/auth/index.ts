import { apiCall, apiCallProps } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import { AuthDataType } from "@/src/types/auth/authDataType";
import axios from "axios";

export const postSignUpData = (data: AuthDataType) => {
  const requestProps: apiCallProps = {
    method: "post",
    endPoint: API_ROUTE.AUTH_SIGNUP,
    data: data,
  };

  return apiCall(requestProps);
};

export const postSignInData = (data: AuthDataType) => {
  const requestProps: apiCallProps = {
    method: "post",
    endPoint: API_ROUTE.AUTH_SIGNIN,
    data: data,
  };

  return apiCall(requestProps);
};

export const postToken = async (token: string) => {
  try {
    await axios.post(API_ROUTE.API_SETTOKEN, { accessToken: token });
  } catch (error) {
    console.error(error);
  }
};

export const getToken = async () => {
  const token = localStorage.getItem("accessToken");
  return token;
};

export const resetToken = async () => {
  localStorage.setItem("accessToken", "");
  localStorage.setItem("userId", "");
};
