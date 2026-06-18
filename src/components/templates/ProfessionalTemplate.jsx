import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function ProfessionalTemplate({
  resumeData,
}) {
  return (
    <div
  id="resume-preview-id"
  className="w-[794px] mx-auto bg-white min-h-[1123px] overflow-hidden"
>
      <div className="grid grid-cols-12 h-[1123px]">

        {/* LEFT SIDEBAR */}
<div className="col-span-4 bg-[#D4C0B4] px-6 py-8">
        

          {/* PHOTO */}

          <div className="flex justify-center mb-6">

            {resumeData.personal.photo ? (
              <img
                src={resumeData.personal.photo}
                alt="profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-white"
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-gray-300" />
            )}

          </div>

          {/* ABOUT ME */}

          {resumeData.aboutMe && (
            <div className="mb-4">
              <h3 className="font-bold text-[22px] border-b border-gray-400 pb-2 mb-3">
                About Me
              </h3>

              <p className="text-sm text-gray-700">
                {resumeData.aboutMe}
              </p>
            </div>
          )}

          {/* CONTACT */}

          <div className="mb-4">

            <h3 className="font-bold text-[22px] border-b border-gray-400 pb-2 mb-3">
              Contact
            </h3>

            <div className="space-y-2 text-sm">

              {resumeData.personal.email && (
                <p className="flex gap-2 items-center">
                  <FaEnvelope />
                  {resumeData.personal.email}
                </p>
              )}

              {resumeData.personal.phone && (
                <p className="flex gap-2 items-center">
                  <FaPhoneAlt />
                  {resumeData.personal.phone}
                </p>
              )}

              {resumeData.personal.linkedin && (
                <p className="flex gap-2 items-center">
                  <FaLinkedin />
                  LinkedIn
                </p>
              )}

              {resumeData.personal.github && (
                <p className="flex gap-2 items-center">
                  <FaGithub />
                  GitHub
                </p>
              )}

            </div>

          </div>

          {/* SUMMARY */}

          {resumeData.summary && (
            <div className="mb-4">

              <h3 className="font-bold text-[22px] border-b border-gray-400 pb-2 mb-3">
                Summary
              </h3>

              <p className="text-sm">
                {resumeData.summary}
              </p>

            </div>
          )}

          {/* EDUCATION */}

          {resumeData.education.length > 0 && (
            <div className="mb-3">

              <h3 className="font-bold text-[22px] border-b border-gray-400 pb-2 mb-3">
                Education
              </h3>

              {resumeData.education.map((edu) => (
                <div key={edu.id} className="mb-3">

                  <h4 className="font-semibold">
                    {edu.degree}
                  </h4>

                 <p className="text-sm">
  {edu.school}
</p>

<p className="text-xs text-gray-600">
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

          {/* SKILLS */}

{resumeData.skills.length > 0 && (
  <div className="mb-4">

    <h3 className="font-bold text-[22px] border-b border-gray-400 pb-2 mb-3">
      Skills
    </h3>

    <div className="flex flex-wrap gap-2">

      {resumeData.skills.map((skill) => (
        <span
          key={skill.id}
          className="border border-gray-300 bg-white text-gray-700 px-2 py-1 rounded-md text-xs"
        >
          {skill.name}
        </span>
      ))}

    </div>

  </div>
)}

          {/* LANGUAGES */}

          {resumeData.languages && (
            <div>

              <h3 className="font-bold text-[22px] border-b border-gray-400 pb-2 mb-3">
                Languages
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
  {resumeData.languages}
</p>

            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        
       <div className="col-span-8 p-8 overflow-hidden">

          <h1 className="text-[48px] leading-[0.85] font-light uppercase">
  {resumeData.personal.name
    .split(" ")
    .map((word, index) => (
      <div key={index}>{word}</div>
    ))}
</h1>

          <p className="text-[28px] font-semibold text-black mt-0 mb-3">
            {resumeData.personal.title}
          </p>

          {/* EXPERIENCE */}

          {resumeData.experience.length > 0 && (
            <div className="mb-1">

              <div className="flex items-center gap-6 mb-0">

  <h2 className="text-[40px] font-light">
    Experience
  </h2>

  <div className="flex-1 h-[2px] bg-gray-400" />

</div>

              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="mb-2">

                 <div className="flex justify-between">

  <div>

    <h3 className="text-[28px] font-semibold">
      {exp.title}
    </h3>

    <p className="text-[18px] font-italic">
      {exp.company}
    </p>

    <p className="text-sm text-black-500">
      {exp.location}
    </p>

  </div>
          
  <span className="text- font-medium text-gray-700">

    {exp.startMonth}
    {" "}
    {exp.startYear}

    {" - "}

    {exp.current
      ? "Present"
      : `${exp.endMonth} ${exp.endYear}`}

  </span>

</div>

         <ul className="list-disc pl- mt-">
         {exp.bullets
             .split("\n")
           .filter((b) => b.trim())
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


          {/* PROJECTS */}

          {(resumeData.projects || []).length > 0 && (
            <div className="mb-3">

              <div className="flex items-center gap-6 mb-2">

  <h2 className="text-[40px] font-light">
    Projects
  </h2>

  <div className="flex-1 h-[2px] bg-gray-400" />

</div>

              {resumeData.projects.map(
                (project) => (
                  <div
                    key={project.id}
                    className="mb-3"
                  >
                    <h3 className="text-[24px] font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500 italic mb-1">
                      {project.techStack}
                    </p>

                    <p>
                      {project.description}
                    </p>
                  </div>
                )
              )}

            </div>
          )}

          {/* ACHIEVEMENTS */}

          {resumeData.achievements && (
            <div>

              <div className="flex items-center gap-6 mb-5">

  <h2 className="text-[40px] font-light">
    Achievements
  </h2>

  <div className="flex-1 h-[2px] bg-gray-400" />

</div>

              <ul className="list-disc pl-4 mt-1">

                {resumeData.achievements
                  .split("\n")
                  .filter((a) => a.trim())
                  .map((a, index) => (
                    <li key={index}>
                      {a}
                    </li>
                  ))}

              </ul>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default ProfessionalTemplate;