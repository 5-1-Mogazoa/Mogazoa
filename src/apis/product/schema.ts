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
    name: string;
  };
  isFavorite: boolean;
  favoriteCount: number;
}
