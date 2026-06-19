# Resume Builder

A modern Resume Builder built with React, Vite, Tailwind CSS, html2canvas, and jsPDF.

## Features

### Resume Creation

* Personal Information
* Profile Photo Upload
* Professional Summary
* About Me Section
* Education Details
* Work Experience
* Projects
* Skills
* Languages
* Achievements

### Multiple Templates

* Professional Template
* Modern Template
* Classic Template
* Minimal Template

### Professional Template Highlights

* Two-column professional resume layout
* Profile photo support
* Clickable links for:

  * GitHub
  * LinkedIn
  * Portfolio
  * LeetCode
  * Codeforces
  * Project Repository Links
* Education and Experience timelines
* Project date support
* ATS-friendly structure

### PDF Export

* One-click PDF download
* High-quality export using html2canvas and jsPDF
* Resume preview before download

### Local Storage

* Auto-save resume data
* Data persists after page refresh
* Reset option available

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Libraries

* React Icons
* html2canvas
* jsPDF

## Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ ├── ResumeEditor.jsx
│ ├── ResumePreview.jsx
│ ├── ATSPanel.jsx
│ └── templates/
│ ├── ProfessionalTemplate.jsx
│ ├── ModernTemplate.jsx
│ ├── ClassicTemplate.jsx
│ └── MinimalTemplate.jsx
├── App.jsx
└── main.jsx

## Installation

```bash
git clone https://github.com/SunnySingh28/resume-builder.git
cd resume-builder
npm install
npm run dev
```

## Future Improvements

* Dark Mode
* AI Resume Generation
* Multi-page PDF Support
* Custom Theme Colors
* Drag & Drop Sections
* Resume Sharing via Link

## Author

Rajiv Ranjan
