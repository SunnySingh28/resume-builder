import axios from "axios";

export const generateResume = async (prompt) => {
  const response = await axios.post(
    "http://localhost:5000/api/ai/generate",
    {
      prompt,
    }
  );

  return response.data;
};

export const importResume = async (file) => {
  const formData = new FormData();

  formData.append("resume", file);

  const response = await axios.post(
    "http://localhost:5000/api/ai/import",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};