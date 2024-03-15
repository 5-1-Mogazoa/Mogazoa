import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import { PostReviewRequestType } from "./schema";

// 리뷰 등록
// export const postReview = async (data: PostReviewRequestType) => {
export const postReview = async (data) => {
  const requestProps = { method: "post", endPoint: API_ROUTE.REVIEWS_CREATE, data };

  return await apiCall(requestProps);
};

// 리뷰 좋아요 등록
export const postReviewLike = async (reviewId: number) => {
  const requestProps = { method: "post", endPoint: API_ROUTE.REVIEWS_LIKE(reviewId) };

  return await apiCall(requestProps);
};

// 리뷰 좋아요 취소
export const deleteReviewLike = async (reviewId: number) => {
  const requestProps = { method: "delete", endPoint: API_ROUTE.REVIEWS_LIKE(reviewId) };

  return await apiCall(requestProps);
};
