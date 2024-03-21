import { apiCall, apiCallProps } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import {
  DeleteReviewResponseType,
  PatchReveiwRequestType,
  PostReviewRequestType,
  PostReviewResponseType,
} from "./schema";

// 리뷰 등록
export const postReview = (data: PostReviewRequestType): Promise<PostReviewResponseType> => {
  const requestProps: apiCallProps = { method: "post", endPoint: API_ROUTE.REVIEWS_CREATE, data };

  return apiCall(requestProps);
};

// 리뷰 좋아요 등록
export const postReviewLike = (reviewId: number): Promise<PostReviewResponseType> => {
  const requestProps: apiCallProps = { method: "post", endPoint: API_ROUTE.REVIEWS_LIKE(reviewId) };

  return apiCall(requestProps);
};

// 리뷰 좋아요 취소
export const deleteReviewLike = (reviewId: number): Promise<PostReviewResponseType> => {
  const requestProps: apiCallProps = { method: "delete", endPoint: API_ROUTE.REVIEWS_LIKE(reviewId) };

  return apiCall(requestProps);
};

// 리뷰 삭제
export const deleteReview = (reviewId: number): Promise<DeleteReviewResponseType> => {
  const requestProps: apiCallProps = { method: "delete", endPoint: API_ROUTE.REVIEWS_EDIT_DELETE(reviewId) };

  return apiCall(requestProps);
};

// 리뷰 수정
export const patchReview = (reviewId: number, data: PatchReveiwRequestType): Promise<PostReviewResponseType> => {
  const requestProps: apiCallProps = { method: "patch", endPoint: API_ROUTE.REVIEWS_EDIT_DELETE(reviewId), data };

  return apiCall(requestProps);
};
