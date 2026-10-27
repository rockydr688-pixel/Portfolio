"use client";

import React, { useEffect } from "react";
import { X, FileText, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

export function ResumeModal({
  isOpen,
  onClose,
  pdfUrl = "/resume.pdf"
}: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] bg-[#0c0c0c] border border-white/20 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0a0a0a] border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2.5 text-white">
            <FileText className="w-4 h-4 text-white" />
            <span className="font-medium tracking-wider">RAKESH D.R // CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 border border-white/15 hover:border-white text-neutral-300 hover:text-white transition-colors text-[11px]"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="relative flex-1 w-full bg-[#141414] overflow-hidden">
          <iframe
            src={`${pdfUrl}#view=FitH&toolbar=0`}
            title="Rakesh D.R Resume"
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom Helper Bar */}
        <div className="px-5 py-2.5 bg-[#080808] border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-neutral-500">
          <span>Viewing verified curriculum vitae directly within website</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
