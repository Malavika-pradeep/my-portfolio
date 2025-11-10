import { useEffect, useState, useRef } from "react";
import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export const AboutSection = () => {
  const [time, setTime] = useState("");
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.15 });

  useEffect(() => {
    const updateTime = () => {
      const options = { hour: "2-digit", minute: "2-digit"};
      const istTime = new Date().toLocaleTimeString("en-GB", {
        ...options,
        timeZone: "Asia/Kolkata",
      });
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // useInView handles enter/exit; we intentionally set once: false so animation can re-trigger

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-black text-white">
      <div className="container mx-auto max-w-6xl grid gap-12 items-start md:grid-cols-3">

        {/* Left column: heading with small grayish transparent circle */}
  <div className="relative col-span-1 flex items-start md:items-center mt-20 md:mt-28">
          {/* decorative circle */}
          <span className="hidden md:block absolute -left-8 -top-6 w-16 h-16 rounded-full bg-gray-400/10 border border-gray-400/10" aria-hidden="true" />

          <motion.h3
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={
              'text-4xl md:text-6xl font-extrabold tracking-tight text-gray-300/40 text-left'
            }
          >
            About Me
          </motion.h3>
        </div>

        {/* Right column: main text content, left aligned */}
        <motion.div
          className="col-span-2 space-y-6 leading-relaxed text-left"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
            }}
            className={""}
          >
            Renowned for my <span className="font-semibold">innovative approach</span> to Artificial Intelligence, 
            I specialize in building <span className="font-semibold"> interpretable and efficient intelligent systems </span> 
            that fuse creativity with technology to achieve real-world impact.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
            }}
          >
            My work is driven by a <span className="font-semibold">research-oriented mindset</span>, 
            leading interdisciplinary initiatives across <span className="font-semibold"> AI-driven R&amp;D, computer vision, OCR, and signal processing</span>. 
            I focus on developing scalable, explainable models and deploying end-to-end pipelines that advance 
            <span className="font-semibold"> multimodal AI </span> and human–AI integration.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
            }}
          >
            Currently, I collaborate on both <span className="font-semibold">academic and industrial projects</span> 
            involving <span className="font-semibold"> applied machine learning, physiological modeling, and intelligent automation</span>, 
            emphasizing robustness, scalability, and clarity in model design.
          </motion.p>



          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
            }}
          >
            <p className="text-lg font-medium mt-8">
              Based and working in <span className="font-semibold">India 🇮🇳</span>
            </p>
            <p className="text-3xl font-bold mt-2">{time} <span className="text-sm">(IST)</span></p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex space-x-4 mt-8 text-2xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
            }}
          >
            <a
              href="#"
              className="hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="inline" aria-hidden="true" />
            </a>

            <a
              href="#"
              className="hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="inline" aria-hidden="true" />
            </a>

            <a
              href="#"
              className="hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord className="inline" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
