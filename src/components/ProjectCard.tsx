"use client";

import React, { useRef, useState } from "react";
import { Project } from "@/data/projectsData";
import { ArrowUpRight, Code, Server, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle restrained tilt angles (max +/- 6 degrees)
    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;

    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered
          ? "transform 0.1s ease-out, border-color 0.3s ease"
          : "transform 0.5s ease-out, border-color 0.3s ease"
      }}
      className="group relative border border-white/10 bg-neutral-950/70 overflow-hidden flex flex-col justify-between hover:border-white/30 hover:shadow-2xl"
    >
      {/* Top Banner / Technical Coordinate Label */}
      <div className="p-5 border-b border-white/10 flex items-center justify-between font-mono text-[11px] text-neutral-500">
        <span className="uppercase tracking-widest text-white/80 flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-neutral-400" />
          {project.category}
        </span>
        <span className="border border-white/10 px-2 py-0.5 text-[10px]">
          {project.isVerified ? "VERIFIED REPO" : "EDITABLE TEMPLATE"}
        </span>
      </div>

      {/* Middle Card Visual & Content */}
      <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col">
        {/* Project Title & Tagline */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-light text-white group-hover:text-neutral-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Visual Architectural Schema / Preview Box */}
        <div className="relative w-full aspect-[16/8] bg-black border border-white/10 overflow-hidden my-2 flex flex-col items-center justify-center p-4">
          {/* Subtle Monochrome Blueprint Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          
          <div className="relative z-10 text-center space-y-2 max-w-sm">
            <div className="w-10 h-10 mx-auto rounded-full border border-white/20 flex items-center justify-center text-white/70">
              {project.category.includes("Backend") ? (
                <Server className="w-5 h-5" />
              ) : (
                <Code className="w-5 h-5" />
              )}
            </div>
            <p className="text-xs font-mono text-neutral-300">
              {project.title}
            </p>
            <span className="text-[10px] font-mono text-neutral-500 block">
              Architectural Schema & Specification
            </span>
          </div>

          {/* Hover Overlay Prompt */}
          <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="px-4 py-2 bg-white text-black text-xs font-mono font-medium tracking-wider flex items-center gap-1.5 shadow-lg"
            >
              <span>EXPLORE CASE STUDY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Problem Statement Excerpt */}
        <div className="space-y-1.5 flex-1">
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block">
            Core Engineering Problem
          </span>
          <p className="text-xs text-neutral-300 font-light line-clamp-2">
            {project.problem}
          </p>
        </div>

        {/* Technologies Badge List */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 border border-white/10 bg-white/[0.02] font-mono text-[10px] text-neutral-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 border border-transparent font-mono text-[10px] text-neutral-500">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Bar with Actions */}
      <div className="p-4 sm:p-5 border-t border-white/10 bg-black/40 flex items-center justify-between font-mono text-xs">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="text-white hover:underline flex items-center gap-1 font-medium"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Demo`}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
