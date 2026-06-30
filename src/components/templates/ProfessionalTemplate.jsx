import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe
} from "react-icons/fa";

import {
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";

function ProfessionalTemplate({
  resumeData,
}) {
  const externalUrl = (url) =>
    /^https?:\/\//i.test(url)
      ? url
      : `https://${url}`;

  return (
    <div
  id="resume-preview-id"
 className="w-[794px] h-[1123px] mx-auto bg-white overflow-hidden"
>
      <div className="grid grid-cols-12 h-[1123px]">

        {/* LEFT SIDEBAR */}
<div className="col-span-4 bg-[#D4C0B4] px-3 py-6">
        

          {/* PHOTO */}

          <div className="flex justify-center mb-4">

            {resumeData.personal.photo ? (
              <img
                src={resumeData.personal.photo}
                alt="profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-white"
              />
            ) : (
              <div className="w-36 h-36 rounded-full bg-gray-300" />
            )}

          </div>

          {/* ABOUT ME */}

          {resumeData.aboutMe && (
            <div className="mb-3">
         <h3 className="font-bold text-[22px] mb-2">
                About Me
              </h3>

              <p className="text-sm text-gray-900">
                {resumeData.aboutMe}
              </p>
            </div>
          )}

          {/* CONTACT */}

          <div className="mb-2">

            <h3 className="font-bold text-[22px] mb-2">
              Contact
            </h3>

            <div className="space-y-2 text-sm">

              <a
  href={`mailto:${resumeData.personal.email}`}
  className="flex gap-3 items-center hover:text-blue-700"
>
  <FaEnvelope />
  {resumeData.personal.email}
</a>

             <a
  href={`tel:${resumeData.personal.phone}`}
  className="flex gap-3 items-center hover:text-blue-700"
>
  <FaPhoneAlt />
  {resumeData.personal.phone}
</a>

            {resumeData.personal.linkedin && (
  <a
    href={externalUrl(resumeData.personal.linkedin)}
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-3 items-center hover:text-blue-700"
  >
    <FaLinkedin />
    LinkedIn
  </a>
)}

              {resumeData.personal.github && (
  <a
    href={externalUrl(resumeData.personal.github)}
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-3 items-center hover:text-blue-700"
  >
    <FaGithub />
    GitHub
  </a>
)}
            {resumeData.personal.portfolio && (
  <a
    href={externalUrl(resumeData.personal.portfolio)}
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-3 items-center hover:text-blue-700"
  >
    <FaGlobe />
    Portfolio
  </a>
)}
             {resumeData.personal.leetcode && (
  <a
    href={externalUrl(resumeData.personal.leetcode)}
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-3 items-center hover:text-blue-700"
  >
    <SiLeetcode />
    LeetCode
  </a>
)}

{resumeData.personal.codeforces && (
  <a
    href={externalUrl(resumeData.personal.codeforces)}
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-3 items-center hover:text-blue-700"
  >
    <SiCodeforces />
    Codeforces
  </a>
)}
            </div>

          </div>

          {/* SUMMARY */}

          {resumeData.summary && (
            <div className="mb-3">

              <h3 className="font-bold text-[22px] mb-2">
                Summary
              </h3>

              <p className="text-sm">
                {resumeData.summary}
              </p>

            </div>
          )}

          {/* EDUCATION */}

          {resumeData.education.length > 0 && (
            <div className="mb-4">

              <h3 className="font-bold text-[22px] mb-2">
                Education
              </h3>

              {resumeData.education.map((edu) => (
                <div key={edu.id} className="mb-2">

               <div className="flex justify-between">

  <h4 className="font-semibold">
    {edu.degree}
  </h4>

  <span className="text-xs font-semibold text-black">

    {edu.startYear}
    {" - "}
    {edu.current
      ? "Present"
      : edu.endYear}

  </span>

</div>

<p className="text-sm">
  {edu.school}
</p>

                </div>
              ))}

            </div>
          )}

          {/* SKILLS */}

{resumeData.skills.length > 0 && (
  <div className="mb-4">

    <h3 className="font-bold text-[22px] mb-2">
      Skills
    </h3>

  {resumeData.skills.length > 0 && (
  <div className="mb-4">

    <div className="space-y-1 text-sm text-black">
      {resumeData.skills.map((skill) => (
        <div key={skill.id}>
          {skill.name}
        </div>
      ))}
    </div>

  </div>
)}

  </div>
)}

          {/* LANGUAGES */}

          {resumeData.languages && (
            <div>

              <h3 className="font-bold text-[22px] mb-2">
                Languages
              </h3>

              <p className="text-sm text-gray-800 leading-relaxed">
             {resumeData.languages}
        </p>

            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        
       <div className="col-span-8 p-8 h-full overflow-hidden">

          <h1
  className="
    text-[58px]
    leading-[0.9]
    font-thin
    tracking-[0.12em]
    uppercase
  "
>
  {resumeData.personal.name
  .trim()
  .split(" ")
  .map((word, index) => (
      <div key={index}>{word}</div>
    ))}
</h1>

          <p className="text-[32px] font-bold text-black mt-0 mb-3">
            {resumeData.personal.title}
          </p>

          {/* EXPERIENCE */}

          {resumeData.experience.length > 0 && (
            <div className="mb-3">

              <h2 className="text-[38px] font-light mb-2">
  Experience
</h2>

              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="mb-2">

                <div className="flex justify-between">

  <div>

    <h3 className="text-[22px] font-semibold">
      {exp.title}
    </h3>

    <p className="text-[18px] font-medium">
      {exp.company}
    </p>

  </div>

  <div className="text-right">

    <p className="text-[16px] font-semibold text-black">
      {exp.startMonth} {exp.startYear}
      {" - "}
      {exp.current
        ? "Present"
        : `${exp.endMonth} ${exp.endYear}`}
    </p>

    <p className="text-[14px] text-gray-700">
      {exp.location}
    </p>

  </div>

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

              <h2 className="text-[38px] font-light mb-2">
  Projects
</h2>

              {resumeData.projects.map(
                (project) => (
                  <div
                    key={project.id}
                    className="mb-3"
                  >
                    <div className="flex justify-between items-start">

  <div>
    {project.githubLink ? (
      <a
        href={externalUrl(project.githubLink)}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-[24px]
          font-semibold
          text-[#5E6E3A]
          hover:text-blue-600
          hover:underline
          cursor-pointer
        "
      >
        {project.title}
      </a>
    ) : (
      <h3 className="text-[24px] font-semibold text-[#5E6E3A]">
        {project.title}
      </h3>
    )}

    <p className="text-sm text-gray-500 italic mb-1">
      {project.techStack}
    </p>
  </div>

  <span className="text-[16px] font-semibold text-black">
    {project.projectMonth}
    {" "}
    {project.projectYear}
  </span>

</div>

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

              <h2 className="text-[38px] font-light mb-">
  Achievements
</h2>

              <ul className="list-disc pl- mt-1">

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
