export type UserType = {
  userName: string;
  password?: string;
};

export type UserLoginType = {
  user: {
    id: string;
    userName: string;
  };
  token: string;
};
