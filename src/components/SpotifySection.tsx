"use client";

import React, { useState } from "react";
import { creativeData } from "@/data/creativeData";
import { Headphones, ExternalLink, Disc3, Radio } from "lucide-react";

export function SpotifyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.307c-.218.358-.683.473-1.042.254-2.859-1.748-6.458-2.143-10.697-1.173-.41.094-.821-.161-.914-.572-.095-.41.16-.821.572-.915 4.636-1.06 8.608-.616 11.827 1.353.359.219.474.684.254 1.053zm1.468-3.26c-.275.448-.863.593-1.311.317-3.273-2.012-8.261-2.595-12.132-1.419-.504.153-1.04-.135-1.194-.639-.153-.504.136-1.04.639-1.194 4.417-1.341 9.914-.687 13.681 1.625.448.276.593.863.317 1.31zm.126-3.41c-3.926-2.331-10.398-2.546-14.155-1.405-.603.183-1.246-.16-1.429-.763-.183-.604.16-1.246.763-1.429 4.316-1.31 11.451-1.06 15.981 1.629.542.322.721 1.026.399 1.568-.322.542-1.026.721-1.568.4-.001 0 0 0 .009 0z" />
    </svg>
  );
}

export function SpotifySection() {
  const { spotify } = creativeData;
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  const activeTrack = spotify.tracks[activeTrackIndex] || {
    id: "default",
    title: "Track 01",
    trackUrl: spotify.playlistUrl || "https://open.spotify.com",
    embedUrl: spotify.embedUrl || "https://open.spotify.com"
  };

  return (
    <section
      id="soundtrack"
      className="relative w-full py-28 px-6 md:px-12 bg-[#090909] border-t border-neutral-800/80 overflow-hidden"
    >
      {/* Subtle Spotify Green Ambient Backlight */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#1DB954]/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#1DB954]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-[#1DB954] uppercase font-semibold">
                // 07 — ACOUSTIC FOCUS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight flex items-center gap-3">
              <span>My Soundtrack</span>
              <span className="text-[#1DB954] text-2xl sm:text-3xl font-mono">●</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-md md:text-right">
            Curated audio textures and focus rhythms streaming directly via official Spotify architecture.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Spotify Themed Audio Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-[#121212] border border-[#282828] rounded-2xl shadow-2xl relative overflow-hidden group hover:border-[#1DB954]/40 transition-all duration-300">
            {/* Top Spotify Branding Bar */}
            <div className="flex items-center justify-between border-b border-[#282828] pb-4 mb-6">
              <div className="flex items-center gap-2.5 text-[#1DB954]">
                <SpotifyIcon className="w-6 h-6 fill-[#1DB954]" />
                <span className="font-mono text-xs tracking-wider text-white font-semibold">
                  SPOTIFY ROTATION
                </span>
              </div>

              {/* Animated Equalizer Bars */}
              <div className="flex items-end gap-1 h-4">
                <span className="w-1 bg-[#1DB954] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
                <span className="w-1 bg-[#1DB954] rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-4" />
                <span className="w-1 bg-[#1DB954] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
                <span className="w-1 bg-[#1DB954] rounded-full animate-[pulse_1.0s_ease-in-out_infinite] h-3.5" />
              </div>
            </div>

            {/* Middle Content */}
            <div className="space-y-6 flex-1">
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-[#1DB954] uppercase tracking-wider">
                  CURRENT PLAYLIST SELECTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {spotify.playlistTitle}
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  {spotify.playlistDescription}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {spotify.introText}
              </p>

              {/* Track Selection Switcher Pills */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block">
                  Select Track to Stream:
                </span>
                <div className="flex flex-wrap gap-2">
                  {spotify.tracks.map((track, idx) => (
                    <button
                      key={track.id}
                      onClick={() => setActiveTrackIndex(idx)}
                      className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-200 flex items-center gap-2 ${
                        activeTrackIndex === idx
                          ? "bg-[#1DB954] text-black font-bold shadow-[0_0_20px_rgba(29,185,84,0.35)] scale-105"
                          : "bg-[#1e1e1e] text-neutral-300 border border-[#2a2a2a] hover:border-[#1DB954]/50 hover:text-white"
                      }`}
                    >
                      <Radio className={`w-3 h-3 ${activeTrackIndex === idx ? "text-black" : "text-[#1DB954]"}`} />
                      <span>{track.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Spotify Action Button */}
            <div className="pt-8 border-t border-[#222222] mt-6">
              <a
                href={activeTrack.trackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2.5 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <SpotifyIcon className="w-4 h-4 fill-black" />
                <span>OPEN IN SPOTIFY</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right Column: Official Spotify Responsive Player Embed */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative border border-[#282828] bg-[#121212] p-3 sm:p-5 rounded-2xl shadow-2xl overflow-hidden hover:border-[#1DB954]/40 transition-colors">
              {/* Spotify Player Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#222222] mb-3 font-mono text-[10px] text-neutral-400">
                <span className="flex items-center gap-2 text-white">
                  <Disc3 className="w-3.5 h-3.5 text-[#1DB954] animate-spin [animation-duration:8s]" />
                  <span>SPOTIFY WEB PLAYER // {activeTrack.title.toUpperCase()}</span>
                </span>
                <span className="text-[#1DB954] font-semibold">NATIVE AUDIO STREAM</span>
              </div>

              {/* Official Responsive Embed Iframe */}
              <div className="w-full h-[352px] rounded-xl overflow-hidden bg-black shadow-inner">
                <iframe
                  key={activeTrack.embedUrl}
                  style={{ borderRadius: "12px" }}
                  src={`${activeTrack.embedUrl}?utm_source=generator&theme=0`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Spotify Track Player - ${activeTrack.title}`}
                  className="w-full h-full"
                />
              </div>

              <div className="mt-3 px-2 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Direct integration via Spotify Developer API</span>
                <span className="text-[#1DB954]">● Active Stream</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
