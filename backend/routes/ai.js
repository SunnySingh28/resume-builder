import express from "express";
import Groq from "groq-sdk";
import upload from "../middleware/upload.js";
import mammoth from "mammoth";
import { PdfReader } from "pdfreader";

const router = express.Router();


router.post("/generate", async (req, res) => {
  try {

     const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { prompt } = req.body;

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.5,

        messages: [
          {
            role: "system",
            content: `
You are an expert Resume Writer.

Generate a complete ATS-friendly resume.

Return ONLY valid JSON.

{
  "personal": {
    "name": "",
    "title": ""
  },

  "summary": "",

  "aboutMe": "",

 "skills": [
  "Programming Languages: JavaScript, HTML, CSS",
  "Frameworks: React, Express",
  "Databases: MongoDB",
  "Tools: Git, VS Code"
]

  "experience": [
    {
      "title":"",
      "company":"",
      "location":"",
      "startMonth":"",
      "startYear":"",
      "endMonth":"",
      "endYear":"",
      "current":false,
      "bullets":""
    }
  ],

  "education":[
    {
      "degree":"",
      "school":"",
      "location":"",
      "startYear":"",
      "endYear":"",
      "current":false
    }
  ],

  "projects":[
    {
      "name":"",
      "description":"",
      "technologies":[]
    }
  ],

  "achievements":[],

  "languages":"English"
}
`,
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      });

   const response =
  completion.choices[0].message.content;

console.log(response);

const cleanResponse = response
  .replace(/```json/gi, "")
  .replace(/```/g, "")
  .trim();

const resumeData = JSON.parse(cleanResponse);

res.json({
  success: true,
  data: resumeData,
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.post(
  "/import",
  upload.single("resume"),
  async (req, res) => {
    console.log("===== IMPORT API HIT =====");
    try {

      let resumeText = "";

      // PDF
     if (req.file.mimetype === "application/pdf") {

  resumeText = await new Promise((resolve, reject) => {

    let text = "";

    new PdfReader().parseBuffer(
      req.file.buffer,
      (err, item) => {

        if (err) {
          reject(err);
        }

        else if (!item) {
          resolve(text);
        }

        else if (item.text) {
          text += item.text + " ";
        }

      }
    );

  });

}
      // DOCX
      else if (
        req.file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {

        const result = await mammoth.extractRawText({
          buffer: req.file.buffer,
        });

        resumeText = result.value;
      }

      console.log("========== Resume Text ==========");
      console.log(resumeText);
      console.log("=================================");

      const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const completion =
  await groq.chat.completions.create({

    model: "llama-3.3-70b-versatile",

    temperature: 0,

    max_completion_tokens: 4000,

    messages: [

      {
        role: "system",

        content: `
You are an expert ATS Resume Parser.

Extract EVERY possible piece of information.

DO NOT summarize.

DO NOT shorten.

Preserve every bullet.

Preserve every project.

Preserve every experience.

Preserve every education description.

Preserve every achievement.

Extract every technology.

Extract every skill.

Extract every URL.

If a Github, LinkedIn, Leetcode or Portfolio URL exists,
return the full URL.

If email exists return it exactly.

If phone exists return it exactly.

Return ONLY valid JSON.

{
  "personal":{
    "name":"",
    "title":"",
    "email":"",
    "phone":"",
    "linkedin":"",
    "github":"",
    "portfolio":"",
    "leetcode":"",
    "codeforces":""
  },

  "summary":"",

  "aboutMe":"",

  "skills":[],

  "experience":[
    {
      "title":"",
      "company":"",
      "location":"",
      "startMonth":"",
      "startYear":"",
      "endMonth":"",
      "endYear":"",
      "current":false,
      "technologies":[],
      "bullets":[]
    }
  ],

  "education":[
    {
      "degree":"",
      "school":"",
      "location":"",
      "startYear":"",
      "endYear":"",
      "current":false,
      "description":""
    }
  ],

  "projects":[
    {
      "name":"",
      "description":"",
      "technologies":[],
      "githubLink":""
    }
  ],

  "achievements":[],

  "languages":""
}
`
      },

      {
        role:"user",

        content:`
Extract this resume completely.

Resume:

${resumeText}
`
      }

    ]
});

const aiResponse =
  completion.choices[0].message.content;

console.log("========== RAW AI RESPONSE ==========");
console.log(aiResponse);
console.log("=====================================");

// Remove markdown
let cleanResponse = aiResponse
  .replace(/```json/gi, "")
  .replace(/```/g, "")
  .trim();

// Extract only JSON
const firstBrace = cleanResponse.indexOf("{");
const lastBrace = cleanResponse.lastIndexOf("}");

if (firstBrace !== -1 && lastBrace !== -1) {
  cleanResponse = cleanResponse.substring(
    firstBrace,
    lastBrace + 1
  );
}

console.log("========== CLEAN JSON ==========");
console.log(cleanResponse);
console.log("================================");

const resumeData = JSON.parse(cleanResponse);

console.log("========== AI JSON ==========");
console.log(JSON.stringify(resumeData, null, 2));
console.log("=============================");

console.log("========== AI JSON ==========");
console.log(
  JSON.stringify(resumeData, null, 2)
);
console.log("=============================");

res.json({
  success: true,
  data: resumeData,
});

    } catch (error) {

      console.error(error);

      res.status(500).json({
        success: false,
        error: error.message,
      });

    }
  }
);

export default router;