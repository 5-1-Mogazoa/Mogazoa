import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";

// 상품 상세 조회
export const getProductDetail = async (productId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.PRODUCT_DETAIL(productId) };

  return await apiCall(requestProps);
};
