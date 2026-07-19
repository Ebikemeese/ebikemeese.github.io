import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "../assets/css/magneto.css";

type OtherTech = {
  name: string;
  icon: string;
  isInvert?: boolean;
};

interface MagnetoButtonProps {
  othertechs: OtherTech;
}

const MagnetoButton: React.FC<MagnetoButtonProps> = ({ othertechs }) => {
  const magnetoRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-detect dark/black icons that need invert filter to be visible on dark background
  const shouldInvert =
    othertechs.isInvert ||
    [
      "three js",
      "three.js",
      "socket.io",
      "shadcn/ui",
      "lenis",
      "fastify",
      "aceternity ui",
      "framer motion",
      "prisma",
      "expo",
      "coderabbit",
    ].includes(othertechs.name.toLowerCase());

  useEffect(() => {
    const magneto = magnetoRef.current;
    const magnetoIcon = iconRef.current;

    if (!magneto || !magnetoIcon) return;

    const magnetoStrength = 35;
    const magnetoIconStrength = 65;

    const activateMagneto = (event: MouseEvent) => {
      const boundBox = magneto.getBoundingClientRect();
      const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
      const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

      gsap.to(magneto, {
        duration: 0.6,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        scale: 1.05,
        ease: "power3.out",
      });

      gsap.to(magnetoIcon, {
        duration: 0.6,
        x: newX * magnetoIconStrength,
        y: newY * magnetoIconStrength,
        rotation: newX * 15,
        ease: "power3.out",
      });
    };

    const resetMagneto = () => {
      gsap.to(magneto, {
        duration: 0.8,
        x: 0,
        y: 0,
        scale: 1,
        ease: "elastic.out(1, 0.4)",
      });
      gsap.to(magnetoIcon, {
        duration: 0.8,
        x: 0,
        y: 0,
        rotation: 0,
        ease: "elastic.out(1, 0.4)",
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      resetMagneto();
    };

    magneto.addEventListener("mousemove", activateMagneto);
    magneto.addEventListener("mouseenter", handleMouseEnter);
    magneto.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      magneto.removeEventListener("mousemove", activateMagneto);
      magneto.removeEventListener("mouseenter", handleMouseEnter);
      magneto.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center group">
      <button
        className="magneto relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#151030] border border-purple/20 flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-shadow duration-300"
        ref={magnetoRef}
        data-cursor="pointer"
        aria-label={othertechs.name}
      >
        <img
          ref={iconRef}
          src={othertechs.icon}
          alt={othertechs.name}
          className={`w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform pointer-events-none ${
            shouldInvert ? "brightness-0 invert" : ""
          }`}
          onError={(e) => {
            // Fallback for broken images
            const target = e.target as HTMLImageElement;
            target.src = `https://api.iconify.design/simple-icons:${othertechs.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.svg?color=%23ffffff`;
          }}
        />
      </button>

      {/* Tooltip on hover */}
      <span
        className={`absolute -bottom-8 px-3 py-1 bg-[#100d25] text-purple text-xs font-semibold rounded-md border border-purple/30 whitespace-nowrap pointer-events-none transition-all duration-300 z-20 ${
          isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
        }`}
      >
        {othertechs.name}
      </span>
    </div>
  );
};

export default MagnetoButton;
