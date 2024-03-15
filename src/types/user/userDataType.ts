export type UserPatchDataType = {
  description: string;
  nickname: string;
  image: string;
};

export type FollowDataType = {
  list: FollowerType[] | FolloweeType[];
  nextCursor: number;
};

export type FollowerType = {
  follower: FollowUserType;
  id: number;
};

export type FolloweeType = {
  followee: FollowUserType;
  id: number;
};

type FollowUserType = {
  updatedAt: string;
  createdAt: string;
  teamId: string;
  image: string;
  description: string;
  nickname: string;
  id: number;
};
