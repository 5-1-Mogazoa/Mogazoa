export type AuthDataType = {
  email: string;
  nickname?: string;
  password: string;
  passwordConfirmation?: string;
};

export type AuthResponseType = {
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
