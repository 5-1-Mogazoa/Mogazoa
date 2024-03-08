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
