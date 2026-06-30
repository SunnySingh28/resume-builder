function ClassicTemplate({ resumeData }) {

const SectionTitle = ({ title }) => (
  <div className="bg-[#dbe2ee] text-center py-1 my-4">
    <h2
      className="font-bold text-[18px]"
      style={{ letterSpacing: "6px" }}
    >
      {title}
    </h2>
  </div>
);

  const externalUrl = (url) =>
    /^https?:\/\//i.test(url)
      ? url
      : `https://${url}`;

  return (
    <div
  id="resume-preview-id"
  className="bg-white w-[794px] min-h-[1123px] mx-auto px-14 py-10 text-black shadow-xl"
  style={{
    fontFamily: "Times New Roman, serif",
  }}
>
      {/* HEADER */}

      <div className="text-center mb-6">

  <h1 className="text-5xl font-bold">
    {resumeData.personal.name}
  </h1>

 <div className="mt-2 text-sm flex justify-center flex-wrap gap-2">

  {resumeData.personal.phone && (
    <>
      <b>Phone:</b>
      <a href={`tel:${resumeData.personal.phone}`}>
        {resumeData.personal.phone}
      </a>
    </>
  )}

  |

  {resumeData.personal.email && (
    <>
      <b>Email:</b>
      <a href={`mailto:${resumeData.personal.email}`}>
        {resumeData.personal.email}
      </a>
    </>
  )}

  |

  {resumeData.personal.linkedin && (
    <a
      href={externalUrl(resumeData.personal.linkedin)}
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
  )}

  |

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

          <SectionTitle title="SUMMARY" />

        <p className="text-[15px] leading-6">
  {resumeData.summary}
</p>

        </section>
      )}

      
      {/* EDUCATION */}

      {resumeData.education.length > 0 && (
        <section className="mb-5">

         <SectionTitle title="EDUCATION" />

          {resumeData.education.map(edu => (
  <div key={edu.id} className="mb-4">

    <div className="flex justify-between">

      <div>
        <h3 className="font-bold">
          {edu.school}
        </h3>

        <p>
          {edu.degree}
        </p>
      </div>

      <div className="text-right">

        <p className="font-bold">
          {edu.location}
        </p>

        <p className="text-sm">
          {edu.startYear}
          {" - "}
          {edu.current
            ? "Present"
            : edu.endYear}
        </p>

      </div>

    </div>

  </div>
))}

        </section>
      )}


      {/* EXPERIENCE */}

      {resumeData.experience.length > 0 && (
        <section className="mb-5">

          <SectionTitle title="EXPERIENCE" />

          {resumeData.experience.map(exp => (
            <div
              key={exp.id}
              className="mb-4"
            >
              <div className="flex justify-between">

                <div>
                  <div>
  <h3 className="font-bold">
    {exp.company}
  </h3>

  <p>
    {exp.title}
  </p>
</div>
                </div>

               <div className="text-right">

  

  <p className="text-sm">
    {exp.startMonth} {exp.startYear}
    {" - "}
    {exp.current
      ? "Present"
      : `${exp.endMonth} ${exp.endYear}`}
  </p>

  <p className="text-sm">
    {exp.location}
  </p>

</div>

              </div>


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

     {/* SKILLS */}

      {resumeData.skills.length > 0 && (
        <section className="mb-5">

          <SectionTitle title="SKILLS" />

         <div className="space-y-1 text-[15px] leading-6">
  {resumeData.skills.map((skill, index) => (
    <p key={index}>
      {skill.name || skill}
    </p>
  ))}
</div>

        </section>
      )}

      {/* PROJECTS */}

      {(resumeData.projects || []).length > 0 && (
        <section className="mb-5">

        <SectionTitle title="PROJECTS" />

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
                    className="font-bold text-blue-700 hover:underline"
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

              <ul className="list-disc pl-5 mt-1">

  {(project.description || "")
    .split("\n")
    .filter(item => item.trim())
    .map((item,index)=>(
      <li key={index}>
        {item}
      </li>
    ))}

</ul>

            </div>
          ))}

        </section>
      )}

      {/* ACHIEVEMENTS */}

      {resumeData.achievements && (
        <section>

         <SectionTitle title="ACHIEVEMENTS" />

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
