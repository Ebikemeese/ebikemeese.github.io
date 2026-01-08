import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { IoIosSend } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  image: string;
  source_code_link: string;
  tags: Tag[];
  catalog: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  image,
  source_code_link,
  tags,
  catalog,
}) => {
  return (
    <motion.div
      className="project-card"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={source_code_link}
              target="_blank"
              className="bg-black text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <IoIosSend className="w-1/2 h-1/2 object-contain" />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <p className="text-secondary text-[14px]">
            <a href={catalog} target="_blank" className="text-white underline">
              Read more on my WhatsApp catalog.
            </a>
          </p>
        </div>

        {name === "Greatkart" && (
          <p className="mt-2 text-white text-[14px]">
            Note: Due to Render's free hosting plan, this website may take 30
            seconds or more to load.
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const headTextRef = useRef<HTMLHeadingElement>(null);
  const projectCardRef = useRef<HTMLDivElement>(null);

  // 👇 state to control how many projects are shown
  const [showAll, setShowAll] = useState(false);

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

    if (projectCardRef.current) {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  // 👇 decide which projects to show
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <div
        className="px-4 overflow-y-hidden py-20 w-full max-w-7xl mx-auto overflow-x-hidden"
        id="projects"
      >
        <motion.div variants={textVariant()} className="text-center">
          <p ref={subTextRef} className={styles.sectionSubText}>
            My work
          </p>
          <h2 ref={headTextRef} className={styles.sectionHeadText}>
            Projects.
          </h2>
        </motion.div>

        <div
          ref={projectCardRef}
          className="mt-20 flex flex-wrap gap-7 items-center justify-center"
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

        {/* 👇 View More / View Less button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Works;
