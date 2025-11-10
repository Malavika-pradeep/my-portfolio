import { GraduationCap, Briefcase } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const EducationExperience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.12 });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const education = [
    {
      id: 1,
      title: "B. Tech in Electrical and Electronics Engineering",
      org: "Cochin University of Science and Technology",
      year: "2019 - 2023",
      desc: "Built a strong foundation in electrical systems, automation, and control, integrating hardware with software logic.",
    },
    {
      id: 2,
      title: "M. Tech in Computer Science and Engineering",
      org: "Digital University Kerala",
      year: "2023 - 2025",
      desc: "Specializing in AI and cognitive computing, with research on interpretable AI models and multimodal learning.",
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
      year: "2025 - Present",
      desc: "Collaborated on AI-driven healthcare research, contributing to publications and prototypes.",
    },
  ];

  return (
  <motion.section
    id="journey"
    className="py-24 px-6 bg-black text-purple-400"
    ref={ref}
    initial="hidden"
    animate={inView ? "show" : "hidden"}
    variants={containerVariants}
  >
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2 className="text-4xl font-bold mb-16" variants={itemVariants}>
          My <span className="text-purple-400">Journey</span>
        </motion.h2>

        <motion.div className="grid md:grid-cols-2 gap-16 text-left relative" variants={{ hidden: {}, show: {} }}>
          {/* Education Section */}
          <div className="relative">
            <h3 className="text-xl font-semibold mb-10 flex items-center gap-2">
              <GraduationCap className="text-purple-400" /> Education
            </h3>

            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-purple-500/40" />

            <div className="space-y-10 pl-10">
              {education.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="relative border border-purple-500/50 rounded-xl p-5 bg-[#0f1624] hover:bg-[#101b2e] transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="absolute left-[-19px] top-7 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0a0f1a]" />
                  <p className="text-purple-400 text-sm mb-1">{item.year}</p>
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-300 italic mb-2">{item.org}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="relative">
            <h3 className="text-xl font-semibold mb-10 flex items-center gap-2">
              <Briefcase className="text-purple-400" /> Experience
            </h3>

            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-purple-500/40" />

            <div className="space-y-10 pl-10">
              {experience.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="relative border border-purple-500/50 rounded-xl p-5 bg-[#0f1624] hover:bg-[#101b2e] transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="absolute left-[-19px] top-7 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0a0f1a]" />
                  <p className="text-purple-400 text-sm mb-1">{item.year}</p>
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-300 italic mb-2">{item.org}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationExperience;
