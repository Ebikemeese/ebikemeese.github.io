import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants/index.js";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { Scissors } from "lucide-react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: "0%",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 35,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: [0.25, 1, 0.5, 1] as const, duration: 0.4 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shortcutLabel, setShortcutLabel] = useState("Ctrl+B");

  useEffect(() => {
    if (
      typeof navigator !== "undefined" &&
      /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)
    ) {
      setShortcutLabel("⌘B");
    }
  }, []);

  // Toggle drawer with Ctrl+B (Windows/Linux) or Cmd+B (macOS/iOS), close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background page scrolling when drawer is open while allowing internal drawer scrolling
  useEffect(() => {
    const preventScroll = (e: Event) => {
      if (!isOpen) return;
      const drawer = document.getElementById("nav-drawer-content");
      if (drawer && drawer.contains(e.target as Node)) {
        return; // Allow smooth scrolling inside the drawer
      }
      e.preventDefault();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`px-2 w-full flex items-center py-5 top-0 transition-all duration-300 ${
          scrolled
            ? "bg-[#252838]/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-2 sm:px-4">
          {/* Brand Logo with exact original look and animation */}
          <a
            href="#hero"
            className="flex nav-hover-btn items-center gap-2 text-white group relative font-semibold font-general uppercase"
            data-cursor="pointer"
          >
            {/* Copyright symbol */}
            <div className="transition-transform duration-700 group-hover:rotate-[360deg]">
              ©
            </div>

            {/* Wrapper to hold both texts in same spot */}
            <div className="relative w-32 h-6 overflow-hidden">
              {/* Code by Ese (default visible) */}
              <div className="absolute inset-0 transition-all duration-700 group-hover:-translate-x-10 group-hover:opacity-0">
                Code by Ese
              </div>

              {/* Ebikeme Ese (default hidden, slides in) */}
              <div className="absolute inset-0 translate-x-10 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100">
                Ebikeme Ese
              </div>
            </div>
          </a>

          {/* Right Hamburger Menu Button with Shortcut Hint */}
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center py-0.5 text-[10px] font-mono font-medium text-purple-300 bg-purple/15 border border-purple/30 rounded max-w-[50px]"
              title={`Press ${shortcutLabel} to toggle navigation menu`}
            >
              <Scissors className="w-3 h-3 text-purple" />
              <span className="font-semibold text-gray-200 mr-3">B</span>
            </span>
            <button
              onClick={toggleMenu}
              className="w-[20px] h-[20px] p-0 m-0 leading-none text-white hover:text-purple hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer bg-transparent border-none outline-none focus:outline-none flex items-center justify-center"
              aria-label={`Toggle Navigation Menu (${shortcutLabel})`}
              title={`Toggle Navigation Menu (${shortcutLabel})`}
              data-cursor="pointer"
            >
              <HiMenuAlt3 className="w-[20px] h-[20px] text-white hover:text-purple transition-colors p-0 m-0 block" />
            </button>
          </div>
        </div>
      </nav>

      {/* Render Drawer into document.body via Portal to guarantee 100% viewport visibility everywhere on the page */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Low Opacity Backdrop Blur Overlay */}
              <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={toggleMenu}
                className="fixed inset-0 z-[99998] bg-black/20 backdrop-blur-[2px] cursor-pointer h-screen h-[100vh] w-screen"
              />

              {/* Right Drawer Container - Scrollable Up and Down */}
              <motion.div
                id="nav-drawer-content"
                data-lenis-prevent
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-0 right-0 z-[99999] w-full max-w-sm sm:max-w-md h-screen h-[100vh] max-h-screen bg-[#252838] border-l border-purple/20 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto box-border"
              >
                {/* Drawer Header with Close Button */}
                <div>
                  <div className="flex justify-between items-center pb-6 border-b border-purple/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple animate-ping" />
                      <span className="text-xs uppercase tracking-widest font-bold text-purple">
                        Navigation
                      </span>
                      <span className="inline-flex items-center justify-center py-0.5 text-[10px] font-mono font-medium text-purple-300 bg-purple/15 border border-purple/30 rounded max-w-[50px]">
                        <Scissors className="w-3 h-3 text-purple" />
                        <span className="font-semibold text-purple-200 mr-3">
                          B
                        </span>
                      </span>
                    </div>

                    <motion.button
                      onClick={toggleMenu}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/5 border border-purple/20 flex items-center justify-center text-white hover:bg-purple/20 transition-all cursor-pointer"
                      aria-label="Close Menu"
                      data-cursor="pointer"
                    >
                      <HiX className="text-xl" />
                    </motion.button>
                  </div>

                  {/* Staggered Navigation Links */}
                  <div className="mt-8 flex flex-col gap-4">
                    {navLinks.map((nav, index) => (
                      <motion.a
                        key={nav.id}
                        variants={linkVariants}
                        href={`#${nav.id}`}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-purple/10 border border-transparent hover:border-purple/20 transition-all duration-300"
                        data-cursor="pointer"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-mono text-purple/60 group-hover:text-purple transition-colors">
                            0{index + 1}
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-gray-200 group-hover:text-white group-hover:translate-x-1 transition-all">
                            {nav.title}
                          </span>
                        </div>
                        <span className="text-purple opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Drawer Footer Socials */}
                <div className="pt-8 border-t border-purple/10 mt-8">
                  <p className="text-xs text-gray-400 mb-4 font-semibold uppercase tracking-wider">
                    Connect & Reach Out
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/Ebikemeese"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-purple/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple/20 transition-all"
                      aria-label="GitHub"
                      data-cursor="pointer"
                    >
                      <FaGithub className="text-lg" />
                    </a>

                    <a
                      href="mailto:ebikemeese@gmail.com"
                      className="w-10 h-10 rounded-full bg-white/5 border border-purple/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple/20 transition-all"
                      aria-label="Email"
                      data-cursor="pointer"
                    >
                      <FaEnvelope className="text-lg" />
                    </a>

                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="ml-auto px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all"
                      data-cursor="pointer"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default Navbar;
