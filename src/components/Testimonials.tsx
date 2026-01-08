import { styles } from "../styles";
import { testimonials } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FeedBackCard = ({ testimonial, name, designation, company, image }: any) => {
  return (
    <div
      className="feedback-card bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full opacity-0 translate-y-20"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>

            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate feedback cards
    gsap.utils.toArray<HTMLElement>(".feedback-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.2, // stagger
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div id="testimonials" className="bg-[#252838] px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mt-12 bg-black-100 rounded-[20px]">
          <div
            ref={headingRef}
            className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
          >
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </div>

          <div
            className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap max-md:flex-col gap-7`}
          >
            {testimonials.map((testimonial, index) => (
              <FeedBackCard key={testimonial.name} index={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
