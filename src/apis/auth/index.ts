import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import { AuthDataType } from "@/src/types/auth/authDataType";
import axios from "axios";

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

export const postToken = async (token: string) => {
  try {
    await axios.post(API_ROUTE.API_SETTOKEN, { accessToken: token });
  } catch (error) {
    console.error(error);
  }
};

export const getToken = async () => {
  try {
    const res = await axios.get(API_ROUTE.API_GETTOKEN);
    const result = res.data.accessToken;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const resetToken = async () => {
  try {
    await axios.post(API_ROUTE.API_RESETTOKEN);
  } catch (error) {
    console.error(error);
  }
};
