import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
import { experiences } from "../constants";
import type { Experience as ExperienceType } from "../constants/index.d";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceCardProps {
    experience: ExperienceType;
    index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current) {
        gsap.fromTo(
            cardRef.current,
            { x: 80, opacity: 0 },
            {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%", // when card is 80% down viewport
                toggleActions: "play none none reverse",
            },
            }
        );
        }
    }, [index]);

  return (
        <div ref={cardRef} className="relative flex items-start mb-12">
            
            {/* Timeline icon */}
            <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10"
                style={{ background: experience.iconBg }}
            >
                <img
                src={experience.icon}
                alt={experience.title}
                className="w-[90%] h-[90%] object-contain"
                />
            </div>

            {/* Card content */}
            <div className="ml-2 relative bg-[#1d1836] p-6 rounded-lg shadow-lg w-full">
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                
                <p className="text-gray-400 text-sm mb-4">{experience.date}</p>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, idx) => (
                    <li
                    key={`experience-point-${idx}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                    {point}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

const Experience = () => {
    const subTextRef = useRef<HTMLParagraphElement>(null);
    const headTextRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

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
            { x: 100, opacity: 0 },
            {
            x: 0,
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
        <div className="px-4 py-20 w-full max-w-7xl mx-auto overflow-x-hidden" id="experience">
            <motion.div>
                <p ref={subTextRef} className={`${styles.sectionSubText} text-center`}>
                What I have done so far
                </p>
                <h2 ref={headTextRef} className={`${styles.sectionHeadText} text-center`}>
                Work Experience.
                </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Experience Cards */}
                <div className="order-2 lg:mt-10 lg:order-1 mt-10 lg:mt-0 flex flex-col relative">
                {/* Timeline line */}
                <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-[#232631]" />

                {experiences.map((experience, index) => (
                    <ExperienceCard
                    key={`experience-${index}`}
                    experience={experience}
                    index={index}
                    />
                ))}
                </div>

                {/* Image Section */}
                <div
                ref={imageRef}
                className="order-1 lg:order-2 lg:my-auto flex items-center justify-center lg:h-[900px]"
                >
                <img
                    src="/src/assets/images/full.png"
                    alt="experience"
                    className="object-cover h-full"
                />
                </div>
            </div>
        </div>
    );
};

export default Experience;
