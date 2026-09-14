import React from 'react';
import { developerProfile, degreesData, experienceData, certificationsData } from '../../data/portfolioData';
import { X, Download, Printer, CheckCircle2 } from 'lucide-react';
import './resume.css';
import html2pdf from 'html2pdf.js';
// import resume from './resume.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.open('./src/components/resume/resume.pdf', '_blank')?.print();
  };

//   const handleDownload = () => {
//     const resumeText = `BADR EDDINE NAFIAI - JUNIOR SOFTWARE ENGINEER
// Email: ${developerProfile.email} | Location: ${developerProfile.location}
// Website: https://badr.engineer.dev

// SUMMARY:
// ${developerProfile.mission}

// EDUCATION:
// ${degreesData.map((d) => `${d.degree} - ${d.institution} (${d.period}) [${d.honors}]`).join('\n')}

// EXPERIENCE:
// ${experienceData.map((e) => `${e.role} at ${e.company} (${e.period})\n${e.highlights.map((h) => `• ${h}`).join('\n')}`).join('\n\n')}

// CERTIFICATIONS:
// ${certificationsData.map((c) => `${c.name} - ${c.issuer} (${c.issueDate})`).join('\n')}
// `;
//     const options = {
//       margin: 0,
//       filename: 'Badr_Eddine_Nafiai_Resume.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//     };
//     html2pdf().set(options).from(resumeText).save().catch((error) => {
//       console.error('Error generating PDF:', error);
//     });
//   };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 resume-modal-overlay"
      onClick={onClose}
    >
      <div
        className="bg-surface-container rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-outline-variant/30 text-on-surface shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Actions Bar */}
        <div className="p-4 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-high">
          <div className="flex items-center gap-2">
            <span className="font-headline text-base font-semibold">
              Curriculum Vitae • Badr Eddine Nafiai
            </span>
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container text-secondary">
              Updated 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 rounded-lg bg-surface-container hover:bg-surface-bright text-xs font-mono text-on-surface flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <a href="./src/components/resume/resume.pdf" download="resume.pdf"
                className="p-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Download text file"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>

            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paper Document Preview */}
        <div className="p-6 sm:p-10 overflow-y-auto">
  <div id="resume-paper" className="resume-paper rounded-xl p-6 sm:p-10 shadow-lg font-body text-slate-800 flex flex-col gap-6">
    {/* Header Lockup */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-200 gap-4">
      <div>
        <h1 className="font-headline text-3xl font-bold text-slate-900 tracking-tight">
          Badr Eddine Nafiai
        </h1>
        <p className="font-headline text-lg font-semibold text-indigo-600 mt-0.5">
          Software Engineering Intern
        </p>
        <p className="font-body text-sm text-slate-500 mt-1">
          El Jadida, Morocco • Available for a 4-6 month internship
        </p>
      </div>

      <div className="text-right sm:border-l sm:border-slate-200 sm:pl-6 text-sm text-slate-600 font-mono space-y-1">
        <div>{developerProfile.email}</div>
        <div>{developerProfile.phone}</div>
        <div>{developerProfile.github}</div>
      </div>
    </div>

    {/* Profile Summary */}
    <div>
      <h2 className="font-headline text-sm uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">
        Executive Profile
      </h2>
      <p className="text-sm text-slate-700 leading-relaxed">
        Software engineering student at 1337 (42 Network, UM6P), with hands-on experience in C/C++ systems programming, backend development, and Docker-based infrastructure through team projects. Ready to contribute to a technical team and keep building on skills from a project-based, peer-learning curriculum.
      </p>
    </div>

    {/* Education */}
    <div>
      <h2 className="font-headline text-sm uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-3">
        Education
      </h2>
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-slate-900">1337 (42 Network School)</span>
            <span className="text-xs font-mono text-slate-500">2024 - 2026 (Ongoing)</span>
          </div>
          <div className="flex justify-between text-xs text-indigo-700 font-medium">
            <span>UM6P, Benguerir — Intensive project-based programming curriculum</span>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Peer-learning, C/C++, algorithms, systems architecture.
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-slate-900">Professional Bachelor's Degree in Computer Engineering & Emerging Technologies</span>
            <span className="text-xs font-mono text-slate-500">2023 - 2024</span>
          </div>
          <div className="flex justify-between text-xs text-indigo-700 font-medium">
            <span>ENSA El Jadida (Chouaib Doukkali University)</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-slate-900">Specialized Technician in Digital Development</span>
            <span className="text-xs font-mono text-slate-500">2021 - 2023</span>
          </div>
          <div className="flex justify-between text-xs text-indigo-700 font-medium">
            <span>Institut Spécialisé de Technologie Appliquée (ISTA), Cité de l'Air, El Jadida</span>
          </div>
        </div>
      </div>
    </div>

    {/* Academic / Key Projects */}
    <div>
      <h2 className="font-headline text-sm uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-3">
        Featured Projects
      </h2>
      <div className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-slate-900">Webserver (C++)</span>
            <span className="text-xs font-mono text-slate-500">42/1337 Project (Team of 2)</span>
          </div>
          <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
            <li>Built an HTTP server in C++ with a teammate (who handled configuration file parsing).</li>
            <li>Implemented socket setup and I/O multiplexing to support multiple concurrent client connections without blocking.</li>
          </ul>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-slate-900">Inception</span>
            <span className="text-xs font-mono text-slate-500">42/1337 Project (Solo)</span>
          </div>
          <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
            <li>Designed a containerized infrastructure using Docker and Docker Compose.</li>
            <li>Configured Nginx, MariaDB, and WordPress services communicating over an isolated Docker network.</li>
          </ul>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-slate-900">ft_transcendence</span>
            <span className="text-xs font-mono text-slate-500">42/1337 Project (Team of 4)</span>
          </div>
          <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
            <li>Worked as one of two backend developers on a real-time coding challenge platform.</li>
            <li>Developed authentication, REST APIs, WebSockets, Redis caching, and database schema design using Nest.JS.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Skills */}
    <div>
      <h2 className="font-headline text-sm uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">
        Technical Toolkit
      </h2>
      <div className="text-xs text-slate-700 space-y-1">
        <div><strong>Languages:</strong> C, C++, JavaScript/TypeScript, SQL, Python</div>
        <div><strong>Backend & Frameworks:</strong> Node.js, Nest.JS, WebSockets, REST APIs, React.js</div>
        <div><strong>Databases:</strong> MySQL, PostgreSQL, Redis</div>
        <div><strong>Systems & Infrastructure:</strong> UNIX/Linux, Sockets, I/O multiplexing, Bash, Docker, Docker Compose, Git/GitHub</div>
        <div><strong>Practices:</strong> Peer programming, algorithmic problem-solving, project-based learning</div>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  );
};
