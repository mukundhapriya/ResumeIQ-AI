import axios from "axios";
import type { ATSApiResponse } from "../types/ats";

const API = import.meta.env.VITE_API_URL;

export const analyzeResume = async (
  resume: File,
  jobDescription: string
): Promise<ATSApiResponse> => {
  const formData = new FormData();

  formData.append("resume", resume);
  formData.append("jobDescription", jobDescription);

  const response = await axios.post<ATSApiResponse>(
    `${API}/ats/analyze`,   // ✅ remove extra /api
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};