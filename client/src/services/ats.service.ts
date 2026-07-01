import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const analyzeResume = async (
  resume: File,
  jobDescription: string
) => {
  const formData = new FormData();

  formData.append("resume", resume);
  formData.append("jobDescription", jobDescription);

  const response = await axios.post(
    `${API}/api/ats/analyze`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};