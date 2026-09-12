import React, { useState } from 'react';
import { developerProfile } from '../../data/portfolioData';
import { X, Mail, Send, Copy, Check, Terminal, Share2, CheckCircle2 } from 'lucide-react';
import './contact.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'Full-time Junior Software Engineer',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      opportunityType: 'Full-time Junior Software Engineer',
      message: '',
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 contact-modal-overlay"
      onClick={onClose}
    >
      <div
        className="bg-surface-container rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto contact-modal-box border border-outline-variant/30 text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-headline text-xl font-bold text-on-surface">
                Get in Touch with Badr
              </h2>
              <p className="font-mono text-xs text-secondary">
                ● Open for roles &amp; technical interviews
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Email Direct Copy Box */}
        <div className="p-6 pb-2">
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-outline uppercase tracking-wider">
                Direct Engineering Email
              </span>
              <span className="font-mono text-sm text-on-surface font-semibold">
                {developerProfile.email}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-xs font-mono text-on-surface transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Body Form or Success */}
        <div className="p-6 pt-2">
          {isSubmitted ? (
            <div className="py-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">
                Message Dispatched!
              </h3>
              <p className="font-body text-sm text-on-surface-variant max-w-md">
                Thank you for reaching out, {formData.name || 'recruiter'}. I monitor incoming messages daily and will reply within 24 hours.
              </p>
              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-surface-container-high text-xs font-mono text-on-surface hover:bg-surface-bright"
                >
                  Send another message
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-primary-container text-xs font-mono text-on-primary font-semibold hover:bg-primary"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-on-surface-variant">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alexandre Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-body text-sm focus:outline-none focus:border-primary-container"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-on-surface-variant">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-body text-sm focus:outline-none focus:border-primary-container"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-on-surface-variant">
                  Opportunity or Inquiry Type
                </label>
                <select
                  value={formData.opportunityType}
                  onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-body text-sm focus:outline-none focus:border-primary-container"
                >
                  <option value="Full-time Junior Software Engineer">Full-time Junior Software Engineer</option>
                  <option value="Software Engineering Internship">Software Engineering Internship</option>
                  <option value="Graduate Program / Apprenticeship">Graduate Program / Apprenticeship</option>
                  <option value="Freelance / Contract Project">Freelance / Contract Project</option>
                  <option value="Coffee Chat / Mentorship">Coffee Chat / Networking</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-on-surface-variant">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hello Badr, we reviewed your work and would love to discuss an engineering role on our team..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-body text-sm focus:outline-none focus:border-primary-container resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <Terminal className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-headline text-sm font-semibold transition-colors cursor-pointer active:scale-95 shadow-md"
                >
                  <span>Transmit Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
