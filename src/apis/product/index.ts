import { apiCall, apiCallProps } from "@/src/lib/axiosInstance";
import { API_ROUTE, PRODUCT_LIMIT } from "@/src/routes";
import {
  PatchProductDataType,
  PostFavoriteResponseType,
  ProductDetailResponseType,
  getReviewsListResponseType,
} from "./schema";

// 상품 상세 조회
export const getProductDetail = (productId: number): Promise<ProductDetailResponseType> => {
  const requestProps: apiCallProps = { method: "get", endPoint: API_ROUTE.PRODUCT_DETAIL(productId) };

  return apiCall<ProductDetail>(requestProps) as unknown as Promise<ProductDetailResponseType>;
};

//상품 전체 조회하는 함수
type Product = {
  updatedAt: string;
  createdAt: string;
  writerId: number;
  categoryId: number;
  favoriteCount: number;
  reviewCount: number;
  rating: number;
  image: string;
  name: string;
  id: number;
};

type ProductListResponse = {
  nextCursor: number;
  list: Product[];
};
type ProductDetail = {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  favoriteCount: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  isFavorite: boolean;
  category: Category[];
  categoryMetric: CategoryMetric[];
};

type Category = {
  id: number;
  name: string;
};

type CategoryMetric = {
  rating: number;
  favoriteCount: number;
  reviewCount: number;
};

export interface getProductsProps {
  keyword?: string | null;
  order?: "recent" | "rating" | "reviewCount" | string;
  category?: number | null;
  cursor?: number | null;
  limit?: number;
  pageParam?: number;
}

export const getProducts = ({
  keyword,
  category,
  order,
  cursor,
  limit = PRODUCT_LIMIT,
  pageParam,
}: getProductsProps) => {
  const queryParams = `?${keyword ? `&keyword=${keyword}` : ""}${category ? `&category=${category}` : ""}${order ? `&order=${order}` : ""}${cursor ? `&cursor=${cursor}` : ""}`;
  const requestProps: apiCallProps = {
    method: "get",
    endPoint: `${API_ROUTE.PRODUCTS}${queryParams}`,
  };

  return apiCall<ProductListResponse>(requestProps);
};

// 상품 리뷰 목록 조회
const Order = {
  RECENT: "recent",
  RATINGDESC: "ratingDesc",
  RATINGASC: "ratingAsc",
  LIKECOUNT: "likeCount",
  REVIEWCOUNT: "reviewCount",
  RATINGS: "rating",
} as const;

interface getProductReviewsProps {
  productId: number;
  order?: (typeof Order)[keyof typeof Order];
  pageParam?: number;
}

export const getProductReviews = ({
  productId,
  order = "recent",
  pageParam,
}: getProductReviewsProps): Promise<getReviewsListResponseType> => {
  const queryParams = `?${order ? `order=${order}` : ""}${pageParam ? `&cursor=${pageParam}` : ""}`;
  const requestProps: apiCallProps = {
    method: "get",
    endPoint: `${API_ROUTE.PRODUCT_REVIEWS(productId)}${queryParams}`,
  };

  return apiCall(requestProps);
};

// 상품 찜하기 등록
export const postFavorite = (productId: number): Promise<PostFavoriteResponseType> => {
  const requestProps: apiCallProps = {
    method: "post",
    endPoint: `${API_ROUTE.PRODUCT_FAVORITE(productId)}`,
  };

  return apiCall(requestProps);
};

// 상품 찜하기 취소
export const deleteFavorite = (productId: number): Promise<PostFavoriteResponseType> => {
  const requestProps: apiCallProps = {
    method: "delete",
    endPoint: `${API_ROUTE.PRODUCT_FAVORITE(productId)}`,
  };

  return apiCall(requestProps);
};

// 상품 수정
export const patchProduct = (productId: number, data: PatchProductDataType): Promise<PostFavoriteResponseType> => {
  const requestProps: apiCallProps = { method: "patch", endPoint: API_ROUTE.PRODUCT_DETAIL(productId), data };

  return apiCall(requestProps);
};

// 상품 추가
export const postProduct = (data: PatchProductDataType): Promise<PostFavoriteResponseType> => {
  const requestProps: apiCallProps = { method: "post", endPoint: API_ROUTE.PRODUCTS, data };

  return apiCall(requestProps);
};
