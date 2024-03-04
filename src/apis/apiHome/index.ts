import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";

//상품 전체 조회하는 함수
export const getProductList = async () => {
  const requestProps = { method: "get", endPoint: API_ROUTE.PRODUCTS };

  return await apiCall(requestProps);
};
