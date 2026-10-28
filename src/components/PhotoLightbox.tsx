"use client";

import React, { useEffect } from "react";
import { PhotoItem } from "@/data/creativeData";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera } from "lucide-react";

interface PhotoLightboxProps {
  photos: PhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function PhotoLightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate
}: PhotoLightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < photos.length - 1) onNavigate(currentIndex + 1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, photos.length, onClose, onNavigate]);

  if (currentIndex === null || !photos[currentIndex]) return null;

  const photo = photos[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photography Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close */}
      <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-neutral-400 font-mono text-xs z-10 pointer-events-auto">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-white" />
          <span className="text-white">
            {currentIndex + 1} / {photos.length}
          </span>
          {photo.category && (
            <span className="text-neutral-500 hidden sm:inline">
              // {photo.category.toUpperCase()}
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2 border border-white/10 hover:border-white text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation: Prev Button */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          aria-label="Previous photograph"
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-neutral-900/80 border border-white/10 text-white hover:border-white transition-all z-10 hidden sm:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Navigation: Next Button */}
      {currentIndex < photos.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          aria-label="Next photograph"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-neutral-900/80 border border-white/10 text-white hover:border-white transition-all z-10 hidden sm:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative border border-white/20 bg-neutral-950 overflow-hidden shadow-2xl">
          <img
            src={photo.src}
            alt={photo.title}
            className="max-h-[78vh] w-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Caption & Metadata */}
        <div className="w-full pt-4 space-y-1 text-center font-mono">
          <h3 className="text-sm text-white font-medium tracking-wide">
            {photo.title}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-neutral-400">
            {photo.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-neutral-500" />
                <span>{photo.location}</span>
              </span>
            )}
            {photo.date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-neutral-500" />
                <span>{photo.date}</span>
              </span>
            )}
            {photo.description && (
              <span className="text-neutral-500 italic block w-full mt-1">
                "{photo.description}"
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
