// src/utils/motion.d.ts
import { Variants } from "framer-motion";

export declare const textVariant: (delay?: number) => Variants;

export declare const fadeIn: (
  direction: "left" | "right" | "up" | "down" | "",
  type: string,
  delay: number,
  duration: number
) => Variants;

export declare const zoomIn: (delay: number, duration: number) => Variants;

export declare const slideIn: (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
) => Variants;

export declare const staggerContainer: (
  staggerChildren: number,
  delayChildren?: number
) => Variants;
