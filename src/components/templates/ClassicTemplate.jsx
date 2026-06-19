function ClassicTemplate({ resumeData }) {
  const externalUrl = (url) =>
    /^https?:\/\//i.test(url)
      ? url
      : `https://${url}`;

  return (
    <div
      id="resume-preview-id"
      className="bg-white max-w-[1000px] mx-auto p-10 text-black"
    >
      {/* HEADER */}

      <div className="text-center border-b pb-4 mb-6">

        <h1 className="text-4xl font-bold uppercase">
          {resumeData.personal.name}
        </h1>

        <p className="text-lg mt-2">
          {resumeData.personal.title}
        </p>

        <div className="flex justify-center flex-wrap gap-4 text-sm mt-3">

          {resumeData.personal.email && (
            <a href={`mailto:${resumeData.personal.email}`}>
              {resumeData.personal.email}
            </a>
          )}

          {resumeData.personal.phone && (
            <a href={`tel:${resumeData.personal.phone}`}>
              {resumeData.personal.phone}
            </a>
          )}

          {resumeData.personal.linkedin && (
            <a
              href={externalUrl(resumeData.personal.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}

          {resumeData.personal.github && (
            <a
              href={externalUrl(resumeData.personal.github)}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}

        </div>

      </div>

      {/* SUMMARY */}

      {resumeData.summary && (
        <section className="mb-5">

          <h2 className="font-bold text-xl border-b mb-2">
            PROFESSIONAL SUMMARY
          </h2>

          <p>{resumeData.summary}</p>

        </section>
      )}

      {/* SKILLS */}

      {resumeData.skills.length > 0 && (
        <section className="mb-5">

          <h2 className="font-bold text-xl border-b mb-2">
            SKILLS
          </h2>

          <p>
            {resumeData.skills
              .map(skill => skill.name)
              .join(", ")}
          </p>

        </section>
      )}

      {/* EXPERIENCE */}

      {resumeData.experience.length > 0 && (
        <section className="mb-5">

          <h2 className="font-bold text-xl border-b mb-2">
            EXPERIENCE
          </h2>

          {resumeData.experience.map(exp => (
            <div
              key={exp.id}
              className="mb-4"
            >
              <div className="flex justify-between">

                <div>
                  <h3 className="font-bold">
                    {exp.title}
                  </h3>

                  <p>
                    {exp.company}
                  </p>
                </div>

                <span className="text-sm">
                  {exp.startMonth} {exp.startYear}
                  {" - "}
                  {exp.current
                    ? "Present"
                    : `${exp.endMonth} ${exp.endYear}`}
                </span>

              </div>

              <p className="text-sm text-gray-600">
                {exp.location}
              </p>

              <ul className="list-disc pl-5 mt-1">

                {exp.bullets
                  ?.split("\n")
                  .filter(b => b.trim())
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

      {/* PROJECTS */}

      {(resumeData.projects || []).length > 0 && (
        <section className="mb-5">

          <h2 className="font-bold text-xl border-b mb-2">
            PROJECTS
          </h2>

          {resumeData.projects.map(project => (
            <div
              key={project.id}
              className="mb-4"
            >
              <div className="flex justify-between">

                {project.githubLink ? (
                  <a
                    href={externalUrl(project.githubLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="font-bold">
                    {project.title}
                  </h3>
                )}

                <span className="text-sm">
                  {project.projectMonth}
                  {" "}
                  {project.projectYear}
                </span>

              </div>

              <p className="italic text-sm">
                {project.techStack}
              </p>

              <p>
                {project.description}
              </p>

            </div>
          ))}

        </section>
      )}

      {/* EDUCATION */}

      {resumeData.education.length > 0 && (
        <section className="mb-5">

          <h2 className="font-bold text-xl border-b mb-2">
            EDUCATION
          </h2>

          {resumeData.education.map(edu => (
            <div
              key={edu.id}
              className="mb-3"
            >
              <div className="flex justify-between">

                <h3 className="font-bold">
                  {edu.degree}
                </h3>

                <span className="text-sm">
                  {edu.startYear}
                  {" - "}
                  {edu.current
                    ? "Present"
                    : edu.endYear}
                </span>

              </div>

              <p>{edu.school}</p>

            </div>
          ))}

        </section>
      )}

      {/* ACHIEVEMENTS */}

      {resumeData.achievements && (
        <section>

          <h2 className="font-bold text-xl border-b mb-2">
            ACHIEVEMENTS
          </h2>

          <ul className="list-disc pl-5">

            {resumeData.achievements
              .split("\n")
              .filter(a => a.trim())
              .map((a, index) => (
                <li key={index}>
                  {a}
                </li>
              ))}

          </ul>

        </section>
      )}

    </div>
  );
}

export default ClassicTemplate;
