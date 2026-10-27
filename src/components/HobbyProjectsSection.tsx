"use client";

import React from "react";
import { creativeData } from "@/data/creativeData";
import { Sparkles, Terminal, ArrowUpRight, FlaskConical } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export function HobbyProjectsSection() {
  const { hobbyProjects } = creativeData;

  return (
    <section
      id="experiments"
      className="relative w-full py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              // 06 — EXPLORATIONS & EXPERIMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              Hobby & Creative Code
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-md md:text-right">
            Independent sandboxes, CLI prototypes, and experimental graphics outside production software scope.
          </p>
        </div>

        {/* Hobby Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbyProjects.map((project) => (
            <div
              key={project.id}
              className="border border-white/10 bg-neutral-950/70 p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 space-y-6"
            >
              <div className="space-y-4">
                {/* Status & Category Bar */}
                <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-3">
                  <span className="flex items-center gap-2 text-white">
                    <FlaskConical className="w-4 h-4 text-neutral-400" />
                    <span>{project.category}</span>
                  </span>
                  <span className="px-2 py-0.5 border border-white/20 text-[10px] text-neutral-300 uppercase">
                    {project.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-light text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-mono leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 border border-white/10 bg-white/[0.02] font-mono text-[10px] text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:underline"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Experiment</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-neutral-500 text-[11px]">
                    Internal Exploration
                  </span>
                )}

                <span className="text-[10px] text-neutral-500">
                  Hobby Project
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Data Architecture Note */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-neutral-800 bg-black/60 font-mono text-xs text-neutral-400 gap-3">
          <div>
            <span className="text-white">Add Hobby Work:</span> Send your scripts, creative shaders, or CLI repos in chat, or edit <code className="text-neutral-300">src/data/creativeData.ts</code>.
          </div>
          <span className="text-[11px] text-neutral-500 whitespace-nowrap">
            Clearly Separated from Production
          </span>
        </div>
      </div>
    </section>
  );
}
