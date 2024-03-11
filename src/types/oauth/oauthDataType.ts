export type OauthDataType = {
  nickname?: string;
  redirectUri?: string;
  token: string;
};

export type OauthResponseType = {
  accessToken: string;
  user: {
    id: number;
    email: string;
    image: null | string;
    teamId: string;
    nickname: string;
    updatedAt: string;
    createdAt: string;
  };
};
