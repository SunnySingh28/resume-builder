import { useState } from "react";

function ResumeEditor({
 resumeData,
 setResumeData,
}) {
  const handlePersonalChange = (e) => {
    setResumeData({
      ...resumeData,
      personal: { ...resumeData.personal, [e.target.name]: e.target.value }
    });
  };

  const handleRootChange = (field, value) => {
    setResumeData({
      ...resumeData,
      [field]: value
    });
  };

  const handleExpChange = (id, field, value) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience, 
        {
  id: Date.now(),
  title: "",
  company: "",
  location: "",
  startMonth: "",
  startYear: "",
  endMonth: "",
  endYear: "",
  current: false,
  bullets: ""
}
      ]
    });
  };

  const handleEduChange = (id, field, value) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu)
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education, 
        {
  id: Date.now(),
  degree: "",
  school: "",
  startYear: "",
  endYear: "",
  current: false,
  achievements: ""
}
      ]
    });
  };

const [skillInput, setSkillInput] =
  useState("");
       
      const handleProjectChange = (
  id,
  field,
  value
) => {
  setResumeData({
    ...resumeData,
    projects: resumeData.projects.map(
      (project) =>
        project.id === id
          ? {
              ...project,
              [field]: value,
            }
          : project
    ),
  });
};

const addProject = () => {
  setResumeData({
    ...resumeData,
    projects: [
      ...(resumeData.projects || []),
      {
        id: Date.now(),
        title: "",
        techStack: "",
        description: "",
        projectMonth: "",
        projectYear: "",
        githubLink: ""
      },
    ],
  });
};

  return (
   <div className="bg-white px-10 py-8 w-full">
      {/* Personal Info */}
      <div className="mb-10 text-center">
        <input
          type="text"
          name="name"
          value={resumeData.personal.name}
          onChange={handlePersonalChange}
          className="text-4xl font-bold text-gray-900 tracking-tight w-full outline-none hover:bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-100 rounded-md px-2 py-1 text-center transition-all"
          placeholder="Full Name"
        />
        <input
          type="text"
          name="title"
          value={resumeData.personal.title}
          onChange={handlePersonalChange}
          className="text-xl text-[#65BA46] font-medium w-full outline-none hover:bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-100 rounded-md px-2 py-1 text-center transition-all mt-1"
          placeholder="Professional Title"
        />
       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
  <input
    type="text"
    name="email"
    value={resumeData.personal.email}
    onChange={handlePersonalChange}
    className="text-sm text-gray-500 outline-none hover:bg-gray-50 focus:ring-2 focus:ring-green-100 px-3 py-2 rounded-md border border-gray-100 w-full"
    placeholder="Email"
  />

  <input
    type="text"
    name="phone"
    value={resumeData.personal.phone}
    onChange={handlePersonalChange}
    className="text-sm text-gray-500 outline-none hover:bg-gray-50 focus:ring-2 focus:ring-green-100 px-3 py-2 rounded-md border border-gray-100 w-full"
    placeholder="Phone"
  />

  <input
    type="text"
    name="linkedin"
    value={resumeData.personal.linkedin}
    onChange={handlePersonalChange}
    className="text-sm text-blue-600 outline-none hover:bg-gray-50 focus:ring-2 focus:ring-green-100 px-3 py-2 rounded-md border border-gray-100 w-full"
    placeholder="LinkedIn URL"
  />

  <input
    type="text"
    name="github"
    value={resumeData.personal.github}
    onChange={handlePersonalChange}
    className="text-sm text-gray-700 outline-none hover:bg-gray-50 focus:ring-2 focus:ring-green-100 px-3 py-2 rounded-md border border-gray-100 w-full"
    placeholder="GitHub URL"
  />

  <input
    type="text"
    name="portfolio"
    value={resumeData.personal.portfolio}
    onChange={handlePersonalChange}
    className="text-sm text-green-700 outline-none hover:bg-gray-50 focus:ring-2 focus:ring-green-100 px-3 py-2 rounded-md border border-gray-100 w-full"
    placeholder="Portfolio URL"
  />

<input
  type="text"
  name="leetcode"
  value={resumeData.personal.leetcode || ""}
  onChange={handlePersonalChange}
  placeholder="LeetCode URL"
  className="text-sm outline-none px-3 py-2 rounded-md border border-gray-100 w-full"
/>

<input
  type="text"
  name="codeforces"
  value={resumeData.personal.codeforces || ""}
  onChange={handlePersonalChange}
  placeholder="Codeforces URL "
  className="text-sm outline-none px-3 py-2 rounded-md border border-gray-100 w-full"
/>

</div>
      </div>

      {/* Education Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5 text-gray-900 tracking-tight border-b pb-2">Education</h2>
        
        {resumeData.education.map((edu) => (
          <div key={edu.id} className="mb-6 relative group p-3 hover:bg-[#F9FAF8] rounded-xl transition border border-transparent hover:border-gray-100">
            <input 
              className="text-[#65BA46] font-semibold italic text-base outline-none bg-transparent hover:bg-white focus:ring-2 focus:ring-green-100 px-2 py-1 -ml-2 rounded-md w-full"
              value={edu.degree}
              onChange={(e) => handleEduChange(edu.id, 'degree', e.target.value)}
              placeholder="Degree Name"
            />
            
            <div className="flex gap-2 items-center text-gray-700 text-[13px] mb-2 mt-1">
              <input 
                className="outline-none bg-transparent hover:bg-white focus:ring-2 focus:ring-green-100 px-2 py-1 -ml-2 rounded-md flex-1 max-w-[200px]"
                value={edu.school}
                onChange={(e) => handleEduChange(edu.id, 'school', e.target.value)}
                placeholder="School / University"
              />
              {/* <span>-</span> */}
              <input
  className="outline-none bg-transparent hover:bg-white focus:ring-2 focus:ring-green-100 px-2 py-1 rounded-md max-w-[100px]"
  value={edu.startYear || ""}
  onChange={(e) =>
    handleEduChange(
      edu.id,
      "startYear",
      e.target.value
    )
  }
  placeholder="Start Year"
/>

<label className="flex items-center gap-2 text-sm font-medium">
  <input
    type="checkbox"
    checked={edu.current || false}
    onChange={(e) =>
      handleEduChange(
        edu.id,
        "current",
        e.target.checked
      )
    }
  />
  Present
</label>

{!edu.current && (
  <>
    <span>-</span>

    <input
      className="outline-none bg-transparent hover:bg-white focus:ring-2 focus:ring-green-100 px-2 py-1 rounded-md max-w-[100px]"
      value={edu.endYear || ""}
      onChange={(e) =>
        handleEduChange(
          edu.id,
          "endYear",
          e.target.value
        )
      }
      placeholder="End Year"
    />
  </>
)}
            </div>
            
            <textarea 
              className="w-full text-sm text-gray-500 outline-none bg-transparent hover:bg-white focus:ring-2 focus:ring-green-100 px-2 py-2 -ml-2 rounded-md resize-none min-h-[50px]"
              value={edu.achievements}
              onChange={(e) => handleEduChange(edu.id, 'achievements', e.target.value)}
              placeholder="Academic Description..."
            />

            <button 
              onClick={() => {
                 setResumeData({...resumeData, education: resumeData.education.filter(e => e.id !== edu.id)})
              }}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-red-400 text-xs font-bold hover:text-red-600 transition bg-red-50 px-2 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}

        <button 
          onClick={addEducation}
          className="w-full py-2.5 border border-dashed border-[#65BA46] rounded-xl text-[#65BA46] font-semibold flex items-center justify-center gap-2 hover:bg-[#F3FCEF] transition text-sm mt-2"
        >
          <div className="bg-[#65BA46] text-white rounded-full w-[18px] h-[18px] flex items-center justify-center leading-none text-sm">+</div> Add Education
        </button>
      </div>

       <div className="mb-10">
  <h2 className="text-2xl font-bold mb-5 text-gray-900 tracking-tight border-b pb-2">
    About Me
  </h2>

  <textarea
    className="w-full border rounded-lg p-3"
    value={resumeData.aboutMe || ""}
    onChange={(e) =>
      handleRootChange(
        "aboutMe",
        e.target.value
      )
    }
    placeholder="Tell something about yourself..."
  />
</div>

      {/* Professional Summary Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5 text-gray-900 tracking-tight border-b pb-2">Professional Summary</h2>
        <div className="p-1">
          <textarea 
            className="w-full text-[14px] text-gray-700 leading-relaxed outline-none bg-transparent hover:bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-100 px-3 py-2 rounded-md resize-none min-h-[80px]"
            value={resumeData.summary}
            onChange={(e) => handleRootChange('summary', e.target.value)}
            placeholder="Write a brief and impactful summary of your professional background and goals..."
          />
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5 text-gray-900 tracking-tight border-b pb-2">Experience</h2>
        
        {resumeData.experience.map((exp) => (
          <div key={exp.id} className="mb-6 relative group p-3 hover:bg-[#F9FAF8] rounded-xl transition border border-transparent hover:border-gray-100">
            <div className="flex gap-2 items-center">
              <input 
                className="text-[#65BA46] font-semibold italic text-base outline-none bg-transparent hover:bg-white focus:ring-2 focus:ring-green-100 px-2 py-1 -ml-2 rounded-md w-full max-w-[250px]"
                value={exp.title}
                onChange={(e) => handleExpChange(exp.id, 'title', e.target.value)}
                placeholder="Job Title"
              />
              <span className="text-[#65BA46] font-semibold">,</span>
              <input 
                className="text-[#65BA46] font-semibold italic text-base outline-none bg-transparent hover:bg-white focus:ring-2 focus:ring-green-100 px-2 py-1 rounded-md w-full"
                value={exp.company}
                onChange={(e) => handleExpChange(exp.id, 'company', e.target.value)}
                placeholder="Company Name"
              />
            </div>
            
            <div className="flex gap-2 items-center text-gray-500 text-[13px] mb-2 mt-1">
              <input 
                className="outline-none bg-transparent hover:bg-white focus:ring-2 focus:ring-green-100 px-2 py-1 -ml-2 rounded-md max-w-[150px]"
                value={exp.location}
                onChange={(e) => handleExpChange(exp.id, 'location', e.target.value)}
                placeholder="Location"
              />

              <div className="flex gap-2 flex-wrap">

  <select
    value={exp.startMonth}
    onChange={(e) =>
      handleExpChange(
        exp.id,
        "startMonth",
        e.target.value
      )
    }
    className="border rounded-md px-2 py-1"
  >
    <option value="">Start Month</option>
    <option>Jan</option>
    <option>Feb</option>
    <option>Mar</option>
    <option>Apr</option>
    <option>May</option>
    <option>Jun</option>
    <option>Jul</option>
    <option>Aug</option>
    <option>Sep</option>
    <option>Oct</option>
    <option>Nov</option>
    <option>Dec</option>
  </select>

  <input
    type="number"
    placeholder="Start Year"
    value={exp.startYear}
    onChange={(e) =>
      handleExpChange(
        exp.id,
        "startYear",
        e.target.value
      )
    }
    className="border rounded-md px-2 py-1 w-[120px]"
  />

 <label className="flex items-center gap-2 text-sm font-medium">
  <input
    type="checkbox"
    checked={exp.current || false}
    onChange={(e) =>
      handleExpChange(
        exp.id,
        "current",
        e.target.checked
      )
    }
  />
  Present
</label>

{!exp.current && (
  <>
    <span>-</span>

    <select
      value={exp.endMonth}
      onChange={(e) =>
        handleExpChange(
          exp.id,
          "endMonth",
          e.target.value
        )
      }
      className="border rounded-md px-2 py-1"
    >
      <option value="">End Month</option>
      <option>Jan</option>
      <option>Feb</option>
      <option>Mar</option>
      <option>Apr</option>
      <option>May</option>
      <option>Jun</option>
      <option>Jul</option>
      <option>Aug</option>
      <option>Sep</option>
      <option>Oct</option>
      <option>Nov</option>
      <option>Dec</option>
    </select>

    <input
      type="number"
      placeholder="End Year"
      value={exp.endYear}
      onChange={(e) =>
        handleExpChange(
          exp.id,
          "endYear",
          e.target.value
        )
      }
      className="border rounded-md px-2 py-1 w-[120px]"
    />
  </>
)}
</div>
            </div>
            
            <textarea 
              className="w-full text-sm text-gray-700 leading-snug outline-none bg-transparent hover:bg-white focus:ring-2 focus:ring-green-100 px-2 py-2 -ml-2 rounded-md resize-none min-h-[60px]"
              value={exp.bullets}
              onChange={(e) => handleExpChange(exp.id, 'bullets', e.target.value)}
              placeholder="Describe your responsibilities and impact (one per line)..."
            />

            <button 
              onClick={() => {
                 setResumeData({...resumeData, experience: resumeData.experience.filter(e => e.id !== exp.id)})
              }}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-red-400 text-xs font-bold hover:text-red-600 transition bg-red-50 px-2 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}

        <button 
          onClick={addExperience}
          className="w-full py-2.5 border border-dashed border-[#65BA46] rounded-xl text-[#65BA46] font-semibold flex items-center justify-center gap-2 hover:bg-[#F3FCEF] transition text-sm mt-2"
        >
          <div className="bg-[#65BA46] text-white rounded-full w-[18px] h-[18px] flex items-center justify-center leading-none text-sm">+</div> Add Experience
        </button>
      </div>

      {/* Skills Section */}

       <div className="mb-10">

  <h2 className="text-2xl font-bold mb-5 text-gray-900 tracking-tight border-b pb-2">
    Skills
  </h2>

  <input
    type="text"
    value={skillInput}
    onChange={(e) =>
      setSkillInput(e.target.value)
    }
    onKeyDown={(e) => {

      if (
        e.key === "Enter" &&
        skillInput.trim()
      ) {

        e.preventDefault();

        setResumeData({
          ...resumeData,
          skills: [
            ...resumeData.skills,
            {
              id: Date.now(),
              name: skillInput.trim(),
            },
          ],
        });

        setSkillInput("");
      }
    }}
    placeholder="Type skill and press Enter"
    className="w-full border rounded-lg px-3 py-2 mb-4"
  />

  <div className="flex flex-wrap gap-2">

    {(resumeData.skills || []).map(
      (skill) => (
        <div
          key={skill.id}
          className="
            flex
            items-center
            gap-2
            bg-green-100
            text-green-800
            px-3
            py-1
            rounded-full
          "
        >
          {skill.name}

          <button
            onClick={() =>
              setResumeData({
                ...resumeData,
                skills:
                  resumeData.skills.filter(
                    (s) =>
                      s.id !== skill.id
                  ),
              })
            }
            className="font-bold"
          >
            ×
          </button>

        </div>
      )
    )}

  </div>

</div>
      
        <div className="mb-10">
  <h2 className="text-2xl font-bold mb-5 text-gray-900 tracking-tight border-b pb-2">
    Languages
  </h2>

  <textarea
    className="w-full border rounded-lg p-3"
    value={resumeData.languages || ""}
    onChange={(e) =>
      handleRootChange(
        "languages",
        e.target.value
      )
    }
    placeholder="English, Hindi..."
  />
</div>
      
      <div className="mb-10">

  <h2 className="text-2xl font-bold mb-5 text-gray-900 tracking-tight border-b pb-2">
    Projects
  </h2>

  {(resumeData.projects || []).map(
    (project) => (
      <div
  key={project.id}
  className="mb-4 relative group border p-4 rounded-lg"
>
       <div className="flex justify-between items-center mb-2">

  <input
    value={project.title}
    onChange={(e) =>
      handleProjectChange(
        project.id,
        "title",
        e.target.value
      )
    }
    placeholder="Project Title"
    className="flex-1 border rounded p-2"
  />

  <button
    onClick={() =>
      setResumeData({
        ...resumeData,
        projects: resumeData.projects.filter(
          p => p.id !== project.id
        )
      })
    }
    className="
      ml-3
      text-red-500
      text-xs
      font-semibold
      hover:text-red-700
    "
  >
    Delete
  </button>

</div>

<input
  type="text"
  value={project.githubLink || ""}
  onChange={(e) =>
    handleProjectChange(
      project.id,
      "githubLink",
      e.target.value
    )
  }
  placeholder="GitHub Repository Link"
  className="w-full border rounded-lg px-3 py-2 mb-2"
/>

        <input
          value={project.techStack}
          onChange={(e) =>
            handleProjectChange(
              project.id,
              "techStack",
              e.target.value
            )
          }
          placeholder="React, Node.js..."
          className="w-full border rounded p-2 mb-2"
        />

        <textarea
          value={project.description}
          onChange={(e) =>
            handleProjectChange(
              project.id,
              "description",
              e.target.value
            )
          }
          placeholder="Project Description"
          className="w-full border rounded p-2"
        />

        <select
  value={project.projectMonth}
  onChange={(e) =>
    handleProjectChange(
      project.id,
      "projectMonth",
      e.target.value
    )
  }
  className="border rounded-md px-2 py-1"
>
  <option value="">Month</option>
  <option>Jan</option>
  <option>Feb</option>
  <option>Mar</option>
  <option>Apr</option>
  <option>May</option>
  <option>Jun</option>
  <option>Jul</option>
  <option>Aug</option>
  <option>Sep</option>
  <option>Oct</option>
  <option>Nov</option>
  <option>Dec</option>
</select>

<input
  type="number"
  placeholder="Year"
  value={project.projectYear}
  onChange={(e) =>
    handleProjectChange(
      project.id,
      "projectYear",
      e.target.value
    )
  }
  className="border rounded-md px-2 py-1 w-[120px]"
/>
      </div>
    )
  )}

  <button
    onClick={addProject}
    className="w-full py-2.5 border border-dashed border-[#65BA46] rounded-xl text-[#65BA46] font-semibold"
  >
    + Add Project
  </button>

</div>

      {/* Achievements Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5 text-gray-900 tracking-tight border-b pb-2">Achievements & Awards</h2>
        <div className="p-1">
          <textarea 
            className="w-full text-[14px] text-gray-700 leading-relaxed outline-none bg-transparent hover:bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-100 px-3 py-2 rounded-md resize-none min-h-[80px]"
            value={resumeData.achievements}
            onChange={(e) => handleRootChange('achievements', e.target.value)}
            placeholder="List your key achievements, awards, competitive programming ranks, or notable certifications (one per line)..."
          />
        </div>
      </div>
    </div>
  );
}

export default ResumeEditor;
