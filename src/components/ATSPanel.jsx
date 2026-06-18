import React from 'react';

function ATSPanel({
 resumeData,
 darkMode
}) {
  let score = 0;
let impact = 20;
let brevity = 20;
let style = 20;
let softSkills = 20;

const suggestions = [];
const strengths = [];
const actionVerbs = [
  "developed",
  "built",
  "implemented",
  "designed",
  "optimized",
  "created",
  "led",
  "improved",
  "managed",
  "engineered"
];

// Personal Information
if (resumeData.personal.name) score += 5;
else suggestions.push("Add your full name");

if (resumeData.personal.email) score += 5;
else suggestions.push("Add email address");

if (resumeData.personal.phone) score += 5;
else suggestions.push("Add phone number");

if (resumeData.personal.linkedin) score += 5;
else suggestions.push("Add LinkedIn profile");

if (resumeData.personal.github) score += 5;

if (resumeData.personal.portfolio) score += 5;
else suggestions.push("Add portfolio website");

// Summary
if (resumeData.summary.trim().length >= 50) {
  score += 15;
  brevity += 20;
}
else {
  suggestions.push("Write a stronger professional summary");
}

// Experience
if (resumeData.experience.length > 0) {
  score += 20;
  impact += 25;

  strengths.push(
    `${resumeData.experience.length} experience entries added`
  );
}

// Education
if (resumeData.education.length > 0) {
  score += 10;
}
else {
  suggestions.push("Add education details");
}

// Skills
const totalSkills =
  Array.isArray(resumeData.skills)
    ? resumeData.skills.length
    : 0;

if (totalSkills >= 3) {
  score += 10;
  style += 20;
}

if (totalSkills >= 6) {
  score += 10;
  softSkills += 20;
}

if (totalSkills >= 10) {
  score += 10;
  impact += 10;
}
else {
  suggestions.push("Add more technical skills");
}

// Achievements
if (resumeData.achievements.trim()) {
  score += 15;
  impact += 25;
}
else {
  suggestions.push("Add achievements or certifications");
}

// Quantified Achievements Detection

const achievementText = `
${resumeData.achievements}
${resumeData.experience
  .map(exp => exp.bullets || "")
  .join(" ")}
`;

const quantifiedMatches =
  achievementText.match(
    /\d+%|\d+\+|\d+\s*(users|projects|clients|customers|downloads|sales|revenue|teams|apps)/gi
  ) || [];

const quantifiedCount = quantifiedMatches.length;
if (totalSkills >= 5) {
  strengths.push(
    `${totalSkills} skills added`
  );
}

if (quantifiedCount >= 1) {
  score += 5;
  impact += 10;
}

if (quantifiedCount >= 3) {
  score += 5;
  impact += 10;
}

if (quantifiedCount >= 5) {
  score += 5;
  impact += 10;
}

if (quantifiedCount > 0) {
  strengths.push(
    `${quantifiedCount} quantified achievement(s) detected`
  );
}
else {
  suggestions.push(
    "Add numbers like 40%, 500+, 10 projects"
  );
}
const resumeText = `
${resumeData.summary}
${resumeData.achievements}
${resumeData.experience
  .map(exp => exp.bullets || "")
  .join(" ")}
`.toLowerCase();

const detectedActionVerbs =
  actionVerbs.filter(word =>
    resumeText.includes(word)
  );

if (detectedActionVerbs.length >= 3) {
  score += 10;
  impact += 10;

  strengths.push(
    `${detectedActionVerbs.length} strong action verbs detected`
  );
}
else {
  suggestions.push(
    "Use action verbs like Developed, Built, Optimized"
  );
}

score = Math.max(
  20,
  Math.min(100, score)
);
impact = Math.min(100, impact);
brevity = Math.min(100, brevity);
style = Math.min(100, style);
softSkills = Math.min(100, softSkills);

  const dasharrayValue = `${score * 2.51} 251`; 

  return (
    <div
 className={`pb-10 pt-8 h-full ${
   darkMode
     ? "bg-[#111827] text-white"
     : "bg-[#FAFAFA]"
 }`}
>
      <div className="px-8">
        <h2
  className={`text-[22px] font-bold mb-1 tracking-tight ${
    darkMode ? "text-white" : "text-black"
  }`}
>Overview</h2>
        <p className="text-gray-500 text-[13px] mb-8">Welcome to your LinkedIn profile review, {resumeData.personal.name || "User"}!</p>

        <div className="flex flex-col items-center mb-8">
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="12" />
              {score > 0 && <circle cx="50" cy="50" r="40" fill="none" stroke="#65BA46" strokeWidth="12" strokeDasharray={dasharrayValue} />}
            </svg>
            <div
  className={`absolute text-4xl font-extrabold tracking-tight ${
    darkMode ? "text-white" : "text-black"
  }`}
>{score}%</div>
          </div>
          <p
  className={`text-[13px] font-semibold mt-6 ${
    darkMode ? "text-gray-200" : "text-gray-800"
  }`}
>Your resume scored {score} out of 100</p>
        </div>

        {/* 4 grid boxes */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div
  className={`border text-center rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100/80"
  }`}
>
            <p className="text-gray-500 text-[13px] mb-2 text-left font-medium">Impact</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-800">{impact}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${impact >= 80 ? 'text-green-700 bg-[#E3F5CB]' : impact >= 50 ? 'text-orange-600 bg-orange-100' : 'text-red-600 bg-red-100'}`}>
                {impact >= 80 ? 'EXCELLENT' : impact >= 50 ? 'AVERAGE' : 'POOR'}
              </span>
            </div>
          </div>
          <div
  className={`border text-center rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100/80"
  }`}
>
            <p className="text-gray-500 text-[13px] mb-2 text-left font-medium">Brevity</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-800">{brevity}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${brevity >= 80 ? 'text-green-700 bg-[#E3F5CB]' : brevity >= 50 ? 'text-orange-600 bg-orange-100' : 'text-red-600 bg-red-100'}`}>
                 {brevity >= 80 ? 'EXCELLENT' : brevity >= 50 ? 'AVERAGE' : 'POOR'}
              </span>
            </div>
          </div>
          <div
  className={`border text-center rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100/80"
  }`}
>
            <p className="text-gray-500 text-[13px] mb-2 text-left font-medium">Style</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-800">{style}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${style >= 80 ? 'text-green-700 bg-[#E3F5CB]' : style >= 50 ? 'text-orange-600 bg-orange-100' : 'text-red-600 bg-red-100'}`}>
                {style >= 80 ? 'GOOD' : style >= 50 ? 'AVERAGE' : 'POOR'}
              </span>
            </div>
          </div>
          <div
  className={`border text-center rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100/80"
  }`}
>
            <p className="text-gray-500 text-[13px] mb-2 text-left font-medium">Soft Skills</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-800">{softSkills}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${softSkills >= 80 ? 'text-green-700 bg-[#E3F5CB]' : softSkills >= 50 ? 'text-orange-600 bg-orange-100' : 'text-red-600 bg-red-100'}`}>
                 {softSkills >= 80 ? 'EXCELLENT' : softSkills >= 50 ? 'AVERAGE' : 'POOR'}
              </span>
            </div>
          </div>
        </div>
         
         <div
  className={`rounded-xl border p-4 mb-4 ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100"
  }`}
>
  <h3 className="font-bold text-sm mb-3 text-green-700">
    Resume Strengths
  </h3>

  <ul className="space-y-2 text-xs text-gray-700">
    {strengths.length > 0 ? (
      strengths.map((item, index) => (
        <li key={index}>
          ✓ {item}
        </li>
      ))
    ) : (
      <li>
  Add measurable impact for stronger ATS score
</li>
    )}
  </ul>
</div>

         <div
  className={`rounded-xl border p-4 mb-5 ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100"
  }`}
>
  <h3 className="font-bold text-sm mb-3 text-gray-800">
    ATS Suggestions
  </h3>

  <ul className="space-y-2 text-xs text-gray-600">
    {suggestions.slice(0, 5).map((item, index) => (
      <li key={index}>
        • {item}
      </li>
    ))}
  </ul>
</div>
        {/* Vertical list */}
        <div className="space-y-2.5">
          <div
  className={`flex items-center justify-between rounded-xl p-3 shadow-sm text-sm border ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100/80"
  }`}
>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 font-bold w-5 text-center">H</span>
              <span className="font-medium text-gray-800 text-[13px]">Headline & Social</span>
            </div>
            <span className={`font-semibold text-[13px] ${resumeData.personal.title ? 'text-[#65BA46]' : 'text-[#E5884B]'}`}>
              {resumeData.personal.title ? '10/10' : '0/10'}
            </span>
          </div>
          <div
  className={`flex items-center justify-between rounded-xl p-3 shadow-sm text-sm border ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100/80"
  }`}
>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg w-5 text-center leading-none">📇</span>
              <span className="font-medium text-gray-800 text-[13px]">Summary</span>
            </div>
            <span className={`font-semibold text-[13px] ${resumeData.summary ? 'text-[#65BA46]' : 'text-[#E5884B]'}`}>
              {resumeData.summary ? '10/10' : '0/10'}
            </span>
          </div>
          <div
  className={`flex items-center justify-between rounded-xl p-3 shadow-sm text-sm border ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100/80"
  }`}
>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg w-5 text-center leading-none">💼</span>
              <span className="font-medium text-gray-800 text-[13px]">Experience</span>
            </div>
            <span className={`font-semibold text-[13px] ${resumeData.experience.length > 0 ? 'text-[#65BA46]' : 'text-[#E5884B]'}`}>
              {resumeData.experience.length > 0 ? '10/10' : '0/10'}
            </span>
          </div>
          <div
  className={`flex items-center justify-between rounded-xl p-3 shadow-sm text-sm border ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100/80"
  }`}
>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg w-5 text-center leading-none">🎓</span>
              <span className="font-medium text-gray-800 text-[13px]">Education</span>
            </div>
            <span className={`font-semibold text-[13px] ${resumeData.education.length > 0 ? 'text-[#65BA46]' : 'text-[#E5884B]'}`}>
              {resumeData.education.length > 0 ? '10/10' : '0/10'}
            </span>
          </div>
           <div
  className={`flex items-center justify-between rounded-xl p-3 shadow-sm text-sm border ${
    darkMode
      ? "bg-[#1F2937] border-gray-700"
      : "bg-white border-gray-100/80"
  }`}
>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg w-5 text-center leading-none">🏆</span>
              <span className="font-medium text-gray-800 text-[13px]">Achievements</span>
            </div>
            <span className={`font-semibold text-[13px] ${resumeData.achievements ? 'text-[#65BA46]' : 'text-[#E5884B]'}`}>
              {resumeData.achievements ? '10/10' : '0/10'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ATSPanel;
