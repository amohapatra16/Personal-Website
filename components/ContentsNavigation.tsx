"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/navigation";
import ArchitecturalRule from "./ArchitecturalRule";

interface ContentsNavigationProps {
  className?: string;
  onNavigate?: () => void;
}

export default function ContentsNavigation({
  className = "",
  onNavigate,
}: ContentsNavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={`bg-[#f7f6f2] w-full max-w-[286px] flex flex-col select-none ${className}`}
      aria-label="Contents Navigation"
    >
      {/* Contents heading */}
      <div className="flex items-center justify-between h-[48px] px-6 text-[#261d11] font-medium">
        <span className="text-[8.5px] tracking-[1.6px] uppercase font-['Inter',sans-serif]">
          CONTENTS
        </span>
        <span className="text-[8px] uppercase tracking-wider font-['Inter',sans-serif]">
          INDEX / 01—06
        </span>
      </div>

      <ArchitecturalRule className="mx-6 w-auto" thickness="thick" />

      {/* Navigation List */}
      <ul className="flex flex-col m-0 p-0 list-none">
        {NAV_ITEMS.map((item, index) => {
          // Check if active (matches path or starts with path for subroutes)
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.id} className="flex flex-col">
              <Link
                href={item.href}
                onClick={onNavigate}
                className={`group flex items-center justify-between min-h-[50px] py-2 px-6 transition-colors duration-150 focus:outline-none focus-visible:bg-[#261d11]/5 ${
                  isActive
                    ? "text-[#a6290d]"
                    : "text-[#261d11] hover:text-[#a6290d]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="flex items-center gap-3 min-w-0 -translate-y-0.5">
                  {/* Number index */}
                  <span
                    className={`shrink-0 w-[18px] text-[9px] font-medium font-['Inter',sans-serif] ${
                      isActive
                        ? "text-[#a6290d]"
                        : "text-[#261d11] group-hover:text-[#a6290d]"
                    }`}
                  >
                    {item.index}
                  </span>

                  {/* Page label */}
                  <span className="font-['Archivo',sans-serif] font-black text-[28px] tracking-[-0.7px] leading-tight">
                    {item.label}
                  </span>
                </div>

                {/* Diagonal Arrow */}
                <span
                  className={`shrink-0 text-[18px] font-medium transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 -translate-y-0.5 ${
                    isActive
                      ? "text-[#a6290d]"
                      : "text-[#f2b705] group-hover:text-[#a6290d]"
                  }`}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
              <ArchitecturalRule
                className="mx-6 w-auto"
                thickness={index % 2 === 0 ? "thin" : "thick"}
              />
            </li>
          );
        })}
      </ul>

      {/* Navigation colophon */}
      <div className="flex items-center justify-between h-[48px] px-6 mt-8 text-[#261d11]">
        <span className="text-[7.5px] uppercase tracking-[0.96px] font-medium font-['Inter',sans-serif]">
          FORM FOLLOWS FUNCTION
        </span>
        <div
          className="bg-[#f2b705] h-[7px] w-[24px] shrink-0"
          aria-hidden="true"
        />
      </div>
    </nav>
  );
}
