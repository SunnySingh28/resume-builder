function MinimalTemplate({ resumeData }) {
  const externalUrl = (url) =>
    /^https?:\/\//i.test(url)
      ? url
      : `https://${url}`;

  return (
    <div
      id="resume-preview-id"
      className="bg-white max-w-[1000px] mx-auto p-10"
    >
      {/* HEADER */}

      <div className="text-center border-b pb-6">

        <h1 className="text-5xl font-extralight tracking-wide">
          {resumeData.personal.name}
        </h1>

        <p className="text-xl text-gray-500 mt-2">
          {resumeData.personal.title}
        </p>

        <div className="flex justify-center flex-wrap gap-4 text-sm mt-4 text-gray-600">

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

      {/* ABOUT */}

      {resumeData.aboutMe && (
        <div className="mt-8">

          <h2 className="uppercase tracking-[0.3em] text-sm text-gray-500">
            About Me
          </h2>

          <p className="mt-2">
            {resumeData.aboutMe}
          </p>

        </div>
      )}

      {/* SUMMARY */}

      {resumeData.summary && (
        <div className="mt-8">

          <h2 className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Summary
          </h2>

          <p className="mt-2">
            {resumeData.summary}
          </p>

        </div>
      )}

      {/* SKILLS */}

      {resumeData.skills.length > 0 && (
        <div className="mt-8">

          <h2 className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Skills
          </h2>

          <p className="mt-2">
            {resumeData.skills
              .map(skill => skill.name)
              .join(", ")}
          </p>

        </div>
      )}

      {/* EXPERIENCE */}

      {resumeData.experience.length > 0 && (
        <div className="mt-8">

          <h2 className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
            Experience
          </h2>

          {resumeData.experience.map(exp => (
            <div key={exp.id} className="mb-5">

              <div className="flex justify-between">

                <div>
                  <h3 className="font-semibold">
                    {exp.title}
                  </h3>

                  <p className="text-gray-600">
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

              <p className="text-sm text-gray-500">
                {exp.location}
              </p>

            </div>
          ))}

        </div>
      )}

      {/* PROJECTS */}

      {(resumeData.projects || []).length > 0 && (
        <div className="mt-8">

          <h2 className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
            Projects
          </h2>

          {resumeData.projects.map(project => (
            <div key={project.id} className="mb-5">

              <div className="flex justify-between">

                {project.githubLink ? (
                  <a
                    href={externalUrl(project.githubLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="font-semibold">
                    {project.title}
                  </h3>
                )}

                <span className="text-sm text-gray-500">
                  {project.projectMonth}
                  {" "}
                  {project.projectYear}
                </span>

              </div>

              <p className="text-sm italic text-gray-500">
                {project.techStack}
              </p>

              <p className="mt-1">
                {project.description}
              </p>

            </div>
          ))}

        </div>
      )}

      {/* EDUCATION */}

      {resumeData.education.length > 0 && (
        <div className="mt-8">

          <h2 className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
            Education
          </h2>

          {resumeData.education.map(edu => (
            <div key={edu.id} className="mb-4">

              <div className="flex justify-between">

                <h3 className="font-semibold">
                  {edu.degree}
                </h3>

                <span className="text-sm text-gray-500">
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

        </div>
      )}

      {/* ACHIEVEMENTS */}

      {resumeData.achievements && (
        <div className="mt-8">

          <h2 className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
            Achievements
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

        </div>
      )}

    </div>
  );
}

export default MinimalTemplate;
