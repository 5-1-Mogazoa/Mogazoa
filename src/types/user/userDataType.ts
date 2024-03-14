export type userPatchDataType = {
  description: string;
  nickname: string;
  image: string;
};

export type followDataType = {
  list: followerType[] | followeeType[];
  nextCursor: number;
};

export type followerType = {
  follower: followUserType;
  id: number;
};

export type followeeType = {
  followee: followUserType;
  id: number;
};

type followUserType = {
  updatedAt: string;
  createdAt: string;
  teamId: string;
  image: string;
  description: string;
  nickname: string;
  id: number;
};
