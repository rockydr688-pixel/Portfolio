"use client";

import React, { useState } from "react";
import { portfolioData, AchievementItem } from "@/data/portfolioData";
import {
  GraduationCap,
  Award,
  FileCheck,
  Trophy,
  Flame,
  PlusCircle,
  ExternalLink,
  BookMarked
} from "lucide-react";

export function EducationAchievementsSection() {
  const { personal, achievements } = portfolioData;
  const [activeTab, setActiveTab] = useState<
    "academic" | "certifications" | "hackathons" | "technical"
  >("academic");

  const getItemsForTab = (): { items: AchievementItem[]; label: string; emptyHint: string } => {
    switch (activeTab) {
      case "academic":
        return {
          items: achievements.academic,
          label: "Academic Achievements & Honors",
          emptyHint: "Share any academic ranks, dean's list recognitions, or semester top marks in chat to populate this area."
        };
      case "certifications":
        return {
          items: achievements.certifications,
          label: "Professional & Technical Certifications",
          emptyHint: "Upload certificate PDFs or credentials (e.g., HackerRank, Oracle, Coursera, AWS, etc.) in chat to record them here."
        };
      case "hackathons":
        return {
          items: achievements.hackathons,
          label: "Hackathons & Competitive Engineering",
          emptyHint: "Provide names of hackathons, code jams, or technical competitions you've participated in or won."
        };
      case "technical":
        return {
          items: achievements.technicalAccomplishments,
          label: "Technical Accomplishments & Open Source",
          emptyHint: "Share coding milestones (LeetCode/Codeforces rating), open-source pull requests, or technical presentations."
        };
    }
  };

  const currentTabInfo = getItemsForTab();

  return (
    <section
      id="education"
      className="relative w-full py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              // 03 — EDUCATION & ACHIEVEMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              Academic & Accomplishments
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-md md:text-right">
            Rigorous undergraduate degree program complemented by verified credentials and competitive engineering.
          </p>
        </div>

        {/* 1. Formal Engineering Education Card */}
        <div className="border border-white/15 bg-neutral-950/80 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] -rotate-45 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-400">
                <GraduationCap className="w-4 h-4 text-white" />
                <span className="uppercase tracking-wider">UNDERGRADUATE DEGREE PROGRAM</span>
                <span className="px-2 py-0.5 border border-white/20 text-white text-[10px]">
                  {personal.education.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl text-white font-normal">
                {personal.education.degree} in {personal.education.field}
              </h3>

              <p className="text-neutral-300 font-mono text-sm">
                {personal.education.institution}
              </p>

              {personal.education.note && (
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {personal.education.note}
                </p>
              )}

              {/* Core Coursework Tags */}
              <div className="pt-4 space-y-2">
                <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider block">
                  Core Coursework & Studies
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10">Data Structures & Algorithms</span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10">Operating Systems</span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10">Object-Oriented Programming (Java/C++)</span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10">Database Management Systems</span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10">Computer Networks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 space-y-4 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">Institution & Location</span>
                <span className="text-white">SIT Tumakuru, Karnataka</span>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">Academic Performance</span>
                <span className="text-white font-medium">{personal.education.cgpa}</span>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">Academic History</span>
                <div className="space-y-2 pt-1">
                  {personal.education.history.map((h, i) => (
                    <div key={i} className="p-2 border border-white/5 bg-white/[0.02]">
                      <div className="flex justify-between text-white text-[11px]">
                        <span>{h.level}</span>
                        <span className="text-neutral-300 font-semibold">{h.score}</span>
                      </div>
                      <div className="text-[10px] text-neutral-400">{h.institution} ({h.year})</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Achievements & Milestones with Tabs */}
        <div className="space-y-6">
          {/* Tab Controls */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-white/10 pb-4">
            <button
              onClick={() => setActiveTab("academic")}
              className={`p-3 text-left font-mono text-xs tracking-wider border transition-all ${
                activeTab === "academic"
                  ? "border-white bg-white/10 text-white"
                  : "border-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-3.5 h-3.5 text-white" />
                <span>Academic Honors</span>
              </div>
              <span className="text-[10px] text-neutral-500">
                {achievements.academic.length} Recorded
              </span>
            </button>

            <button
              onClick={() => setActiveTab("certifications")}
              className={`p-3 text-left font-mono text-xs tracking-wider border transition-all ${
                activeTab === "certifications"
                  ? "border-white bg-white/10 text-white"
                  : "border-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <FileCheck className="w-3.5 h-3.5 text-white" />
                <span>Certifications</span>
              </div>
              <span className="text-[10px] text-neutral-500">
                {achievements.certifications.length} Recorded
              </span>
            </button>

            <button
              onClick={() => setActiveTab("hackathons")}
              className={`p-3 text-left font-mono text-xs tracking-wider border transition-all ${
                activeTab === "hackathons"
                  ? "border-white bg-white/10 text-white"
                  : "border-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-3.5 h-3.5 text-white" />
                <span>Hackathons</span>
              </div>
              <span className="text-[10px] text-neutral-500">
                {achievements.hackathons.length} Recorded
              </span>
            </button>

            <button
              onClick={() => setActiveTab("technical")}
              className={`p-3 text-left font-mono text-xs tracking-wider border transition-all ${
                activeTab === "technical"
                  ? "border-white bg-white/10 text-white"
                  : "border-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Flame className="w-3.5 h-3.5 text-white" />
                <span>Technical Milestones</span>
              </div>
              <span className="text-[10px] text-neutral-500">
                {achievements.technicalAccomplishments.length} Recorded
              </span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[220px]">
            {currentTabInfo.items.length === 0 ? (
              /* Honest, Elegant Empty State (No fabrication) */
              <div className="border border-dashed border-white/15 bg-neutral-950/40 p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50">
                  <PlusCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1 max-w-md">
                  <h4 className="text-white font-mono text-sm font-medium">
                    {currentTabInfo.label} — Awaiting Input
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                    {currentTabInfo.emptyHint}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-neutral-500 border border-neutral-800 px-3 py-1 bg-black">
                  Zero Fabrication Policy: No unconfirmed awards or marks are generated.
                </div>
              </div>
            ) : (
              /* Populated Items */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentTabInfo.items.map((item) => (
                  <div
                    key={item.id}
                    className="border border-white/10 bg-neutral-950/70 p-5 space-y-2 hover:border-white/30 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-mono text-sm text-white font-medium">
                        {item.title}
                      </h4>
                      {item.date && (
                        <span className="font-mono text-[10px] text-neutral-500">
                          {item.date}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-neutral-400">
                      {item.issuerOrEvent}
                    </p>
                    {item.description && (
                      <p className="text-xs text-neutral-300 font-light pt-1">
                        {item.description}
                      </p>
                    )}
                    {item.credentialUrl && (
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-white hover:underline pt-2"
                      >
                        <span>View Credential</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
