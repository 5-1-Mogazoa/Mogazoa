export type AuthDataType = {
  email: String;
  nickname?: string;
  password: string;
  passwordConfirmation?: string;
};

export type AuthResponseType = {
  accessToken: string;
  user: {
    id: number;
    email: string;
    image: null;
    teamId: string;
    nickname: string;
    updatedAt: string;
    createdAt: string;
  };
};
