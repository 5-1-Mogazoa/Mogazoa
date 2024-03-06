import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";

//카테고리 종류를 조회하는 함수
export const getCategoryList = async () => {
  const requestProps = { method: "get", endPoint: API_ROUTE.CATEGORY };

  return await apiCall(requestProps);
};
