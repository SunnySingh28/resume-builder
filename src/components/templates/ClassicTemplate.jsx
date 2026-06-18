import React from "react";

function ClassicTemplate({ resumeData }) {
  return (
    <div
      className="bg-white p-8 max-w-[1000px] mx-auto"
      id="resume-preview-id"
    >
      <h1 className="text-4xl font-bold">
        {resumeData.personal.name || "Your Name"}
      </h1>

      <p className="text-lg text-gray-600">
        {resumeData.personal.title}
      </p>

      <hr className="my-4" />

      {resumeData.summary && (
        <>
          <h2 className="font-bold text-xl mb-2">
            Professional Summary
          </h2>

          <p>{resumeData.summary}</p>
        </>
      )}
    </div>
  );
}

export default ClassicTemplate;