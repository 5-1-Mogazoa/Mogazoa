import { apiCall, apiCallProps } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import { GetCategoryListResponseType } from "./schema";

//카테고리 종류를 조회하는 함수
export const getCategoryList = (): Promise<GetCategoryListResponseType[]> => {
  const requestProps: apiCallProps = { method: "get", endPoint: API_ROUTE.CATEGORY };

  return apiCall(requestProps);
};
