import React, { useState } from 'react';
import { certificationsData, degreesData, images } from '../../../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle, ExternalLink, Calendar, MapPin } from 'lucide-react';
import './educational.css';

export const EducationalScreen: React.FC = () => {
  const [activeCertModal, setActiveCertModal] = useState<string | null>(null);

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-10 flex flex-col gap-14">
      {/* 1. Header with hero showcase */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-mono text-[11px] text-secondary uppercase tracking-widest">
            <span>Academic Excellence &amp; Certifications</span>
            <span className="w-10 h-px bg-secondary inline-block"></span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-bold text-on-surface leading-tight">
            Foundational Computer Science, Algorithms &amp; Continuous Learning
          </h1>

          <p className="font-body text-[16px] leading-[28px] text-on-surface-variant max-w-2xl">
            A strong foundation in computer science mathematics, algorithms, database internals, and software architecture paired with continuous credential validation from industry leaders.
          </p>
        </div>

        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-outline-variant/20">
            <img
              src={images.educationalCard}
              alt="Algorithms and computer science network geometry"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-surface-container/90 backdrop-blur-md rounded-xl border border-outline-variant/20">
              <div className="flex items-center gap-2 text-secondary font-headline font-semibold text-sm">
                <GraduationCap className="w-4 h-4" />
                <span>CS Degree &amp; Certifications</span>
              </div>
              <p className="font-mono text-[11px] text-on-surface-variant mt-0.5">
                B.S. in Computer Science (Summa Cum Laude)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Formal Academic Degrees */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[11px] text-primary uppercase tracking-wider">
            Higher Education
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-on-surface">
            University Degrees
          </h2>
        </div>

        <div className="space-y-6">
          {degreesData.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/20 flex flex-col gap-5 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-primary-container text-on-primary font-semibold">
                      {item.honors}
                    </span>
                    <span className="font-mono text-[11px] text-secondary font-medium">
                      GPA: {item.gpa}
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mt-1">
                    {item.degree}
                  </h3>
                  <p className="font-body text-[15px] text-primary font-medium">
                    {item.field}
                  </p>
                  <p className="font-body text-[14px] text-on-surface-variant">
                    {item.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 font-mono text-xs text-outline shrink-0">
                  <span className="flex items-center gap-1.5 bg-surface-container-high px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-surface-container-high px-3 py-1 rounded-full">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              <p className="font-body text-[15px] leading-relaxed text-on-surface-variant">
                {item.description}
              </p>

              {/* Key Courses */}
              <div className="pt-4 border-t border-outline-variant/15 flex flex-col gap-3">
                <div className="flex items-center gap-2 font-mono text-xs text-outline uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  <span>Key Coursework &amp; Specializations</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {item.keyCourses.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-surface-container-high/60 px-3 py-2 rounded-lg text-[13px] text-on-surface-variant border border-outline-variant/10"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Industry Certifications Grid */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[11px] text-secondary uppercase tracking-wider">
            Verified Credentials
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-on-surface">
            Industry Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-surface-container p-6 rounded-2xl border border-outline-variant/20 flex flex-col justify-between gap-5 cert-card"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-low text-outline">
                    {cert.issueDate}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-headline text-[18px] font-semibold text-on-surface leading-snug">
                    {cert.name}
                  </h3>
                  <p className="font-body text-[14px] text-secondary font-medium">
                    {cert.issuer}
                  </p>
                </div>

                <div className="font-mono text-[11px] text-outline">
                  Credential ID: <span className="text-on-surface-variant">{cert.credentialId}</span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-tertiary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-outline-variant/15 flex items-center justify-between">
                <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-primary hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
