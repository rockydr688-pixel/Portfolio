"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Hero3DScene } from "./Hero3DScene";
import {
  ArrowDown,
  ArrowRight,
  FileText,
  Terminal,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { ResumeModal } from "./ResumeModal";

export function HeroSection() {
  const { personal } = portfolioData;
  const [photoError, setPhotoError] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 bg-[#050505] overflow-hidden"
    >
      {/* 3D Visual Depth Layer */}
      <Hero3DScene />

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Identity & Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 order-2 lg:order-1">
          {/* Status Label */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-white/10 bg-neutral-900/60 rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-neutral-300 uppercase">
              Information Science Engineer & Developer
            </span>
          </div>

          {/* Name & Title */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-none">
              {personal.name}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-mono text-neutral-400 font-normal">
              {personal.role}
            </p>
          </div>

          {/* Short Polished Introduction */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-light leading-relaxed">
            {personal.shortBio}
          </p>

          {/* Core Focus Badges */}
          <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10">
              <Cpu className="w-3.5 h-3.5 text-neutral-300" /> C / C++ / Java
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10">
              <Terminal className="w-3.5 h-3.5 text-neutral-300" /> Spring Boot
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" /> Core CS & Systems
            </span>
          </div>

          {/* Action Buttons & Socials */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary Button */}
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black text-xs font-mono font-semibold tracking-wider hover:bg-neutral-200 transition-colors group"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary Button: View Resume Directly Inside Website */}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white text-xs font-mono tracking-wider hover:border-white hover:bg-white/5 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME</span>
            </button>

            {/* Social Links */}
            <div className="flex items-center justify-center sm:justify-start gap-3 pl-0 sm:pl-2 pt-2 sm:pt-0">
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-all rounded-sm hover:bg-white/5"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-all rounded-sm hover:bg-white/5"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Central Profile Photo Showcase */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div className="relative group w-72 sm:w-80 md:w-96 aspect-[4/5] max-w-full">
            {/* Outer Minimalist Frame */}
            <div className="absolute -inset-2 border border-white/15 pointer-events-none group-hover:border-white/30 transition-colors duration-500" />
            <div className="absolute -inset-4 border border-white/5 pointer-events-none" />

            {/* Top-Right Technical Coordinates Tag */}
            <div className="absolute -top-7 right-0 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
              PORTRAIT // MONOCHROME
            </div>

            {/* Inner Image Container */}
            <div className="relative w-full h-full bg-[#0d0d0d] border border-white/20 overflow-hidden flex flex-col items-center justify-center shadow-2xl">
              {/* Real Profile Image */}
              {!photoError ? (
                <img
                  src={personal.assets.profilePhoto}
                  alt={personal.name}
                  onError={() => setPhotoError(true)}
                  className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 group-hover:contrast-125 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 block"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-between p-8 text-center bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
                  <div className="w-full flex justify-between items-center font-mono text-[10px] text-neutral-500">
                    <span>ASSET // PENDING</span>
                    <span>4:5 FORMAT</span>
                  </div>

                  <div className="space-y-4 my-auto flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full border border-dashed border-white/30 flex items-center justify-center font-mono text-2xl text-white/80">
                      R
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-mono text-white tracking-widest uppercase">
                        Profile Photograph
                      </p>
                      <p className="text-[11px] text-neutral-400 font-mono">
                        Awaiting upload in chat
                      </p>
                    </div>
                  </div>

                  <div className="w-full p-2.5 bg-black/70 border border-white/10 text-[10px] font-mono text-neutral-400 text-left">
                    <span className="text-white">Target file:</span>
                    <br />
                    public/images/profile.jpg
                  </div>
                </div>
              )}

              {/* Subtle Scanline / Vignette Layer */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Bottom Technical Label */}
            <div className="absolute -bottom-7 left-0 font-mono text-[10px] tracking-widest text-neutral-500 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white/60 inline-block" />
              <span>{personal.name} // {personal.role}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-8">
        <Link
          href="#about"
          aria-label="Scroll to About section"
          className="group flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">
            Scroll to explore
          </span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-neutral-400 group-hover:text-white" />
        </Link>
      </div>

      {/* In-Website Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        pdfUrl={personal.resume.filePath}
      />
    </section>
  );
}
