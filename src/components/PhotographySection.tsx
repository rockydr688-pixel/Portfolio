"use client";

import React, { useState } from "react";
import { creativeData, PhotoItem } from "@/data/creativeData";
import { PhotoLightbox } from "./PhotoLightbox";
import { Camera, Image as ImageIcon, PlusCircle, Maximize2 } from "lucide-react";

export function PhotographySection() {
  const { photography } = creativeData;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  return (
    <section
      id="photography"
      className="relative w-full py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              // 05 — VISUAL OBSERVATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              Photography Gallery
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-md md:text-right">
            Monochrome street, architectural geometries, and light balance. A personal creative pursuit outside the terminal.
          </p>
        </div>

        {/* Curatorial Artist Statement */}
        <div className="p-6 border-l-2 border-white/40 bg-neutral-950/60 font-light text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
          {photography.statement}
        </div>

        {/* Gallery Grid or Honest Empty State */}
        {photography.items.length === 0 ? (
          /* Honest Empty State Awaiting User Uploads */
          <div className="border border-dashed border-white/20 bg-neutral-950/40 p-8 sm:p-14 text-center flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/60">
              <Camera className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg">
              <h3 className="text-lg font-mono text-white font-normal">
                Personal Photography — Awaiting Upload
              </h3>
              <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                Stock photography has been intentionally omitted to ensure absolute authenticity. Upload your photographs directly in our chat, and they will be arranged into this high-contrast gallery.
              </p>
            </div>

            {/* Folder Structure Guide */}
            <div className="w-full max-w-md p-4 bg-black border border-white/10 font-mono text-xs text-neutral-300 text-left space-y-1.5">
              <div className="text-white font-medium flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Target Asset Directory:</span>
              </div>
              <code className="text-neutral-400 block text-[11px] pl-5">
                public/images/photography/
              </code>
              <p className="text-[10px] text-neutral-500 pt-1">
                Supported formats: JPG, PNG, WebP. Original high-resolution quality is preserved.
              </p>
            </div>

            <div className="text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Attach your photos in the conversation to automatically activate this gallery.</span>
            </div>
          </div>
        ) : (
          /* Populated Editorial Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photography.items.map((item: PhotoItem, index: number) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group relative cursor-pointer border border-white/10 bg-neutral-950 overflow-hidden hover:border-white/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                      {item.category || "PHOTOGRAPHY"}
                    </span>
                    <h4 className="text-sm font-medium text-white font-mono">
                      {item.title}
                    </h4>
                    {item.location && (
                      <p className="text-[11px] text-neutral-300 font-mono">
                        {item.location}
                      </p>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 bg-black/60 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        <PhotoLightbox
          photos={photography.items}
          currentIndex={selectedPhotoIndex}
          onClose={() => setSelectedPhotoIndex(null)}
          onNavigate={(index) => setSelectedPhotoIndex(index)}
        />
      </div>
    </section>
  );
}
