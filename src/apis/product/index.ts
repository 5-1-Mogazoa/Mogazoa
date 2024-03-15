import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE, REVIEWS_LIMIT, PRODUCT_LIMIT } from "@/src/routes";

// 상품 상세 조회
export const getProductDetail = (productId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.PRODUCT_DETAIL(productId) };

  return apiCall(requestProps);
};

//상품 전체 조회하는 함수

export interface getProductsProps {
  keyword?: string;
  order?: "recent" | "rating" | "reviewCount" | string;
  category?: number;
  cursor?: number;
  limit?: number;
  pageParam?: number;
}

export const getProducts = ({
  keyword,
  category,
  order = "recent",
  cursor,
  limit = PRODUCT_LIMIT,
  pageParam,
}: getProductsProps) => {
  const queryParams = `?${keyword ? `&keyword=${keyword}` : ""}${category ? `&category=${keyword}` : ""}${order ? `order=${order}` : ""}${cursor ? `cursor=${cursor}` : ""}`;
  const requestProps = {
    method: "get",
    endPoint: `${API_ROUTE.PRODUCTS}${queryParams}`,
  };

  return apiCall(requestProps);
};

// 상품 리뷰 목록 조회
export const getProductReviews = (productId: number, order: string, cursor: any, limit = REVIEWS_LIMIT) => {
  // cursor 매개변수 추가
  const requestProps = {
    method: "get",
    endPoint: `${API_ROUTE.PRODUCT_REVIEWS(productId)}?order=${order}&cursor=${cursor}&limit=${limit}`,
  };

  return apiCall(requestProps);
};

// 상품 찜하기 등록
export const postFavorite = (productId: number) => {
  const requestProps = {
    method: "post",
    endPoint: `${API_ROUTE.PRODUCT_FAVORITE(productId)}`,
  };

  return apiCall(requestProps);
};

// 상품 찜하기 취소
export const deleteFavorite = (productId: number) => {
  const requestProps = {
    method: "delete",
    endPoint: `${API_ROUTE.PRODUCT_FAVORITE(productId)}`,
  };

  return apiCall(requestProps);
};

// 상품 수정
export const patchProduct = (productId: number, data) => {
  const requestProps = { method: "patch", endPoint: API_ROUTE.PRODUCT_DETAIL(productId), data };

  return apiCall(requestProps);
};
