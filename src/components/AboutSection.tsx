"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, BookOpen, Layers, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              // 01 — IDENTITY & APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              About Me
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm md:text-right">
            Engineering student in Information Science focused on core systems, algorithms, and backend mechanics.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Core Engineering Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-white/10 bg-neutral-950/60 p-6 md:p-8 space-y-6">
              <div className="font-mono text-xs tracking-wider text-neutral-400 border-b border-white/10 pb-3 flex items-center justify-between">
                <span>ENGINEERING FOUNDATION</span>
                <span className="text-white">STATUS // UNDERGRAD</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-white mt-1 shrink-0" />
                  <div>
                    <h3 className="text-sm font-mono text-white font-medium">Academic Program</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Information Science and Engineering undergraduate curriculum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-white mt-1 shrink-0" />
                  <div>
                    <h3 className="text-sm font-mono text-white font-medium">Algorithmic Base</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Deterministic programming with C, C++, and Java emphasizing Data Structures & Algorithms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="w-4 h-4 text-white mt-1 shrink-0" />
                  <div>
                    <h3 className="text-sm font-mono text-white font-medium">Backend Engineering</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Developing structured APIs and enterprise backend services with Java and Spring Boot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Principles */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
                  Guiding Principles
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Memory & runtime efficiency first</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Type safety and clean encapsulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Maintainable, testable system design</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Editable Content Note */}
            <div className="p-4 border border-dashed border-white/10 bg-black/40 text-[11px] font-mono text-neutral-500">
              <span className="text-neutral-400">Direct Edit Tip:</span> To customize this section or add personal notes, edit the bio array inside <code className="text-neutral-300">src/data/portfolioData.ts</code>.
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 font-light text-base md:text-lg leading-relaxed">
            <h3 className="text-2xl sm:text-3xl text-white font-normal leading-snug">
              Approaching software construction from mathematical logic, foundational principles, and systems discipline.
            </h3>

            {personal.aboutBio.map((paragraph, index) => {
              const isEditableSlot = paragraph.startsWith("/* EDITABLE");
              if (isEditableSlot) {
                return (
                  <div
                    key={index}
                    className="p-4 border border-neutral-800 bg-neutral-950/80 font-mono text-xs text-neutral-400 rounded-sm my-4"
                  >
                    <span className="text-white block font-semibold mb-1">
                      // OPTIONAL SECTION (Awaiting your input)
                    </span>
                    Add details such as your current academic semester, specific projects you are working on, or career interests in <span className="text-white">src/data/portfolioData.ts</span>.
                  </div>
                );
              }
              return (
                <p key={index} className="text-neutral-300">
                  {paragraph}
                </p>
              );
            })}

            {/* At A Glance Grid */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="block font-mono text-xs text-neutral-500 uppercase tracking-wider">
                  Degree
                </span>
                <span className="block text-sm font-mono text-white mt-1">
                  B.E. Information Science
                </span>
              </div>
              <div>
                <span className="block font-mono text-xs text-neutral-500 uppercase tracking-wider">
                  Languages
                </span>
                <span className="block text-sm font-mono text-white mt-1">
                  C, C++, Java
                </span>
              </div>
              <div>
                <span className="block font-mono text-xs text-neutral-500 uppercase tracking-wider">
                  Backend
                </span>
                <span className="block text-sm font-mono text-white mt-1">
                  Spring Boot & SQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
