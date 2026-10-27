"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#030303] border-t border-white/10 py-16 px-6 md:px-12 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold tracking-wider text-sm">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span>{personal.name.toUpperCase()}</span>
              <span className="text-neutral-500 font-light">// {personal.role}</span>
            </div>
            <p className="text-neutral-400 font-light text-xs max-w-md">
              Engineering student in Information Science. Building dependable software and backend systems.
            </p>
          </div>

          {/* Socials & Top Button */}
          <div className="flex items-center gap-4">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            {personal.socialLinks.email && (
              <a
                href={personal.socialLinks.email}
                aria-label="Email"
                className="p-2.5 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 ml-2"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-neutral-400 text-[11px]">
          <div>
            © 2026 {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#hero" className="hover:text-white transition-colors">
              Hero
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#education" className="hover:text-white transition-colors">
              Education
            </Link>
          </div>
          <div className="text-neutral-400">
            Strict Monochrome Architecture // Next.js + Three.js
          </div>
        </div>
      </div>
    </footer>
  );
}
