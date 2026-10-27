"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/projectsData";
import { X, ExternalLink, Code2, Server, CheckCircle2, AlertTriangle, Layers, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0c] border border-white/20 shadow-2xl overflow-y-auto my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c0c0c]/95 backdrop-blur border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
              {project.category} // CASE STUDY
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-1.5 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-10 font-light">
          {/* Title & Tagline */}
          <div className="space-y-3">
            <h3 id="modal-title" className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-neutral-300 font-mono text-sm leading-relaxed">
              {project.tagline}
            </p>

            {/* Links Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-mono font-medium hover:bg-neutral-200 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white text-xs font-mono hover:border-white hover:bg-white/5 transition-all"
                >
                  <span>LIVE DEMONSTRATION</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {!project.isVerified && (
                <span className="font-mono text-[11px] text-neutral-500 border border-neutral-800 px-3 py-1.5 bg-black/40">
                  Status: Ready for your repository URL
                </span>
              )}
            </div>
          </div>

          {/* Overview Section */}
          <div className="space-y-3 border-t border-white/10 pt-6">
            <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-white" />
              <span>Project Overview</span>
            </h4>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div className="p-5 border border-white/10 bg-neutral-950/60 space-y-2">
              <h5 className="font-mono text-xs text-white uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-neutral-400" />
                <span>The Engineering Problem</span>
              </h5>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 border border-white/10 bg-neutral-950/60 space-y-2">
              <h5 className="font-mono text-xs text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>The Solution & Engineering Approach</span>
              </h5>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3 border-t border-white/10 pt-6">
            <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-white" />
              <span>Key Features & Capabilities</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 p-3 border border-white/5 bg-white/[0.01] text-xs text-neutral-300 font-mono"
                >
                  <span className="text-white mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Details if provided */}
          {project.architectureDetails && (
            <div className="space-y-3 border-t border-white/10 pt-6">
              <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                <Server className="w-4 h-4 text-white" />
                <span>System Architecture & API Design</span>
              </h4>
              <p className="text-xs font-mono text-neutral-300 leading-relaxed p-4 border border-white/10 bg-neutral-950">
                {project.architectureDetails}
              </p>
            </div>
          )}

          {/* My Contribution */}
          <div className="space-y-3 border-t border-white/10 pt-6">
            <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2">
              <Code2 className="w-4 h-4 text-white" />
              <span>Individual Contribution & Scope</span>
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Challenges & Lessons Learned if provided */}
          {project.challengesAndLessons && (
            <div className="space-y-3 border-t border-white/10 pt-6">
              <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                Challenges & Lessons Learned
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {project.challengesAndLessons}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3 border-t border-white/10 pt-6">
            <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Technologies & Toolchain
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 border border-white/20 bg-white/5 font-mono text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-[#0a0a0a] border-t border-white/10 flex items-center justify-between font-mono text-xs text-neutral-500">
          <span>Press ESC or click outside to close</span>
          <button
            onClick={onClose}
            className="text-white hover:underline"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
