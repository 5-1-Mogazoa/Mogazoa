export interface DefaultReviweRequestType {
  image: string[] | { id: number }[] | { source: string }[];
  content: string;
  rating: number;
}

export interface PostReviewRequestType {
  productId: number;
  images: string[];
  content: string;
  rating: number;
}

export interface PostReviewResponseType {
  user: {
    image: string;
    nickname: string;
    id: number;
  };
  reviewImages: {
    source: string;
    id: number;
  }[];
  productId: number;
  userId: number;
  updatedAt: string;
  createdAt: string;
  isLiked: boolean;
  likeCount: number;
  content: string;
  rating: number;
  id: number;
}

interface ImageWithId {
  id: number;
}

interface ImageWithSource {
  source: string;
}

export type ImageData = ImageWithId | ImageWithSource;

export interface PatchReveiwRequestType {
  images: ImageData[];
  content: string;
  rating: number;
}

export interface DeleteReviewResponseType {
  productId: number;
  userId: number;
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  rating: number;
  content: string;
  id: number;
}
