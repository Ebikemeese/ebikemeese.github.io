import { styles } from "@/styles";
import { useEffect, useRef, lazy, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { footergrid } from "@/assets/tech";

import StarsCanvas from "./canvas/StarsCanvas";

gsap.registerPlugin(ScrollTrigger);

const World = lazy(() => import("./ui/Globe").then((m) => ({ default: m.World })));

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 2.5,
};

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[0],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[1],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[2],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[0],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[1],
  },
];

const Contact = () => {
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const headTextRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (subTextRef.current) {
      gsap.fromTo(
        subTextRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subTextRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (headTextRef.current) {
      gsap.fromTo(
        headTextRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headTextRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div id="contact" className="bg-[#252838] px-4 py-20 relative overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Background 3D Cursor-Interactive Starfield */}
      <StarsCanvas />

      {/* Background grid */}
      <div className="absolute left-0 -bottom-1 w-full h-full pointer-events-none">
        <img
          src={footergrid}
          alt="grid"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-between flex-grow text-white">
        {/* Section Heading */}
        <div className="text-center">
          <p className={styles.sectionSubText}>Let's get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>
        </div>

        {/* Layout Container: On mobile (flex-col) Globe comes first, Contact text comes next. On desktop (lg:flex-row) Contact is left, Globe is right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 my-auto py-8">
          
          {/* Globe Container - Direct 3D Canvas Without Card Background */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2 h-[320px] sm:h-[400px] lg:h-[450px] relative flex items-center justify-center overflow-hidden">
            <Suspense fallback={null}>
              <World data={sampleArcs} globeConfig={globeConfig} />
            </Suspense>
          </div>

          {/* Original Contact Info Section - Second on mobile (order-2), Left on desktop (lg:order-1) */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 text-center">
            <h1 ref={headTextRef} className="heading text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Ready to take your <span className="text-purple">digital presence</span> to the next level
            </h1>

            <p ref={subTextRef} className="text-white-200 md:mt-10 my-5 w-[90%] sm:w-[80%] mx-auto">
              Reach out to me today and let's discuss how I can help you achieve your goals.
            </p>

            {/* Original Social Links */}
            <div ref={imageRef} className="social-links mt-6">
              <ul className="flex list-none gap-4 justify-center flex-wrap">
                {/* Email */}
                <li>
                  <a
                    href="mailto:ebikemeese@gmail.com"
                    className="btn btn-outline-light flex items-center justify-center w-12 h-12 rounded-full border border-white hover:bg-purple transition"
                    aria-label="Email"
                    data-cursor="pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                      />
                    </svg>
                  </a>
                </li>

                {/* Phone 1 */}
                <li>
                  <a
                    href="tel:+2348123208257"
                    className="btn btn-outline-light flex items-center justify-center w-12 h-12 rounded-full border border-white hover:bg-purple transition"
                    aria-label="Call +2348123208257"
                    data-cursor="pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.2.48 2.52.74 3.88.74.6 0 1.09.49 1.09 1.09v3.5c0 .6-.49 1.09-1.09 1.09C10.07 22 2 13.93 2 4.09 2 3.49 2.49 3 3.09 3h3.5c.6 0 1.09.49 1.09 1.09 0 1.36.26 2.68.74 3.88.13.27.07.6-.21 1.11l-2.2 2.2z"
                      />
                    </svg>
                  </a>
                </li>

                {/* WhatsApp */}
                <li>
                  <a
                    href="https://wa.me/2348123208257"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light flex items-center justify-center w-12 h-12 rounded-full border border-white hover:bg-green-500 transition"
                    aria-label="WhatsApp"
                    data-cursor="pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 2a10 10 0 0 0-8.94 14.47L2 22l5.66-1.49A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.07-1.11l-.29-.17-3.36.89.9-3.27-.18-.3A8 8 0 1 1 12 20zm4.46-5.54c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.18-1.41-1.32-1.65-.14-.24-.01-.38.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"
                      />
                    </svg>
                  </a>
                </li>

                {/* GitHub */}
                <li>
                  <a
                    href="https://github.com/Ebikemeese"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light flex items-center justify-center w-12 h-12 rounded-full border border-white hover:bg-gray-700 transition"
                    aria-label="GitHub"
                    data-cursor="pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 2C7.03 2 3 6.03 3 11c0 3.98 2.58 7.35 6.16 8.54.45.08.62-.2.62-.44 0-.22-.01-.94-.01-1.71-2.51.55-3.04-1.07-3.04-1.07-.41-1.03-1-1.31-1-1.31-.82-.56.06-.55.06-.55 1 .07 1.52 1.03 1.52 1.03.81 1.39 2.12.99 2.64.76.08-.59.32-.99.58-1.22-2.01-.23-4.12-1.01-4.12-4.49 0-.99.35-1.79.93-2.42-.09-.23-.41-1.17.09-2.44 0 0 .76-.24 2.49.93.72-.2 1.49-.3 2.26-.3s1.54.1 2.26.3c1.73-1.17 2.49-.93 2.49-.93.5 1.27.18 2.21.09 2.44.58.63.93 1.43.93 2.42 0 3.49-2.12 4.26-4.14 4.48.33.29.62.86.62 1.73 0 1.25-.01 2.26-.01 2.57 0 .24.16.53.63.44C18.42 18.35 21 14.98 21 11 21 6.03 16.97 2 12 2z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 text-center text-sm text-gray-400">
          © {currentYear} Ebikeme Ese. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Contact;
