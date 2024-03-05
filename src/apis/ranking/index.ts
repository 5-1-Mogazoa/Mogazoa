import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";

// 유저 랭킹을 조회하는 함수
export const getUserRank = async () => {
  const requestProps = { method: "get", endPoint: API_ROUTE.USERS_RANK };

  return await apiCall(requestProps);
};
