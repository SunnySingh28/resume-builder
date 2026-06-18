# Resume Builder with ATS Score

A modern Resume Builder built using React, Vite, and Tailwind CSS. Create professional resumes, preview them in real-time, download as PDF, and improve them using an integrated ATS (Applicant Tracking System) scoring system.

## Features

### Resume Builder

* Personal Information Section
* Professional Summary
* Experience Section

  * Start Month & Year
  * End Month & Year
  * Present Checkbox
* Education Section

  * Start Year
  * End Year
  * Present Checkbox
* Skills Management

  * Add Skills
  * Delete Skills
* Achievements & Awards

### Resume Preview

* Real-time Resume Preview
* Professional Resume Layout
* Responsive Design
* PDF Download Support

### ATS Score Analyzer

* ATS Score Calculation
* Resume Strength Detection
* ATS Suggestions
* Quantified Achievement Detection

  * Examples: 40%, 500+, 10 Projects
* Action Verb Detection

  * Developed
  * Built
  * Implemented
  * Designed
  * Optimized
  * Managed
  * Engineered

### Data Persistence

* Auto Save using Local Storage
* Data remains available after page refresh

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Libraries

* React Icons
* jsPDF
* html2canvas
* react-to-print

## Installation

Clone the repository:

```bash
git clone https://github.com/SunnySingh28/resume-builder.git
```

Navigate to project directory:

```bash
cd resume-builder
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ResumeEditor.jsx
│   ├── ResumePreview.jsx
│   └── ATSPanel.jsx
├── App.jsx
└── main.jsx
```

## Future Improvements

* Multiple Resume Templates
* ATS Keyword Matching
* AI Resume Summary Generator
* Resume Import
* Drag & Drop Sections
* Dark Mode
* Direct PDF Export

## Author

Rajiv Ranjan

