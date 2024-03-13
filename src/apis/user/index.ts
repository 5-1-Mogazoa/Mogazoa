import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import { userPatchDataType } from "@/src/types/user/userDataType";

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

// 유저가 팔로우한 유저 조회
export const getUserFollowees = async (userId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_FOLLOWEES(userId) };

  return await apiCall(requestProps);
};

// 유저가 리뷰한 상품 조회
export const getUserReviewed = async (userId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_REVIEWED_PRODUCT(userId) };

  return await apiCall(requestProps);
};

// 유저가 생성한 상품 조회
export const getUserCreated = async (userId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_CREATED_PRODUCT(userId) };

  return await apiCall(requestProps);
};

// 유저가 찜한 상품 조회
export const getUserFavorite = async (userId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_FAVORITE_PRODUCT(userId) };

  return await apiCall(requestProps);
};

// 자신의 정보 조회
export const getMyData = async () => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_MYDATA };

  return await apiCall(requestProps);
};

// 자신의 정보 수정
export const patchMyData = async (data: userPatchDataType) => {
  const requestProps = { method: "patch", endPoint: API_ROUTE.USERS_MYDATA, data };

  return await apiCall(requestProps);
};

// 유저 정보 조회
export const getUserData = async (userId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_DATA(userId) };

  return await apiCall(requestProps);
};
