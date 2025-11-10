import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

export const AboutSection = () => {
  const [time, setTime] = useState("");

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

  return (
    <section id="about" className="py-24 px-6 bg-black text-white">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <div className="relative w-[320px] h-[420px] rounded-xl overflow-hidden shadow-2xl">
            {/* Replace with your image path */}
            <img
              src="public/project/wildlife.png"
              alt="Profile"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute bottom-6 left-6 text-white space-y-2">
              <h2 className="text-3xl font-signature">Malavika Pradeep</h2>
              <p className="uppercase tracking-wide text-sm">
                AI Engineer and Researcher
              </p>
            </div>
          </div>
        </div>

  {/* Right Side - Text Content */}
  <div className="space-y-6 leading-relaxed text-left">
          <p>
            Renowned for my <span className="font-semibold">innovative approach</span> to AI and cognitive computing, 
            I began my journey blending data science with creativity, building 
            <span className="font-semibold"> intelligent and explainable AI systems</span> that drive real-world impact.
          </p>

          <p>
            My research-driven design philosophy enables me to 
            <span className="font-semibold"> lead interdisciplinary projects</span> in healthcare, cognition, and 
            brain–heart interaction, consistently advancing the boundaries of 
            <span className="font-semibold"> multimodal AI</span> and computational neuroscience.
          </p>

          <p>
            Currently, I collaborate on <span className="font-semibold">research-based and contract projects</span>, 
            pushing the frontiers of <span className="font-semibold">AI-driven analysis, signal processing, and human–AI symbiosis.</span>
          </p>

          <div>
            <p className="text-lg font-medium mt-8">
              Based and working in <span className="font-semibold">India 🇮🇳</span>
            </p>
            <p className="text-3xl font-bold mt-2">{time} <span className="text-sm">(IST)</span></p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-8 text-2xl">
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
          </div>
        </div>
      </div>
    </section>
  );
};
