import api from "./api";

export interface Resume {
  id: string;
  title: string;
  content: unknown;
  createdAt: string;
}

interface GetResumesResponse {
  success: boolean;
  count: number;
  resumes: Resume[];
}

export const getAllResumes = async (): Promise<Resume[]> => {
  const token = localStorage.getItem("token");

  const response = await api.get<GetResumesResponse>("/resumes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.resumes;
};

export const getResumeById = async (id: string) => {
  const token = localStorage.getItem("token");

  const response = await api.get(`/resumes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createResume = async (
  title: string,
  content: object
) => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/resumes",
    {
      title,
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteResume = async (id: string) => {
  const token = localStorage.getItem("token");

  const response = await api.delete(`/resumes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
export const updateResume = async (
  id: string,
  title: string,
  content: object
) => {
  const token = localStorage.getItem("token");

  const response = await api.put(
    `/resumes/${id}`,
    {
      title,
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};