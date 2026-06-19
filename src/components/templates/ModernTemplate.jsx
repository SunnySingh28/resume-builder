function ModernTemplate({ resumeData }) {
  const externalUrl = (url) =>
    /^https?:\/\//i.test(url)
      ? url
      : `https://${url}`;

  return (
    <div
      id="resume-preview-id"
      className="bg-white max-w-[1000px] mx-auto p-8"
    >
      {/* HEADER */}

      <div className="border-b pb-6 mb-6">

        <h1 className="text-5xl font-bold text-green-700">
          {resumeData.personal.name}
        </h1>

        <p className="text-xl text-gray-600 mt-2">
          {resumeData.personal.title}
        </p>

        <div className="flex flex-wrap gap-4 mt-4 text-sm">

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
        <section className="mb-6">

          <h2 className="font-bold text-2xl mb-2">
            About Me
          </h2>

          <p>{resumeData.aboutMe}</p>

        </section>
      )}

      {/* SUMMARY */}

      {resumeData.summary && (
        <section className="mb-6">

          <h2 className="font-bold text-2xl mb-2">
            Summary
          </h2>

          <p>{resumeData.summary}</p>

        </section>
      )}

      {/* SKILLS */}

      {resumeData.skills.length > 0 && (
        <section className="mb-6">

          <h2 className="font-bold text-2xl mb-2">
            Skills
          </h2>

          <p>
            {resumeData.skills
              .map((s) => s.name)
              .join(", ")}
          </p>

        </section>
      )}

      {/* EXPERIENCE */}

      {resumeData.experience.length > 0 && (
        <section className="mb-6">

          <h2 className="font-bold text-2xl mb-3">
            Experience
          </h2>

          {resumeData.experience.map((exp) => (
            <div key={exp.id} className="mb-4">

              <div className="flex justify-between">

                <h3 className="font-semibold">
                  {exp.title}
                </h3>

                <span>
                  {exp.startMonth} {exp.startYear}
                </span>

              </div>

              <p>{exp.company}</p>

              <p className="text-sm text-gray-500">
                {exp.location}
              </p>

            </div>
          ))}

        </section>
      )}

      {/* PROJECTS */}

      {(resumeData.projects || []).length > 0 && (
        <section className="mb-6">

          <h2 className="font-bold text-2xl mb-3">
            Projects
          </h2>

          {resumeData.projects.map(
            (project) => (
              <div
                key={project.id}
                className="mb-4"
              >
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

                <p>{project.description}</p>
              </div>
            )
          )}

        </section>
      )}

      {/* EDUCATION */}

      {resumeData.education.length > 0 && (
        <section className="mb-6">

          <h2 className="font-bold text-2xl mb-3">
            Education
          </h2>

          {resumeData.education.map((edu) => (
            <div key={edu.id}>

              <h3 className="font-semibold">
                {edu.degree}
              </h3>

              <p>{edu.school}</p>

            </div>
          ))}

        </section>
      )}

      {/* ACHIEVEMENTS */}

      {resumeData.achievements && (
        <section>

          <h2 className="font-bold text-2xl mb-3">
            Achievements
          </h2>

          <p>{resumeData.achievements}</p>

        </section>
      )}

    </div>
  );
}

export default ModernTemplate;
