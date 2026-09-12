import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, FileCode, CheckCircle2 } from 'lucide-react';
import './terminal.css';

interface TerminalCardProps {
  onConnectClick?: () => void;
}

export const TerminalCard: React.FC<TerminalCardProps> = ({ onConnectClick }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'config' | 'bash'>('config');
  const [runLog, setRunLog] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const codeString = `// Initializing developer identity runtime...
export const engineer: EngineerProfile = {
  name: "Badr Eddine Nafiai",
  title: "Junior Software Engineer",
  status: "Ready for impact",
  stack: [
    "TypeScript", "React", "Node.js", "Python"
  ],
  passions: [
    "Performant UIs", "System Architecture", "Open Source"
  ],
  currentFocus: "Full-Stack Reliability & Cloud Native",
  isOpenToOffers: true,
  sayHello: () => connect("badr@engineer.dev")
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunConfig = () => {
    setActiveTab('bash');
    setIsRunning(true);
    setRunLog([
      '$ ts-node badr_eddine.config.ts --verify',
      '✔ Loading developer environment dependencies...',
      '✔ Type-checking 0 errors found across 14 modules.',
      '🚀 engineer.sayHello() triggered -> opening dispatch portal...'
    ]);
    setTimeout(() => {
      setIsRunning(false);
      if (onConnectClick) {
        onConnectClick();
      }
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col">
      <div
        id="terminal-card"
        className="w-full bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 terminal-window"
      >
        {/* Window Topbar */}
        <div className="bg-surface-container-high px-4 py-2.5 flex items-center justify-between border-b border-outline-variant/20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
          </div>

          {/* Tab selector */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('config')}
              className={`flex items-center gap-1.5 font-mono text-[12px] px-2 py-0.5 rounded transition-colors ${
                activeTab === 'config'
                  ? 'bg-surface-container text-on-surface'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-primary" />
              <span>badr_eddine.config.ts</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('bash')}
              className={`flex items-center gap-1.5 font-mono text-[12px] px-2 py-0.5 rounded transition-colors ${
                activeTab === 'bash'
                  ? 'bg-surface-container text-on-surface'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-secondary" />
              <span>bash</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
              title="Copy code"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
            <span className="font-mono text-[10px] text-outline">UTF-8</span>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'config' ? (
          <div className="p-4 font-mono text-[13px] leading-relaxed overflow-x-auto select-none bg-surface-container-low/60 text-on-surface-variant">
            <div className="code-comment mb-2">// Initializing developer identity runtime...</div>
            <div>
              <span className="code-keyword">export const</span>{' '}
              <span className="code-variable">engineer</span>:{' '}
              <span className="code-type">EngineerProfile</span> = {'{'}
            </div>
            <div className="pl-4">
              name: <span className="code-string">"Badr Eddine Nafiai"</span>,
            </div>
            <div className="pl-4">
              title: <span className="code-string">"Junior Software Engineer"</span>,
            </div>
            <div className="pl-4">
              status: <span className="text-primary">"Ready for impact"</span>,
            </div>
            <div className="pl-4">stack: [</div>
            <div className="pl-8 text-on-surface">
              "TypeScript", "React", "Node.js", "Python"
            </div>
            <div className="pl-4">],</div>
            <div className="pl-4">passions: [</div>
            <div className="pl-8 text-on-surface-variant">
              "Performant UIs", "System Architecture", "Open Source"
            </div>
            <div className="pl-4">],</div>
            <div className="pl-4">
              currentFocus:{' '}
              <span className="code-string">"Full-Stack Reliability & DevOps"</span>,
            </div>
            <div className="pl-4">
              isOpenToOffers: <span className="code-boolean">true</span>,
            </div>
            <div className="pl-4 flex items-center flex-wrap gap-1">
              sayHello: () =&gt;{' '}
              <button
                type="button"
                onClick={onConnectClick}
                className="text-primary-container hover:underline cursor-pointer font-semibold bg-primary-container/10 px-1 rounded"
              >
                connect
              </button>
              (<span className="code-string">"badr@engineer.dev"</span>)
            </div>
            <div>{'};'}</div>

            {/* Bottom status line */}
            <div className="mt-4 pt-2 bg-surface-container px-3 py-1.5 rounded flex items-center justify-between text-[11px] text-tertiary">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span>Ready to build</span>
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleRunConfig}
                  className="flex items-center gap-1 text-primary hover:text-on-surface transition-colors cursor-pointer"
                >
                  <Play className="w-3 h-3" />
                  <span>Run sayHello()</span>
                </button>
                <span className="font-mono text-outline">0 errors • 0 warnings</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 font-mono text-[12px] leading-relaxed bg-[#0a0e1a] text-slate-200 min-h-[260px] flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="text-slate-400"># Interactive developer CLI session</div>
              <div className="text-secondary">$ node -v &amp;&amp; npm run status</div>
              <div className="text-emerald-400">Node.js v22.14.0 (Active LTS) | TypeScript 5.8</div>
              <div className="text-slate-300">Targeting Junior Software Engineer opportunities.</div>
              {runLog.map((line, i) => (
                <div key={i} className="text-primary-container font-mono">
                  {line}
                </div>
              ))}
              {isRunning && (
                <div className="text-amber-400 animate-pulse">Running test sequence...</div>
              )}
            </div>

            <div className="mt-4 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Runtime healthy &amp; connected</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('config')}
                className="text-xs text-primary hover:underline"
              >
                Back to code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
