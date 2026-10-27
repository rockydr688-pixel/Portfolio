"use client";

import React, { useState } from "react";
import { projectsData, Project } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { PlusCircle, Terminal, HelpCircle } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Backend Architecture",
    "Systems & Algorithms",
    "Full-Stack Application"
  ];

  const filteredProjects =
    activeCategory === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative w-full py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              // 04 — SELECTED WORK & CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-md md:text-right">
            Architectural case studies and software systems built with disciplined engineering principles.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 font-mono text-xs tracking-wider transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-white text-black border-white font-medium"
                  : "bg-transparent text-neutral-400 border-transparent hover:border-neutral-700 hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}

          {/* Add / Submit Real Project Card */}
          <div className="border border-dashed border-white/20 bg-neutral-950/40 p-8 flex flex-col justify-between space-y-6 hover:border-white/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 border-b border-white/10 pb-3">
                <span className="flex items-center gap-2 text-white">
                  <PlusCircle className="w-4 h-4 text-white" />
                  <span>ADD YOUR PROJECT</span>
                </span>
                <span>DIRECT WORKFLOW</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-normal text-white">
                  Share Your Real Repositories
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  To feature your genuine software repositories, send the project details in our chat. We will inspect them and generate a comprehensive case study.
                </p>
              </div>

              {/* Required Details List */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block">
                  Information to Provide in Chat:
                </span>
                <ul className="text-xs font-mono text-neutral-300 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>Project name & GitHub repository URL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>The core problem it was built to solve</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>Tech stack, your contribution & screenshots</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3 border border-neutral-800 bg-black/60 font-mono text-[11px] text-neutral-500 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Zero-Fabrication Guarantee: No unverified metrics or fake projects will be listed.</span>
            </div>
          </div>
        </div>

        {/* Project Modal (Case Study) */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
