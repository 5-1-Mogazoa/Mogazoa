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
