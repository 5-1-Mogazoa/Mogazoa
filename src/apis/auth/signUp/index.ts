import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import SignUpData from "@/src/types/auth/signUp/signUpData";

export const postSignUpData = async (data: SignUpData) => {
  const requestProps = {
    method: "post",
    endPoint: API_ROUTE.AUTH_SIGNUP,
    data: data,
  };

  return await apiCall(requestProps);
};
