export interface ProductDetailResponseType {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  description: string;
  category: {
    id: number;
    name: CategoryType;
  };
  isFavorite: boolean;
  favoriteCount: number;
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
