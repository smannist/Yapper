export type LoginResponse = {
  token: string;
  user: {
    name: string;
    username: string;
  };
};

export type SignInMutationVariables = {
  username: string;
  password: string;
};

export type SignInMutationResult = {
  username: string;
  token: string;
};
