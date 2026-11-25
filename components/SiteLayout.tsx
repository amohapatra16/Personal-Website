"use client";

import { useState } from "react";
import AmBauhausEmblem from "./AmBauhausEmblem";
import ContentsNavigation from "./ContentsNavigation";
import VerticalDivider from "./VerticalDivider";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f6f2] flex flex-col w-full">
      {/* Outer Viewport Canvas */}
      <div className="w-full min-h-screen bg-[#f7f6f2] flex flex-col relative">
        
        {/* Mobile Header (< 1024px) */}
        <header className="lg:hidden sticky top-0 z-40 bg-[#f7f6f2]/95 backdrop-blur-sm border-b border-black/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AmBauhausEmblem size={48} />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-black text-[#261d11] bg-white text-xs font-semibold uppercase tracking-wider active:bg-slate-100 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "Close [✕]" : "Menu [☰]"}
          </button>
        </header>

        {/* Mobile Menu Drawer Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-black/80 bg-[#f7f6f2] py-4 px-2 animate-in fade-in duration-150">
            <ContentsNavigation
              className="mx-auto"
              onNavigate={() => setMobileMenuOpen(false)}
            />
          </div>
        )}

        {/* Main Desktop Container */}
        <div className="flex-1 flex flex-col lg:flex-row relative">
          
          {/* Left Column (Brand + Sidebar Navigation) matching Figma coordinates */}
          <aside className="hidden lg:flex flex-col w-[360px] shrink-0 min-h-full">
            {/* AM Emblem: x = 75px, y = 63px */}
            <div className="pt-[63px] pl-[75px]">
              <AmBauhausEmblem size={200} />
            </div>

            {/* Contents Navigation: x = 43px, y = 335px */}
            <div className="pt-[72px] pl-[43px] pb-12">
              <ContentsNavigation />
            </div>
          </aside>

          {/* Center Main Content Slot: starts at x = 457px, y = 140px matching Figma */}
          <main className="flex-1 min-w-0 flex flex-col pt-8 lg:pt-[140px] pl-6 sm:pl-10 lg:pl-[97px] pr-6 lg:pr-14 overflow-x-hidden">
            {children}
          </main>

          {/* Right Edge: Vertical Red Scroll Bar */}
          <VerticalDivider className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
