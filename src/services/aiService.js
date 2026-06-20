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