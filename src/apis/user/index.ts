import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";

// 유저 랭킹을 조회하는 함수
export const getUserRank = async () => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_RANK };

  return await apiCall(requestProps);
};

// 유저를 팔로우한 유저 조회
export const getUserFollowers = async (userId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_FOLLOWERS(userId) };

  return await apiCall(requestProps);
};

// 유저가 리뷰한 상품 조회
export const getUserReviewed = async (userId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_REVIEWED_PRODUCT(userId) };

  return await apiCall(requestProps);
};

// 유저가 생성한 상품 조회
export const getUserCreatedProduct = async (userId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_CREATED_PRODUCT(userId) };

  return await apiCall(requestProps);
};
