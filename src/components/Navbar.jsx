import { FaArrowRight, FaDownload, FaCamera, FaSpinner } from "react-icons/fa";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import {
  generateResume,
  importResume,
} from "../services/aiService";

function Navbar({
  isPreview,
  setIsPreview,
  resumeData,
  setResumeData,
  template,
  setTemplate
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [generatedPdf, setGeneratedPdf] = useState(null);
  const generatedPdfUrlRef = useRef(null);
  const [aiPrompt, setAiPrompt] = useState("");
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setResumeData({
        ...resumeData,
        personal: {
          ...resumeData.personal,
          photo: reader.result,
        },
      });
    };

    reader.readAsDataURL(file);
  };

const handleDownload = async () => {
  setIsDownloading(true);
  setGeneratedPdf(null);

  try {
    let element = document.getElementById(
      "resume-preview-id"
    );

    if (!element) {
      setIsPreview(true);

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      element = document.getElementById(
        "resume-preview-id"
      );
    }

    if (!element) {
      alert("Resume Preview Not Found");
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      width: element.scrollWidth,
  height: element.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");

   const pdf = new jsPDF({
  orientation: "portrait",
  unit: "px",
  format: [794, 1123],
});

pdf.addImage(
  imgData,
  "PNG",
  0,
  0,
  794,
  1123
);

const elementRect =
  element.getBoundingClientRect();

const scaleX = 794 / elementRect.width;
const scaleY = 1123 / elementRect.height;

element
  .querySelectorAll("a[href]")
  .forEach((link) => {
    const href = link.getAttribute("href");
    const rect = link.getBoundingClientRect();

    if (
      !href ||
      rect.width <= 0 ||
      rect.height <= 0
    ) {
      return;
    }

    pdf.link(
      (rect.left - elementRect.left) * scaleX,
      (rect.top - elementRect.top) * scaleY,
      rect.width * scaleX,
      rect.height * scaleY,
      { url: href }
    );
  });

    const fileName =
      `${resumeData.personal.name || "resume"}.pdf`;
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    if (generatedPdfUrlRef.current) {
      URL.revokeObjectURL(generatedPdfUrlRef.current);
    }

    generatedPdfUrlRef.current = pdfUrl;

    const downloadLink =
      document.createElement("a");

    downloadLink.href = pdfUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

    setGeneratedPdf({
      fileName,
      url: pdfUrl,
    });

  } catch (error) {
    console.error("PDF ERROR:", error);
    alert(error.message);
  } finally {
    setIsDownloading(false);
  }
};

const handleResumeImport = async (e) => {
  console.log("IMPORT CLICKED");
  try {
    const file = e.target.files[0];

    if (!file) return;

   const response = await importResume(file);

const ai = response.data;

setResumeData((prev) => ({
  ...prev,

  personal: {
    ...prev.personal,
    ...ai.personal,
  },

  summary: ai.summary || "",

  aboutMe: ai.aboutMe || "",

  languages: ai.languages || "",

  skills: Array.isArray(ai.skills)
    ? ai.skills.map((skill, index) => ({
        id: Date.now() + index,
        name: skill,
      }))
    : [],

  achievements: Array.isArray(ai.achievements)
    ? ai.achievements.join("\n")
    : ai.achievements || "",

  education: Array.isArray(ai.education)
    ? ai.education.map((edu, index) => ({
        id: Date.now() + index,
        degree: edu.degree || "",
        school: edu.school || "",
        location: edu.location || "",
        startYear: edu.startYear || "",
        endYear: edu.endYear || "",
        current: edu.current || false,
      }))
    : [],

  experience: Array.isArray(ai.experience)
    ? ai.experience.map((exp, index) => ({
        id: Date.now() + index,
        title: exp.title || "",
        company: exp.company || "",
        location: exp.location || "",
        startMonth: exp.startMonth || "",
        startYear: exp.startYear || "",
        endMonth: exp.endMonth || "",
        endYear: exp.endYear || "",
        current: exp.current || false,
        bullets: Array.isArray(exp.bullets)
          ? exp.bullets.join("\n")
          : exp.bullets || "",
      }))
    : [],

  projects: Array.isArray(ai.projects)
    ? ai.projects.map((project, index) => ({
        id: Date.now() + index,
        title: project.name || project.title || "",
        techStack: Array.isArray(project.technologies)
          ? project.technologies.join(", ")
          : project.techStack || "",
        description: project.description || "",
        githubLink: project.githubLink || "",
        projectMonth: project.projectMonth || "",
        projectYear: project.projectYear || "",
      }))
    : [],
}));

alert("Resume Imported Successfully");

  } catch (error) {

    console.error(error);

    alert("Resume Import Failed");

  }
};

  const handleAiAssist = async () => {
  try {
    setIsGenerating(true);

    const response = await generateResume(aiPrompt);

    console.log(response);

    const ai = response.data;

    setResumeData((prev) => ({
      ...prev,

      personal: {
        ...prev.personal,
        name: ai.personal?.name || "",
        title: ai.personal?.title || "",
      },

      summary: ai.summary || "",

      aboutMe: ai.aboutMe || "",

      languages: ai.languages || "",

      skills: Array.isArray(ai.skills)
        ? ai.skills.map((skill, index) => ({
            id: Date.now() + index,
            name: skill,
          }))
        : [],

      achievements: Array.isArray(ai.achievements)
        ? ai.achievements.join("\n")
        : "",

      education: Array.isArray(ai.education)
        ? ai.education.map((edu, index) => ({
            id: Date.now() + index,
            degree: edu.degree || "",
            school: edu.school || "",
            location: edu.location || "",
            startYear: edu.startYear || "",
            endYear: edu.endYear || "",
           current: edu.current || false,

description:
edu.description || "",
          }))
        : [],

      experience: Array.isArray(ai.experience)
        ? ai.experience.map((exp, index) => ({
            id: Date.now() + index,
            title: exp.title || "",
            company: exp.company || "",
            location: exp.location || "",
            startMonth: exp.startMonth || "",
            startYear: exp.startYear || "",
            endMonth: exp.endMonth || "",
            endYear: exp.endYear || "",
            current: exp.current || false,

            technologies:
Array.isArray(exp.technologies)
? exp.technologies.join(", ")
: "",

bullets:
Array.isArray(exp.bullets)
? exp.bullets.join("\n")
: exp.bullets || ""
          }))
        : [],

      projects: Array.isArray(ai.projects)
        ? ai.projects.map((project, index) => ({
            id: Date.now() + index,

            title: project.name || "",

          techStack:
Array.isArray(project.technologies)
? project.technologies.join(", ")
: project.techStack || "",

            description: project.description || "",

            githubLink: "",

            projectMonth: "",

            projectYear: "",
          }))
        : [],
    }));

    alert("✅ Resume Generated Successfully!");

  } catch (error) {
    console.error(error);
    alert("AI request failed");
  } finally {
    setIsGenerating(false);
  }
};

  return (
    <div className="bg-[#162514] text-white shadow-lg">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="font-bold text-2xl">
          Resume Builder
        </h1>

        <div className="hidden lg:flex relative items-center">
          <span className="absolute left-4">
            ✨
          </span>

          <input
            value={aiPrompt}
            onChange={(e) =>
              setAiPrompt(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handleAiAssist()
            }
            placeholder="Start writing with AI..."
            className="bg-[#243323] w-[450px] px-10 py-3 rounded-full outline-none"
          />

          <button
            onClick={handleAiAssist}
            disabled={isGenerating}
            className="absolute right-2 bg-[#324531] p-2 rounded-full"
          >
            {isGenerating ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <FaArrowRight />
            )}
          </button>
        </div>

        <div className="flex items-center gap-5">
          <select
  value={template}
  onChange={(e) =>
    setTemplate(e.target.value)
  }
  className="bg-[#243323] text-white px-4 py-2 rounded-lg outline-none"
>
  <option value="professional">
  Professional
   </option>

  <option value="modern">
    Modern
  </option>

  <option value="classic">
    Classic
  </option>

<option value="latex">
  LaTeX
</option>

</select>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">
              Preview
            </span>

            <div
              onClick={() =>
                setIsPreview(!isPreview)
              }
              className={`w-11 h-6 rounded-full cursor-pointer flex items-center p-1 transition-all ${
                isPreview
                  ? "bg-lime-400"
                  : "bg-gray-500"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-all ${
                  isPreview
                    ? "translate-x-5"
                    : ""
                }`}
              />
            </div>
          </div>
          <button
  onClick={() => {
    localStorage.removeItem(
      "resumeData"
    );
    window.location.reload();
  }}
  className="bg-red-500 text-white px-4 py-2 rounded-full"
>
  Reset
</button>

<button
  onClick={() => {
    console.log("BUTTON CLICK");
    fileInputRef.current.click();
  }}
  className="bg-blue-500 text-white px-5 py-2 rounded-full"
>
  📄 Import Resume
</button>

<input
  ref={fileInputRef}
  hidden
  type="file"
  accept=".pdf,.doc,.docx"
  onChange={handleResumeImport}
/>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-lime-400 text-black font-bold px-6 py-2 rounded-full flex items-center gap-2 hover:bg-lime-500 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <FaDownload />
            )}
            {isDownloading
              ? "Generating..."
              : "Download CV"}
          </button>

          <label className="cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
              {resumeData.personal.photo ? (
                <img
                  src={resumeData.personal.photo}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaCamera />
              )}
            </div>

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </label>
        </div>
      </div>

      {generatedPdf && (
        <div className="bg-lime-100 text-[#162514] px-8 py-3 text-sm flex items-center justify-between gap-4">
          <span>
            PDF generated. If this browser blocks downloads, open this app in Chrome/Edge to save it.
          </span>

          <a
            href={generatedPdf.url}
            download={generatedPdf.fileName}
            className="font-bold underline whitespace-nowrap"
          >
            Download Again
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
