import React from 'react';

function ATSPanel({ resumeData }) {
  let score = 20;
  let impact = 20;
  let brevity = 20;
  let style = 20;
  let softSkills = 20;

  // Add points based on completed fields
  if (resumeData.personal.name) score += 5;
  if (resumeData.personal.email) score += 5;
  if (resumeData.personal.linkedin || resumeData.personal.github || resumeData.personal.portfolio) {
    score += 5;
    style += 10;
  }
  if (resumeData.summary) {
    score += 10;
    brevity += 10;
    impact += 10;
  }
  if (resumeData.experience.length > 0) {
    score += 15;
    impact += 15;
    brevity += 10;
  }
  if (resumeData.education.length > 0) score += 10;
  if (resumeData.achievements) {
    score += 10;
    impact += 20;
  }
  if (resumeData.skills.industry) {
     score += 10;
     style += 20;
  }
  if (resumeData.skills.tools) {
     score += 10;
     softSkills += 40;
  }

  // bound scores to 100
  score = Math.min(100, score);
  impact = Math.min(100, impact);
  brevity = Math.min(100, brevity);
  style = Math.min(100, style);
  softSkills = Math.min(100, softSkills);

  const dasharrayValue = `${score * 2.51} 251`; 

  return (
    <div className="bg-[#FAFAFA] pb-10 pt-8 h-full">
      <div className="px-8">
        <h2 className="text-[22px] font-bold mb-1 text-black tracking-tight">Overview</h2>
        <p className="text-gray-500 text-[13px] mb-8">Welcome to your LinkedIn profile review, {resumeData.personal.name || "User"}!</p>

        <div className="flex flex-col items-center mb-8">
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="12" />
              {score > 0 && <circle cx="50" cy="50" r="40" fill="none" stroke="#65BA46" strokeWidth="12" strokeDasharray={dasharrayValue} />}
            </svg>
            <div className="absolute text-4xl font-extrabold text-black tracking-tight">{score}%</div>
          </div>
          <p className="text-[13px] font-semibold text-gray-800 mt-6">Your resume scored {score} out of 100</p>
        </div>

        {/* 4 grid boxes */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white border text-center border-gray-100/80 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <p className="text-gray-500 text-[13px] mb-2 text-left font-medium">Impact</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-800">{impact}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${impact >= 80 ? 'text-green-700 bg-[#E3F5CB]' : impact >= 50 ? 'text-orange-600 bg-orange-100' : 'text-red-600 bg-red-100'}`}>
                {impact >= 80 ? 'EXCELLENT' : impact >= 50 ? 'AVERAGE' : 'POOR'}
              </span>
            </div>
          </div>
          <div className="bg-white border text-center border-gray-100/80 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <p className="text-gray-500 text-[13px] mb-2 text-left font-medium">Brevity</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-800">{brevity}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${brevity >= 80 ? 'text-green-700 bg-[#E3F5CB]' : brevity >= 50 ? 'text-orange-600 bg-orange-100' : 'text-red-600 bg-red-100'}`}>
                 {brevity >= 80 ? 'EXCELLENT' : brevity >= 50 ? 'AVERAGE' : 'POOR'}
              </span>
            </div>
          </div>
          <div className="bg-white border text-center border-gray-100/80 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <p className="text-gray-500 text-[13px] mb-2 text-left font-medium">Style</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-800">{style}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${style >= 80 ? 'text-green-700 bg-[#E3F5CB]' : style >= 50 ? 'text-orange-600 bg-orange-100' : 'text-red-600 bg-red-100'}`}>
                {style >= 80 ? 'GOOD' : style >= 50 ? 'AVERAGE' : 'POOR'}
              </span>
            </div>
          </div>
          <div className="bg-white border text-center border-gray-100/80 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <p className="text-gray-500 text-[13px] mb-2 text-left font-medium">Soft Skills</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-800">{softSkills}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${softSkills >= 80 ? 'text-green-700 bg-[#E3F5CB]' : softSkills >= 50 ? 'text-orange-600 bg-orange-100' : 'text-red-600 bg-red-100'}`}>
                 {softSkills >= 80 ? 'EXCELLENT' : softSkills >= 50 ? 'AVERAGE' : 'POOR'}
              </span>
            </div>
          </div>
        </div>

        {/* Vertical list */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between bg-white border border-gray-100/80 rounded-xl p-3 shadow-sm text-sm">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 font-bold w-5 text-center">H</span>
              <span className="font-medium text-gray-800 text-[13px]">Headline & Social</span>
            </div>
            <span className={`font-semibold text-[13px] ${resumeData.personal.title ? 'text-[#65BA46]' : 'text-[#E5884B]'}`}>
              {resumeData.personal.title ? '10/10' : '0/10'}
            </span>
          </div>
          <div className="flex items-center justify-between bg-white border border-gray-100/80 rounded-xl p-3 shadow-sm text-sm">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg w-5 text-center leading-none">📇</span>
              <span className="font-medium text-gray-800 text-[13px]">Summary</span>
            </div>
            <span className={`font-semibold text-[13px] ${resumeData.summary ? 'text-[#65BA46]' : 'text-[#E5884B]'}`}>
              {resumeData.summary ? '10/10' : '0/10'}
            </span>
          </div>
          <div className="flex items-center justify-between bg-white border border-gray-100/80 rounded-xl p-3 shadow-sm text-sm">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg w-5 text-center leading-none">💼</span>
              <span className="font-medium text-gray-800 text-[13px]">Experience</span>
            </div>
            <span className={`font-semibold text-[13px] ${resumeData.experience.length > 0 ? 'text-[#65BA46]' : 'text-[#E5884B]'}`}>
              {resumeData.experience.length > 0 ? '10/10' : '0/10'}
            </span>
          </div>
          <div className="flex items-center justify-between bg-white border border-gray-100/80 rounded-xl p-3 shadow-sm text-sm">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg w-5 text-center leading-none">🎓</span>
              <span className="font-medium text-gray-800 text-[13px]">Education</span>
            </div>
            <span className={`font-semibold text-[13px] ${resumeData.education.length > 0 ? 'text-[#65BA46]' : 'text-[#E5884B]'}`}>
              {resumeData.education.length > 0 ? '10/10' : '0/10'}
            </span>
          </div>
           <div className="flex items-center justify-between bg-white border border-gray-100/80 rounded-xl p-3 shadow-sm text-sm">
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
