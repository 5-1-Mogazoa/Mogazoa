type SignUpResponseType = {
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

export default SignUpResponseType;
