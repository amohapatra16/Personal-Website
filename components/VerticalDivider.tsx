"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface VerticalDividerProps {
  className?: string;
}

export default function VerticalDivider({ className = "" }: VerticalDividerProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLElement>(null);
  const thumbHeight = 44; // height of the rectangular nav roller in px

  const updateScroll = useCallback(() => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollableHeight > 0) {
      const progress = Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1);
      setScrollProgress(progress);
    } else {
      setScrollProgress(0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [updateScroll]);

  // Dragging or clicking on the red bar to scroll
  const handleScrollTo = (clientY: number) => {
    const trackHeight = window.innerHeight;
    const availableTrack = trackHeight - thumbHeight;
    const relativeY = Math.min(Math.max(clientY - thumbHeight / 2, 0), availableTrack);
    const targetProgress = availableTrack > 0 ? relativeY / availableTrack : 0;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: targetProgress * scrollableHeight,
      behavior: "auto",
    });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleScrollTo(e.clientY);

    const onPointerMove = (moveEvent: PointerEvent) => {
      handleScrollTo(moveEvent.clientY);
    };

    const onPointerUp = () => {
      setIsDragging(false);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  return (
    <>
      {/* Fixed interactive scroll track at the very right margin */}
      <aside
        ref={trackRef}
        onPointerDown={handlePointerDown}
        className={`fixed right-0 top-0 bottom-0 w-[16px] bg-[#a6290d] z-50 cursor-pointer select-none ${className}`}
        aria-label="Page scroll track and nav roller"
        role="scrollbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
      >
        {/* Lighter red rectangular nav roller */}
        <div
          className="absolute left-0 w-full bg-[#e05a38] transition-[background-color,transform] duration-150 hover:bg-[#eb6d4d]"
          style={{
            height: `${thumbHeight}px`,
            top: `calc(${scrollProgress} * (100vh - ${thumbHeight}px))`,
            boxShadow: isDragging ? "0 0 6px rgba(0,0,0,0.35)" : "none",
          }}
        />
      </aside>

      {/* Spacer in flex layout so content doesn't sit under the fixed 16px bar */}
      <div className={`w-[16px] shrink-0 ${className}`} aria-hidden="true" />
    </>
  );
}
