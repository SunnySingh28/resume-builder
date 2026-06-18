import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import ResumeEditor from "./components/ResumeEditor";
import ATSPanel from "./components/ATSPanel";
import ResumePreview from "./components/ResumePreview";

function App() {
  const targetRef = useRef();

  const [isPreview, setIsPreview] = useState(false);

  const [resumeData, setResumeData] = useState({
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

    experience: [],

    education: [],

    achievements: "",

    skills: {
      industry: "",
      tools: "",
    },
  });

  return (
    <div className="h-screen w-screen bg-[#F5F7F4] flex flex-col overflow-hidden">

      <Navbar
        isPreview={isPreview}
        setIsPreview={setIsPreview}
        resumeData={resumeData}
        setResumeData={setResumeData}
      />

      <div className="flex flex-1 overflow-hidden">

        {/* LEFT SECTION */}

        <div className="w-[70%] overflow-y-auto">

          {isPreview ? (

            <div className="h-full overflow-y-auto bg-[#F3F4F6] p-6 flex justify-center">

              <ResumePreview
                resumeData={resumeData}
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

        <div className="w-[30%] overflow-y-auto border-l bg-[#FAFAFA]">

          <ATSPanel
            resumeData={resumeData}
          />

        </div>

      </div>

    </div>
  );
}

export default App;