import React from "react";

function MinimalTemplate({ resumeData }) {
  return (
    <div
      className="bg-white p-10 max-w-[1000px] mx-auto"
      id="resume-preview-id"
    >
      <div className="text-center">

        <h1 className="text-5xl font-light">
          {resumeData.personal.name}
        </h1>

        <p className="mt-2 text-gray-500">
          {resumeData.personal.title}
        </p>

      </div>

      <div className="mt-10">

        <h2 className="uppercase tracking-widest text-sm text-gray-500">
          Summary
        </h2>

        <p className="mt-2">
          {resumeData.summary}
        </p>

      </div>
    </div>
  );
}

export default MinimalTemplate;