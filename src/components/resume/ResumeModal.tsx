import React from 'react';
import { developerProfile, degreesData, experienceData, certificationsData } from '../../data/portfolioData';
import { X, Download, Printer, CheckCircle2 } from 'lucide-react';
import './resume.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const resumeText = `BADR EDDINE NAFIAI - JUNIOR SOFTWARE ENGINEER
Email: ${developerProfile.email} | Location: ${developerProfile.location}
Website: https://badr.engineer.dev

SUMMARY:
${developerProfile.mission}

EDUCATION:
${degreesData.map((d) => `${d.degree} - ${d.institution} (${d.period}) [${d.honors}]`).join('\n')}

EXPERIENCE:
${experienceData.map((e) => `${e.role} at ${e.company} (${e.period})\n${e.highlights.map((h) => `• ${h}`).join('\n')}`).join('\n\n')}

CERTIFICATIONS:
${certificationsData.map((c) => `${c.name} - ${c.issuer} (${c.issueDate})`).join('\n')}
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Badr_Eddine_Nafiai_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

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
            <button
              type="button"
              onClick={handleDownload}
              className="p-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>
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
          <div className="resume-paper rounded-xl p-6 sm:p-10 shadow-lg font-body text-slate-800 flex flex-col gap-6">
            {/* Header Lockup */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-200 gap-4">
              <div>
                <h1 className="font-headline text-3xl font-bold text-slate-900 tracking-tight">
                  Badr Eddine Nafiai
                </h1>
                <p className="font-headline text-lg font-semibold text-indigo-600 mt-0.5">
                  Junior Software Engineer
                </p>
                <p className="font-body text-sm text-slate-500 mt-1">
                  {developerProfile.location} • Open to on-site, hybrid, or remote positions
                </p>
              </div>

              <div className="text-right sm:border-l sm:border-slate-200 sm:pl-6 text-sm text-slate-600 font-mono space-y-1">
                <div>{developerProfile.email}</div>
                <div>{developerProfile.github}</div>
                <div>{developerProfile.linkedin}</div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="font-headline text-sm uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Executive Profile
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {developerProfile.mission} Rigorous focus on TypeScript, modern React architectures, robust Node.js microservices, and maintainable software patterns.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="font-headline text-sm uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-3">
                Education
              </h2>
              {degreesData.map((d) => (
                <div key={d.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{d.degree}</span>
                    <span className="text-xs font-mono text-slate-500">{d.period}</span>
                  </div>
                  <div className="flex justify-between text-xs text-indigo-700 font-medium">
                    <span>{d.institution} — {d.field}</span>
                    <span>{d.honors} (GPA: {d.gpa})</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Specialized coursework: {d.keyCourses.join(', ')}.
                  </p>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-headline text-sm uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-3">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {experienceData.map((e) => (
                  <div key={e.id} className="space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900">{e.role}</span>
                      <span className="text-xs font-mono text-slate-500">{e.period}</span>
                    </div>
                    <div className="text-xs text-indigo-700 font-medium">
                      {e.company} • {e.location} ({e.type})
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                      {e.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="font-headline text-sm uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Recognized Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {certificationsData.map((c) => (
                  <div key={c.id} className="bg-slate-50 p-2.5 rounded border border-slate-200">
                    <div className="font-bold text-slate-900">{c.name}</div>
                    <div className="text-indigo-600">{c.issuer} — {c.issueDate}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-headline text-sm uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Technical Toolkit
              </h2>
              <div className="text-xs text-slate-700 space-y-1">
                <div><strong>Languages:</strong> TypeScript, JavaScript (ES6+), Python, SQL, HTML5/CSS3</div>
                <div><strong>Frameworks:</strong> React, Next.js, Node.js, Express, Tailwind CSS, Vite</div>
                <div><strong>Infrastructure:</strong> Docker, Git, Redis, PostgreSQL, Linux, CI/CD Actions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
