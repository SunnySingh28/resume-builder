import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";
function ModernTemplate({ resumeData }) {
  const externalUrl = (url) =>
    /^https?:\/\//i.test(url)
      ? url
      : `https://${url}`;

  return (
    <div
      id="resume-preview-id"
      className="bg-white w-[210mm] min-h-[297mm] mx-auto shadow-lg overflow-hidden"
    >
      
      {/* HEADER */}

      <div className="bg-green-600 text-white px-8 py-8">
  <div className="flex items-center gap-6">

    {resumeData.personal.photo && (
      <img
        src={resumeData.personal.photo}
        alt="Profile"
        className="w-28 h-28 rounded-full border-4 border-white object-cover"
      />
    )}

    <div>
      <h1 className="text-5xl font-extrabold tracking-wide">
        {resumeData.personal.name}
      </h1>

      <p className="text-2xl mt-2 opacity-90">
        {resumeData.personal.title}
      </p>
       
       <div className="flex flex-wrap gap-4 mt-4 text-sm">

  {resumeData.personal.email && (
    <a
      href={`mailto:${resumeData.personal.email}`}
      className="flex items-center gap-2 hover:underline"
    >
      <FaEnvelope />
      {resumeData.personal.email}
    </a>
  )}

  {resumeData.personal.phone && (
    <a
      href={`tel:${resumeData.personal.phone}`}
      className="flex items-center gap-2 hover:underline"
    >
      <FaPhoneAlt />
      {resumeData.personal.phone}
    </a>
  )}

  {resumeData.personal.linkedin && (
    <a
      href={externalUrl(resumeData.personal.linkedin)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:underline"
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
      className="flex items-center gap-2 hover:underline"
    >
      <FaGithub />
      GitHub
    </a>
  )}

  {resumeData.personal.leetcode && (
    <a
      href={externalUrl(resumeData.personal.leetcode)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:underline"
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
      className="flex items-center gap-2 hover:underline"
    >
      <SiCodeforces />
      Codeforces
    </a>
  )}

  {resumeData.personal.portfolio && (
    <a
      href={externalUrl(resumeData.personal.portfolio)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:underline"
    >
      <FaGlobe />
      Portfolio
    </a>
  )}
</div>
</div>
</div>
</div>


      {/* MAIN LAYOUT */}

      <div className="grid grid-cols-12 ">
        {/* LEFT SIDEBAR */}

        
          {/* ABOUT */}
          <div className="col-span-4 bg-slate-100 p-6 border-r border-gray-300">

          {resumeData.aboutMe && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
                About Me
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                {resumeData.aboutMe}
              </p>
            </section>
          )}

          {/* SKILLS */}

          {resumeData.skills.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
                Skills
              </h2>

              <div className="flex flex-wrap gap-2">
              { resumeData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill.name||skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}

          {resumeData.education.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
                Education
              </h2>

              {resumeData.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-semibold">
                    {edu.degree}
                  </h3>

                  <p className="text-gray-700">
                    {edu.school}
                  </p>

                  <p className="text-sm text-gray-500">
                    {edu.startYear} - {edu.endYear}
                  </p>
                </div>
              ))}
            </section>
          )}


{/* LANGUAGES */}

{resumeData.languages && (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
        Languages
      </h2>

      <div className="space-y-2">
        {String(resumeData.languages)
  .split(",")
  .map((lang, index) => (
          <p key={index}>
            {lang.language || lang.name || lang}
          </p>
        ))}
      </div>
    </section>
)}

{/* ACHIEVEMENTS */}

{resumeData.achievements && (
  <section>
    <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
      Achievements
    </h2>

    <p className="text-sm text-gray-700 whitespace-pre-line">
      {resumeData.achievements}
    </p>
  </section>
)}
</div>

        {/* RIGHT CONTENT */}

        <div className="col-span-8 bg-white p-8">
          {/* SUMMARY */}

          {resumeData.summary && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
                Professional Summary
              </h2>

              <p className="text-gray-700 leading-relaxed">
                {resumeData.summary}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}

          {resumeData.experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
                Experience
              </h2>

              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <>
  {/* Row 1 */}
  <div className="flex justify-between items-center">
    <h3 className="font-bold text-lg">
      {exp.title}
    </h3>

    <span className="text-sm text-gray-500">
      {exp.startMonth} {exp.startYear}
      {exp.endMonth &&
        ` - ${exp.endMonth} ${exp.endYear}`}
    </span>
  </div>

  {/* Row 2 */}
  <div className="flex justify-between items-center mt-1">
    <p className="italic text-gray-600">
      {exp.company}
    </p>

    {exp.location && (
      <p className="text-sm text-gray-500">
        {exp.location}
      </p>
    )}
  </div>
</>

                 {(exp.description || exp.bullets) && (
  <p className="mt-2 text-gray-700 whitespace-pre-line">
    {exp.description || exp.bullets}
  </p>
)}

                </div>
              ))}
            </section>
          )}

          {/* PROJECTS */}

          {(resumeData.projects || []).length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
                Projects
              </h2>

              {resumeData.projects.map((project) => (
                <div
                  key={project.id}
                  className="mb-6"
                >
                  {project.githubLink ? (
                    <a
                      href={externalUrl(project.githubLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-lg text-green-700 hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <h3 className="font-bold text-lg">
                      {project.title}
                    </h3>
                  )}

                  <p className="mt-2 text-gray-700">
                    {project.description}
                  </p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModernTemplate;

