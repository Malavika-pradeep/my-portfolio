import React, { useState, useEffect, useCallback } from 'react';
import { ArrowDown, Brain, Zap, Terminal } from "lucide-react";

// --- ScrambledText Component ---

/**
 * Animates text from a series of random characters to the target word.
 * @param {object} props
 * @param {string} props.text - The final text to reveal.
 * @param {string} [props.className] - Tailwind classes for styling the text.
 * @param {number} [props.delay=0] - Initial delay before starting the scramble animation (in ms).
 * @param {number} [props.interval=40] - The interval (ms) between each animation frame.
 * @param {number} [props.scrambleSteps=10] - How many random characters to cycle through before revealing the final one.
 */
const ScrambledText = ({ 
    text: initialText, 
    className = '', 
    delay = 0, 
    interval = 40, 
    scrambleSteps = 10 
}) => {
    const CHARS = "ArtificialIntelligenceMachineLearning!@#$";
    const [displayText, setDisplayText] = useState('');
    const targetText = initialText.trim();
    
    const getRandomChar = useCallback(() => {
        return CHARS[Math.floor(Math.random() * CHARS.length)];
    }, [CHARS]);

    useEffect(() => {
        let frame = 0; 
        let charScrambleCount = 0; 
        let timeoutId;
        
        // Initial state: fill with random characters
        setDisplayText(targetText.split('').map(() => getRandomChar()).join(''));
        
        const startAnimation = () => {
            const animate = () => {
                const newText = targetText.split('').map((char, index) => {
                    if (index < frame) {
                        return char;
                    }
                    
                    if (index === frame) {
                        if (charScrambleCount >= scrambleSteps) { 
                            frame++;
                            charScrambleCount = 0;
                            return char;
                        } else {
                            charScrambleCount++;
                            return getRandomChar();
                        }
                    }
                    
                    return getRandomChar(); 
                }).join('');
                
                setDisplayText(newText);
                
                if (frame < targetText.length) {
                    timeoutId = setTimeout(animate, interval);
                } else {
                    setDisplayText(targetText);
                }
            };
            
            animate();
        };

        const initialDelayId = setTimeout(startAnimation, delay);

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(initialDelayId);
        };
    }, [targetText, delay, interval, getRandomChar, scrambleSteps]);

    return (
        <span className={className}>
            {displayText}
        </span>
    );
};

// --- HeroSection Component (Updated) ---

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span> Hi, I'm</span>
            <ScrambledText
                text=" Malavika"
                className="text-primary ml-2"
                delay={0}
                scrambleSteps={8}
            />
            <ScrambledText
                text=" Pradeep"
                className="text-gradient ml-2"
                delay={300} // Start this one slightly later
                scrambleSteps={8}
            />
          </h1>

          <p 
                className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto opacity-0 animated-fade-in" 
                style={{ animationDelay: '2.0s', animationFillMode: 'forwards' }}
            >
                {/* Corrected max-2-2xl typo here */}
            AI Engineer | Researcher | Tech Enthusiast
          </p>

          <div 
                className="pt-4 opacity-0 animated-fade-in" 
                style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}
            >
            <a
              href="#projects"
              className="cosmic-button"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
         >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer opacity-0 animated-fade-in"
        style={{ animationDelay: '3.0s', animationFillMode: 'forwards' }}
      >
        <span className="text-sm text-slate-500 mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-indigo-400" />
      </a>
    </section>
  );
};