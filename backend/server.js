import dotenv from "dotenv";
dotenv.config();

console.log(
  "SERVER KEY:",
  process.env.GROQ_API_KEY?.substring(0,12)
);

import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server Running on ${
      process.env.PORT || 5000
    }`
  );
});