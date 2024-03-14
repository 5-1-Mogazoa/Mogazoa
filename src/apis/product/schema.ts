export interface ProductDetailResponseType {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  categoryId: number;
  categoryMetric: CategoryMetricType;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  description: string;
  category: ProductDetailCategoryType;
  isFavorite: boolean;
  favoriteCount: number;
}

export interface ProductDetailCategoryType {
  id: number;
  name: CategoryType;
}

export type CategoryType =
  | "음악"
  | "영화/드라마"
  | "강의/책"
  | "호텔"
  | "가구/인테리어"
  | "식당"
  | "전자기기"
  | "화장품"
  | "의류/악세서리"
  | "앱";

export interface CategoryMetricType {
  favoriteCount: number;
  rating: number;
  reviewCount: number;
}

export interface ReviewUserType {
  id: number;
  nickname: string;
  image: string | null;
}

export interface ReviewImagesType {
  id: number;
  source: string;
}

export interface ReviewListType {
  id: number;
  rating: number;
  content: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  productId: number;
  user: ReviewUserType;
  reviewImages: ReviewImagesType[];
  isLiked: boolean;
}

export interface getReviewsListResponseType {
  nextCursor: number | null;
  list: ReviewListType[];
}
