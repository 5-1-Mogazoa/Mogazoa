import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";

// 유저들 랭킹 조회
export const getUsersRanking = async () => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_RANK };

  return await apiCall(requestProps);
};

// 유저가 리뷰한 상품 조회
export const getUserReview = async (userId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_REVIEWED_PRODUCT(userId) };

  return await apiCall(requestProps);
};

// 유저를 팔로우한 유저 조회
export const getUserFollower = async (userId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_FOLLOWERS(userId) };

  return await apiCall(requestProps);
};
