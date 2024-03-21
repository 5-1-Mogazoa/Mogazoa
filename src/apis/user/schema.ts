interface Follower {
  updatedAt: string;
  createdAt: string;
  teamId: string;
  image: string;
  nickname: string;
  id: number;
}

interface FollowerList {
  follower: Follower;
  id: number;
}

export interface getUserFollowersResponseType {
  nextCursor: number | null;
  list: FollowerList[] | [];
}

interface Reviewed {
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
}

export interface getUserReviewedResponseType {
  nextCursor: number | null;
  list: Reviewed[] | [];
}

export interface GetUserRankResponseType {
  updatedAt: string;
  createdAt: string;
  teamId: string;
  image: string;
  description: string;
  nickname: string;
  id: number;
  reviewCount: number;
  followersCount: number;
}

export interface GetMyDataResponseType {
  updatedAt: string;
  createdAt: string;
  teamId: string;
  image: string;
  description: string;
  nickname: string;
  id: number;
  mostFavoriteCategory: {
    name: string;
    id: number;
  };
  averageRating: number;
  reviewCount: number;
  followeesCount: number;
  followersCount: number;
  isFollowing: boolean;
}

export interface PatchMyDataType {
  description: string;
  nickname: string;
  image: string;
}

export interface PatchMyDataResponseType {
  updatedAt: string;
  createdAt: string;
  teamId: string;
  image: string;
  description: string;
  nickname: string;
  id: number;
}
