import api from "./api";

export interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface SignupResponse {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", {
    email,
    password,
  });

  return response.data;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
): Promise<SignupResponse> => {
  const response = await api.post<SignupResponse>("/auth/signup", {
    name,
    email,
    password,
  });

  return response.data;
};