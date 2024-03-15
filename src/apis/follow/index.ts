import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";

// 팔로우
export const postFollow = (userId: number) => {
  const requestProps = { method: "post", endPoint: API_ROUTE.FOLLOW, data: { userId: userId } };

  return apiCall(requestProps);
};

// 팔로우 취소
export const deleteFollow = (userId: number) => {
  const requestProps = { method: "delete", endPoint: API_ROUTE.FOLLOW, data: { userId: userId } };

  return apiCall(requestProps);
};
