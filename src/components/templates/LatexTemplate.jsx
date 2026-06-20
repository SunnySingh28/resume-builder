function LatexTemplate({ resumeData }) {
  const externalUrl = (url) =>
    /^https?:\/\//i.test(url)
      ? url
      : `https://${url}`;

  return (
    <div
  id="resume-preview-id"
  className="latex-template bg-white w-[794px] min-h-[1123px] mx-auto p-8 text-black"
>
      {/* HEADER */}

      <div className="text-center">
       <h1 className="text-5xl font-bold text-center mb-4">
          {resumeData.personal.name}
        </h1>

        <div className="flex justify-center gap-6 text-[14px] text-green-700 mb-2">
          {resumeData.personal.phone && (
            <a href={`tel:${resumeData.personal.phone}`}
            className="text-[#6B8E23] hover:underline font-medium"
            >
              {resumeData.personal.phone}
            </a>
          )}

          {resumeData.personal.email && (
            <a href={`mailto:${resumeData.personal.email}`}
            className="text-[#6B8E23] hover:underline font-medium"
            >
              {resumeData.personal.email}
            </a>
          )}

          {resumeData.personal.linkedin && (
            <a
              href={externalUrl(
                resumeData.personal.linkedin
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B8E23] hover:underline font-medium"
            >
              LinkedIn
            </a>
          )}

          {resumeData.personal.github && (
            <a
              href={externalUrl(
                resumeData.personal.github
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B8E23] hover:underline font-medium"
            >
              GitHub
            </a>
          )}

          {resumeData.personal.leetcode && (
            <a
              href={externalUrl(
                resumeData.personal.leetcode
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B8E23] hover:underline font-medium"
            >
              LeetCode
            </a>
          )}

          {resumeData.personal.portfolio && (
            <a
              href={externalUrl(
                resumeData.personal.portfolio
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B8E23] hover:underline font-medium"
            >
              Portfolio
            </a>
          )}
        </div>
      </div>

      {/* EDUCATION */}

      {resumeData.education?.length > 0 && (
        <section className="mt-8">
          <h2 className="uppercase text-[24px] font-bold border-b border-black mb-4 pb-1">
            Education
          </h2>

          {resumeData.education.map((edu) => (
            <div
              key={edu.id}
              className="mb-4"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">
                    {edu.school}
                  </h3>

                  <p>
                    {edu.degree}
                  </p>
                </div>

                <span className="text-sm">
                  {edu.startYear} -{" "}
                  {edu.current
                    ? "Present"
                    : edu.endYear}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* EXPERIENCE */}

      {resumeData.experience?.length > 0 && (
        <section className="mt-8">
          <h2 className="uppercase font-bold border-b border-black pb-1 mb-4">
            Experience
          </h2>

          {resumeData.experience.map((exp) => (
            <div
              key={exp.id}
              className="mb-6"
            >
              <div className="flex justify-between">
  <div>
    <h3 className="font-bold">
      {exp.title}
    </h3>

    <p className="italic">
      {exp.company}
    </p>
  </div>

  <div className="text-right">
    <p className="text-sm font-semibold">
      {exp.startMonth} {exp.startYear}
      {" - "}
      {exp.current
        ? "Present"
        : `${exp.endMonth} ${exp.endYear}`}
    </p>

    {exp.location && (
      <p className="text-sm italic">
        {exp.location}
      </p>
    )}
  </div>
</div>

              <ul className="list-disc pl-5 text-sm space-y-1">
                {(exp.bullets || exp.description || "")
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
        </section>
      )}

      {/* SKILLS */}

      {resumeData.skills?.length > 0 && (
        <section className="mt-8">
  <h2 className="section-title">
    Technical Skills
  </h2>

  <div className="text-sm leading-6">
    <p>
      <span className="font-bold">
        Languages:
      </span>{" "}
      {resumeData.skills
        .map((skill) =>
          skill.name || skill
        )
        .join(", ")}
    </p>
  </div>
</section>
      )}

      {/* PROJECTS */}

      {resumeData.projects?.length > 0 && (
        <section className="mt-8">
          <h2 className="uppercase font-bold border-b border-black pb-1 mb-4">
            Projects
          </h2>

          {resumeData.projects.map(
            (project) => (
              <div
                key={project.id}
                className="mb-5"
              >
                <div className="flex justify-between">
                  {project.githubLink ? (
                    <a
  href={externalUrl(project.githubLink)}
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold text-[#6B8E23] hover:underline"
>
  {project.title}
</a>
                  ) : (
                    <h3 className="font-bold">
                      {project.title}
                    </h3>
                  )}

                  <span className="text-sm">
                    {project.projectMonth}{" "}
                    {project.projectYear}
                  </span>
                </div>

                {project.techStack && (
                  <p className="italic text-sm">
                    {project.techStack}
                  </p>
                )}

                <ul className="list-disc pl-5 text-sm mt-1">
                  {(project.bullets || project.description || "")
                    .split("\n")
                    .filter((b) => b.trim())
                    .map((bullet, index) => (
                      <li key={index}>
                        {bullet}
                      </li>
                    ))}
                </ul>
              </div>
            )
          )}
        </section>
      )}

      {/* LANGUAGES */}

      {resumeData.languages && (
        <section className="mt-8">
          <h2 className="uppercase font-bold border-b border-black pb-1 mb-4">
            Languages
          </h2>

          <p>
            {String(
              resumeData.languages
            )}
          </p>
        </section>
      )}

      {/* ACHIEVEMENTS */}

      {resumeData.achievements && (
        <section className="mt-8">
          <h2 className="uppercase font-bold border-b border-black pb-1 mb-4">
            Achievements
          </h2>

          <ul className="list-disc pl-5">
            {resumeData.achievements
              .split("\n")
              .filter((a) => a.trim())
              .map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default LatexTemplate;