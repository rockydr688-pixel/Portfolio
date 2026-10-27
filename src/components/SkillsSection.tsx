"use client";

import React, { useState } from "react";
import { portfolioData, SkillGroup } from "@/data/portfolioData";
import { Code2, Server, Database, Wrench, Binary, Layers } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code2 className="w-4 h-4 text-white" />;
      case "Computer Science Fundamentals":
        return <Binary className="w-4 h-4 text-white" />;
      case "Backend Development":
        return <Server className="w-4 h-4 text-white" />;
      case "Databases & Storage":
        return <Database className="w-4 h-4 text-white" />;
      case "Developer Tools":
        return <Wrench className="w-4 h-4 text-white" />;
      default:
        return <Layers className="w-4 h-4 text-white" />;
    }
  };

  const categories = ["ALL", ...skills.map((s) => s.category)];

  const filteredGroups =
    activeCategory === "ALL"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative w-full py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              // 02 — TECHNICAL FOUNDATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              Technical Skills
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-md md:text-right">
            Systematic organization of verified engineering proficiencies. Quantitative ratings omitted in favor of concrete scope.
          </p>
        </div>

        {/* Filter Tabs */}
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

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group: SkillGroup) => (
            <div
              key={group.category}
              className="border border-white/10 bg-neutral-950/70 p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Group Heading */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(group.category)}
                    <h3 className="font-mono text-sm text-white font-medium tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500">
                    {group.skills.length} ITEMS
                  </span>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Items */}
                <div className="space-y-3 pt-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs text-white font-medium">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="font-mono text-[10px] px-1.5 py-0.5 border border-white/20 text-neutral-300 uppercase tracking-wider">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-neutral-400 font-light leading-normal">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-600">
                <span>VERIFIED SKILL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Data Architecture Note */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-neutral-800 bg-black/60 font-mono text-xs text-neutral-400 gap-3">
          <div>
            <span className="text-white">Easy Skill Management:</span> All skills and descriptions can be added or edited in <code className="text-neutral-300">src/data/portfolioData.ts</code>.
          </div>
          <span className="text-[11px] text-neutral-500 whitespace-nowrap">
            Zero Fake Percentages
          </span>
        </div>
      </div>
    </section>
  );
}
