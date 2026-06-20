import { FaArrowRight, FaDownload, FaCamera, FaSpinner } from "react-icons/fa";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

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
  const handleAiAssist = () => {
    if (!aiPrompt.trim()) return;

    setIsGenerating(true);

    setTimeout(() => {
      setResumeData({
        ...resumeData,

        personal: {
          ...resumeData.personal,
          name: "Alex Developer",
          title: "Full Stack Engineer",
          email: "alex@example.com",
          phone: "+91 9876543210",
          linkedin: "https://linkedin.com/in/alex",
          github: "https://github.com/alex",
          portfolio: "https://alex.dev",
        },

        summary:
          "Passionate Software Engineer with 4+ years of experience building scalable web applications and APIs.",

        education: [
          {
            id: 1,
            degree: "B.Tech Computer Science",
            school: "IIITM Gwalior",
            year: "2022 - 2026",
            achievements: "CGPA 8.5/10",
          },
        ],

        experience: [
          {
            id: 1,
            title: "Software Engineer",
            company: "Tech Solutions Inc.",
            location: "Bangalore, India",
            date: "2024 - Present",
            bullets:
              "Developed scalable REST APIs\nImproved performance by 40%\nWorked with React and Node.js",
          },
        ],

        skills: {
          industry:
            "Software Engineering, System Design, Web Development",
          tools:
            "React, Node.js, Express, MongoDB, MySQL, Git, Docker",
        },

        achievements:
          "Solved 500+ DSA problems\nBuilt 10+ full-stack projects",
      });

      setAiPrompt("");
      setIsGenerating(false);
    }, 1200);
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

  <option value="minimal">
    Minimal
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
