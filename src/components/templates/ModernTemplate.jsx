import React from "react";

function ModernTemplate({ resumeData }) {
  return (
    <div
      className="bg-white max-w-[1000px] mx-auto"
      id="resume-preview-id"
    >
      <div className="bg-green-600 text-white p-8">

        <h1 className="text-4xl font-bold">
          {resumeData.personal.name}
        </h1>

        <p className="mt-2">
          {resumeData.personal.title}
        </p>

      </div>

      <div className="p-8">

        <h2 className="font-bold text-xl mb-2">
          Professional Summary
        </h2>

        <p>
          {resumeData.summary}
        </p>

      </div>
    </div>
  );
}

export default ModernTemplate;