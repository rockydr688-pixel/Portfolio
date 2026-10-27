"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, FileText } from "lucide-react";
import { ResumeModal } from "./ResumeModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Photography", href: "#photography" },
    { label: "Soundtrack", href: "#soundtrack" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram / Brand */}
        <Link
          href="#hero"
          className="group flex items-center space-x-2 text-white font-mono tracking-widest text-sm hover:opacity-80 transition-opacity"
        >
          <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform duration-200" />
          <span className="font-semibold text-base">{portfolioData.personal.name.toUpperCase()}</span>
          <span className="text-neutral-500 font-light">// DEV</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider text-neutral-400">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button: In-website Resume Viewer */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setIsResumeOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-white text-xs font-mono text-white transition-all duration-200 hover:bg-white hover:text-black cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-white p-1 hover:text-neutral-400 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col space-y-4 font-mono text-sm text-neutral-300">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white hover:translate-x-1 transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-neutral-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsResumeOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full py-2 border border-white text-xs font-mono text-white bg-neutral-900 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* In-Website Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        pdfUrl={portfolioData.personal.resume.filePath}
      />
    </header>
  );
}
