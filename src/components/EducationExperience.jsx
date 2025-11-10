import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { GraduationCap, Briefcase } from "lucide-react";

export const EducationExperience = () => {
  const [active, setActive] = useState("education");

  const education = [
    {
      id: 1,
      title: "B. Tech in Electrical and Electronics Engineering",
      org: "Cochin University of Science and Technology",
      year: "2019 - 2023",
    },
    {
      id: 2,
      title: "M. Tech in Computer Science and Engineering",
      org: "Digital University Kerala",
      year: "2023 - 2025",
    },
  ];

  const experience = [
    {
      id: 1,
      title: "Research & Development Intern",
      org: "Digital University Kerala",
      year: "2025",
      desc: "Developed modular UI components, optimized performance, and contributed to model integration.",
    },
    {
      id: 2,
      title: "AI Engineer Intern",
      org: "Manalife AI",
      year: "2025-Present",
      desc: "Collaborated on AI-driven healthcare research, contributing to publications and prototypes.",
    },
  ];

  const listToRender = active === "education" ? education : experience;
  // Render latest first (newest at top)
  const reversedList = [...listToRender].slice().reverse();

  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [circleTop, setCircleTop] = useState(0);

  // Observe which card is in view and update activeIndex
  useEffect(() => {
    if (!itemRefs.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      // Adjust rootMargin as needed for when the circle should jump
      { root: null, rootMargin: "-30% 0px -30% 0px", threshold: 0.5 } 
    );

    // Clear previous observers and reset itemRefs
    observer.disconnect();
    itemRefs.current = [];

    // Set new observers
    const items = document.querySelectorAll(`[data-timeline-item="true"]`);
    items.forEach((el, index) => {
        if (el) {
            itemRefs.current[index] = el;
            observer.observe(el);
        }
    });

    return () => observer.disconnect();
  }, [reversedList]); // Rerun observer when list changes

  // Position the circle next to the active card
  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      // Use the ref corresponding to the active index
      const el = itemRefs.current[activeIndex]; 
      
      if (!container || !el) return;
      
      const containerRect = container.getBoundingClientRect();
      const itemRect = el.getBoundingClientRect();
      
      // Calculate top position relative to the container for the vertical center of the active card
      // - 6 to account for half the circle's height (w-3 h-3)
      const top = itemRect.top - containerRect.top + itemRect.height / 2 - 6; 
      setCircleTop(top);
    };

    update();
    // Use passive scroll listener for better performance
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [activeIndex, listToRender]); // Rerun position update when activeIndex changes or list (and therefore layout) changes

  return (
    <section id="education" className="py-24 px-6 bg-background relative">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-3 tracking-tight">
          Education <span className="text-primary">&</span> Experience
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-sm md:text-base">
          A glimpse of my academic foundation and professional journey shaping my expertise in AI and technology.
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActive("education")}
            className={cn(
              "flex items-center gap-2 px-5 py-2 rounded-full border transition-all text-sm md:text-base",
              active === "education"
                ? "bg-primary text-white shadow-md"
                : "hover:bg-muted/50 text-muted-foreground border-border"
            )}
          >
            <GraduationCap className="w-4 h-4" /> Education
          </button>
          <button
            onClick={() => setActive("experience")}
            className={cn(
              "flex items-center gap-2 px-5 py-2 rounded-full border transition-all text-sm md:text-base",
              active === "experience"
                ? "bg-primary text-white shadow-md"
                : "hover:bg-muted/50 text-muted-foreground border-border"
            )}
          >
            <Briefcase className="w-4 h-4" /> Experience
          </button>
        </div>

        {/* Timeline Style Cards */}
        <div className="relative mt-10">
          <div ref={containerRef} className="relative">
            
            {/* vertical timeline line (behind) - NO 'hidden md:block' */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/50 z-0" />

            {/* moving indicator circle on the left line - NO 'hidden md:block' */}
            <motion.div
              className="absolute left-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10 pointer-events-none"
              // start with a sensible fallback
              initial={{ top: circleTop || 24 }}
              animate={{ top: circleTop ?? 24 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-8"
              >
                {reversedList.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    data-index={idx}
                    data-timeline-item="true" // Used for the updated observer logic
                    // Removed: ref={(el) => (itemRefs.current[idx] = el)} - now handled by querySelectorAll
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className={cn(
                      "relative bg-card p-6 rounded-2xl border border-border transform-gpu transition-all duration-300 text-left md:ml-16",
                      "shadow-[0_8px_30px_rgba(124,58,237,0.10)] hover:shadow-[0_15px_50px_rgba(124,58,237,0.20)] hover:-translate-y-1",
                      // Removed: "md:even:translate-y-10" to align cards cleanly
                    )}
                  >
                    {/* Static Dot for the timeline - placed BEFORE the card content */}
                    <div className="absolute left-[-22px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border ring-2 ring-background z-10" />

                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.org} • <span className="italic">{item.year}</span>
                      </p>
                      {item.desc && (
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;