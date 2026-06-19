import Navbar from "./components/Navbar";
import ResumeEditor from "./components/ResumeEditor";
import ATSPanel from "./components/ATSPanel";
import ResumePreview from "./components/ResumePreview";
import {
  useState,
  useRef,
  useEffect
} from "react";

function App() {
  const targetRef = useRef();

  const [isPreview, setIsPreview] = useState(false);

  const [template, setTemplate] =
useState("modern");

  const [resumeData, setResumeData] = useState(() => {
  const savedData =
  localStorage.getItem("resumeData");

if (savedData) {
  const parsed = JSON.parse(savedData);

  return {
  ...parsed,

  aboutMe: parsed.aboutMe || "",

  languages:
    parsed.languages || "",

  projects:
    parsed.projects || [],

  skills: Array.isArray(parsed.skills)
    ? parsed.skills
    : [],
};
}

return {
        personal: {
          name: "",
          title: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
          portfolio: "",
          photo: "",
        },

        summary: "",

        aboutMe: "",

        languages: "",

        experience: [],

        education: [],

        projects: [],

        achievements: "",

        skills: []
      };
});

useEffect(() => {
  localStorage.setItem(
    "resumeData",
    JSON.stringify(resumeData)
  );
}, [resumeData]);


  return (
   <div className="h-screen w-screen bg-[#F5F7F4] flex flex-col overflow-hidden">

      <Navbar
  isPreview={isPreview}
  setIsPreview={setIsPreview}
  resumeData={resumeData}
  setResumeData={setResumeData}
  template={template}
setTemplate={setTemplate}
/>

      <div className="flex flex-1 overflow-hidden">

        {/* LEFT SECTION */}

       <div className="flex-[4] overflow-y-auto">

          {isPreview ? (

            <div className="h-full overflow-y-auto bg-[#F3F4F6] p-4">

              <ResumePreview
              resumeData={resumeData}
               template={template}
                ref={targetRef}
                id="resume-preview-id"
              />

            </div>

          ) : (

           <div className="h-full overflow-y-auto bg-white border-r">

              <ResumeEditor
  resumeData={resumeData}
  setResumeData={setResumeData}
  
/>

            </div>

          )}

        </div>

        {/* RIGHT SECTION */}

     <div className="flex-[1.4] overflow-y-auto border-l bg-[#FAFAFA]">

          <ATSPanel
  resumeData={resumeData}
  
/>

        </div>

      </div>

    </div>
  );
}

export default App;
