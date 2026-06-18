import React from 'react';
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import {
FaEnvelope,
FaPhoneAlt,
FaLinkedin,
FaGithub,
FaGlobe
} from 'react-icons/fa';

const ResumePreview = React.forwardRef(
({ resumeData, id, template }, ref) => {
if (template === "classic") {
  return (
    <ClassicTemplate
      resumeData={resumeData}
    />
  );
}

if (template === "professional") {
  return (
    <ProfessionalTemplate
      resumeData={resumeData}
    />
  );
}

if (template === "minimal") {
  return (
    <MinimalTemplate
      resumeData={resumeData}
    />
  );
}
if (template === "modern") {
  return (
    <ModernTemplate
      resumeData={resumeData}
    />
  );
}
return ( <div
  id="resume-preview-id"
  ref={ref}
  className="resume-page w-full"
  style={{
    background: "#ffffff",
    color: "#111827",
    width: "794px",
    minHeight: "1123px",
    maxWidth: "794px",
    margin: "0 auto",
    overflow: "hidden",
    boxSizing: "border-box",
  }}
>

  {/* Header */}

  <div className="bg-[#65BA46] text-white p-8">

    <div className="flex gap-6 items-center">

      {resumeData.personal.photo && (
        <img
          src={resumeData.personal.photo}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-white"
        />
      )}

      <div>

        <h1 className="text-4xl font-bold uppercase">
          {resumeData.personal.name || "Your Name"}
        </h1>

        <p className="text-xl mt-1">
          {resumeData.personal.title}
        </p>

        <div className="flex flex-wrap gap-4 mt-3 text-sm">

          {resumeData.personal.email && (
            <span className="flex items-center gap-2">
              <FaEnvelope />
              {resumeData.personal.email}
            </span>
          )}

          {resumeData.personal.phone && (
            <span className="flex items-center gap-2">
              <FaPhoneAlt />
              {resumeData.personal.phone}
            </span>
          )}

          {resumeData.personal.linkedin && (
            <span className="flex items-center gap-2">
              <FaLinkedin />
              LinkedIn
            </span>
          )}

          {resumeData.personal.github && (
            <span className="flex items-center gap-2">
              <FaGithub />
              GitHub
            </span>
          )}

          {resumeData.personal.portfolio && (
            <span className="flex items-center gap-2">
              <FaGlobe />
              Portfolio
            </span>
          )}

        </div>

      </div>

    </div>

  </div>

  {/* Main Layout */}

  <div
  className="grid grid-cols-12"
  style={{
    minHeight: "950px",
  }}
>

    {/* Left Sidebar */}

    <div className="col-span-4 bg-gray-50 p-6 border-r">

      {resumeData.skills.length > 0 && (
  <div className="mb-8">

    <h3 className="font-bold text-lg mb-3 border-b pb-2">
      Skills
    </h3>

    <div className="flex flex-wrap gap-2">

      {resumeData.skills.map((skill) => (
        <span
          key={skill.id}
          className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm bg-white"
        >
          {skill.name}
        </span>
      ))}

    </div>

  </div>
)}

      {resumeData.education.length > 0 && (
        <div className="mb-8">

          <h3 className="font-bold text-lg mb-3 border-b pb-2">
            Education
          </h3>

          {resumeData.education.map((edu) => (
            <div key={edu.id} className="mb-4">

              <h4 className="font-semibold">
                {edu.degree}
              </h4>

              <p className="text-sm text-gray-600">
                {edu.school}
              </p>

              <p className="text-sm text-gray-500">
               {edu.startYear}
               {" - "}
               {edu.current
                  ? "Present"
                  : edu.endYear}
              </p>

            </div>
          ))}

        </div>
      )}

      {resumeData.achievements && (
        <div>

          <h3 className="font-bold text-lg mb-3 border-b pb-2">
            Achievements
          </h3>

          <ul className="list-disc pl-5 text-sm space-y-2">

            {resumeData.achievements
              .split('\n')
              .filter(a => a.trim())
              .map((achievement, index) => (
                <li key={index}>
                  {achievement}
                </li>
              ))}

          </ul>

        </div>
      )}

    </div>

    {/* Right Content */}

    <div className="col-span-8 p-6">

      {resumeData.summary && (
        <div className="mb-8">

          <h3 className="font-bold text-lg mb-3 border-b pb-2">
            Professional Summary
          </h3>

          <p className="text-gray-700">
            {resumeData.summary}
          </p>

        </div>
      )}

      {resumeData.experience.length > 0 && (
        <div>

          <h3 className="font-bold text-lg mb-3 border-b pb-2">
            Experience
          </h3>

          {resumeData.experience.map((exp) => (
            <div key={exp.id} className="mb-6">

              <div className="flex justify-between">

                <div>

                  <h4 className="font-bold">
                    {exp.title}
                  </h4>

                  <p className="italic text-gray-600">
                    {exp.company}
                  </p>

                </div>

               <span className="text-sm text-gray-500">
                 {exp.startMonth} {exp.startYear}
                    {" - "}
                     {exp.current
                    ? "Present"
                : `${exp.endMonth} ${exp.endYear}`}
                </span>

              </div>

              <p className="text-sm text-gray-500 mb-2">
                {exp.location}
              </p>

              <ul className="list-disc pl-5 text-sm space-y-1">

                {exp.bullets
                  .split('\n')
                  .filter(b => b.trim())
                  .map((bullet, index) => (
                    <li key={index}>
                      {bullet}
                    </li>
                  ))}

              </ul>

            </div>
          ))}

        </div>
      )}

    </div>

  </div>

</div>

);
});

export default ResumePreview;
