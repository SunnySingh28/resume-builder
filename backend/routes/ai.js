import express from "express";
// import OpenAI from "openai";

const router = express.Router();

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// router.post("/generate", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const response =
//       await client.chat.completions.create({
//         model: "gpt-4o-mini",

//         messages: [
//           {
//             role: "system",
//             content: `
// Generate ATS-friendly resume content.

// Return JSON only.

// {
//   "summary":"",
//   "skills":[],
//   "projects":[]
// }
// `
//           },
//           {
//             role: "user",
//             content: prompt
//           }
//         ]
//       });

//     const content =
//       response.choices[0].message.content;

//     res.json(JSON.parse(content));

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       success: false,
//       error: error.message
//     });

//   }
// });

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    res.json({
      success: true,
      message: `Received: ${prompt}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;