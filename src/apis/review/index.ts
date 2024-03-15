import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import { PostReviewRequestType } from "./schema";

// 리뷰 등록
// export const postReview = async (data: PostReviewRequestType) => {
export const postReview = (data) => {
  const requestProps = { method: "post", endPoint: API_ROUTE.REVIEWS_CREATE, data };

  return apiCall(requestProps);
};

// 리뷰 좋아요 등록
export const postReviewLike = (reviewId: number) => {
  const requestProps = { method: "post", endPoint: API_ROUTE.REVIEWS_LIKE(reviewId) };

  return apiCall(requestProps);
};

// 리뷰 좋아요 취소
export const deleteReviewLike = (reviewId: number) => {
  const requestProps = { method: "delete", endPoint: API_ROUTE.REVIEWS_LIKE(reviewId) };

  return apiCall(requestProps);
};
