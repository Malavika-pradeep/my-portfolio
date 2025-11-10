    import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Prog. Languages",
      skills: [
        { name: "Python", icon: SiIcons.SiPython, color: "#3776AB" },
        { name: "C", icon: SiIcons.SiC, color: "#A8B9CC" },
        { name: "C++", icon: SiIcons.SiCplusplus, color: "#00599C" },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "PyTorch", icon: SiIcons.SiPytorch, color: "#EE4C2C" },
        { name: "OpenCV", icon: SiIcons.SiOpencv, color: "#5C3EE8" },
        { name: "TensorFlow", icon: SiIcons.SiTensorflow, color: "#FF6F00" },
        { name: "spaCy", icon: SiIcons.SiSpacy, color: "#09A3D5" },
        { name: "Scikit-learn", icon: SiIcons.SiScikitlearn, color: "#F7931E" },
      ],
    },
    {
      title: "Tools",
        skills: [
        { name: "Hugging Face", icon: SiIcons.SiHuggingface, color: "#FFD21E" },
        { name: "FastAPI", icon: SiIcons.SiFastapi, color: "#009688" },
        { name: "Git", icon: SiIcons.SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiIcons.SiGithub, color: "#181717" },
        { name: "PyCharm", icon: SiIcons.SiPycharm, color: "#21D789" },
        { name: "Spyder", icon: SiIcons.SiSpyderide, color: "#FF0000" },
        { name: "VS Code", icon: SiIcons.SiVisualstudiocode, color: "#007ACC" },
        { name: "Replit", icon: SiIcons.SiReplit, color: "#F26207" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#111] text-gray-100 relative"
    >
      {/* Title */}
      <div className="text-center mb-32">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700 mb-4">
          Skills & Expertise
        </h2>
      
      </div>

      {skillCategories.map((category, idx) => (
        <div key={idx} className="mb-16">
          <div className="max-w-5xl mx-auto px-6 md:px-0 flex flex-col md:flex-row items-start gap-6">
            {/* Left vertical label + bar (vertical on md+, horizontal on small) */}
            <div className="flex items-center md:flex-row md:items-center md:justify-start md:w-32">
              {/* bar first (left) */}
              <div className="w-1 h-24 md:h-40 bg-gradient-to-b from-purple-500 to-purple-700 rounded-sm mr-4 md:mr-4"></div>

              {/* vertical label for md+ (to the right of the bar) */}
              <h3
                className="hidden md:block text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700 tracking-wide"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {category.title}
              </h3>

              {/* horizontal label for small screens (shown to the right of the bar) */}
              <h3 className="block md:hidden text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700 tracking-wide">
                {category.title}
              </h3>
            </div>

            {/* Skills Grid (to the right of the label on md+) */}
            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center md:justify-items-start">
            {category.skills.map(({ name, icon: Icon, color }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#1a1a1a] hover:bg-[#222] border border-gray-700 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center w-36 h-36 transition-all"
              >
                {Icon ? (
                  <Icon className="w-10 h-10 mb-3" style={{ color }} />
                ) : (
                  <div className="w-10 h-10 mb-3 rounded-md bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                    {name.split(" ").map(s => s[0]).slice(0,2).join("")}
                  </div>
                )}
                <p className="text-sm font-medium tracking-wide text-gray-200 text-center">
                  {name}
                </p>
              </motion.div>
            ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
