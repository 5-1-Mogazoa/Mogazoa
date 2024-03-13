import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE, REVIEWS_LIMIT } from "@/src/routes";

// 상품 상세 조회
export const getProductDetail = async (productId: number) => {
  const requestProps = { method: "get", endPoint: API_ROUTE.PRODUCT_DETAIL(productId) };

  return await apiCall(requestProps);
};

//상품 전체 조회하는 함수
export const getProductList = async () => {
  const requestProps = { method: "get", endPoint: API_ROUTE.PRODUCTS };

  return await apiCall(requestProps);
};

// 상품 리뷰 목록 조회
export const getProductReviews = async (productId: number, order: string, cursor: any, limit = REVIEWS_LIMIT) => {
  // cursor 매개변수 추가
  const requestProps = {
    method: "get",
    endPoint: `${API_ROUTE.PRODUCT_REVIEWS(productId)}?order=${order}&cursor=${cursor}&limit=${limit}`,
  };

  return await apiCall(requestProps);
};

// 상품 찜하기 등록
export const postFavorite = async (productId: number) => {
  const requestProps = {
    method: "post",
    endPoint: `${API_ROUTE.PRODUCT_FAVORITE(productId)}`,
  };

  return await apiCall(requestProps);
};

// 상품 찜하기 취소
export const deleteFavorite = async (productId: number) => {
  const requestProps = {
    method: "delete",
    endPoint: `${API_ROUTE.PRODUCT_FAVORITE(productId)}`,
  };

  return await apiCall(requestProps);
};

//

import { useRouter } from "next/router";

export type filterSearchProps = {
  category?: string;
  sort?: string;
  searchQuery?: string;
};
