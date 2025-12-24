"use client";

import { useEffect, useRef } from "react";

interface AccessButtonProps {
  href?: string;
  text?: string;
}

export default function AccessButton({
  href = "https://chat.whatsapp.com/E6CVZew1xHFLNHKELbODWC?mode=wwt",
  text = "Get Access",
}: AccessButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      btnRef.current?.click();
    }, 4000);

    return () => clearTimeout(timer);
  }, [href]);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate distance from center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Dampen the movement (higher divisor = less movement)
      const deltaX = (x - centerX) / 6;
      const deltaY = (y - centerY) / 6;

      btn.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      btn.style.transform = "";
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a
      href={href}
      className="access-btn"
      ref={btnRef}
      // target="_blank"
      rel="noopener noreferrer"
    >
      <span className="btn-text">{text}</span>
      <div className="flare"></div>
    </a>
  );
}
