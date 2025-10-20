"use client";

import { motion } from "framer-motion";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { useRef } from "react";
import { EXPERIENCES } from "@/data";

export default function Home() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleBubbleClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-screen min-h-screen items-center bg-[#F9FAFB] relative">

      {/* Introduction */}
      <div className="flex flex-col lg:w-[55%] md:w-[80%] h-fit">
        <div className="flex flex-col w-[80%] min-h-screen gap-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mt-48"
          >
            Hi, I'm Donghao 👋
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row text-sm gap-4"
          >
            <a
              href="https://github.com/saintsauceee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2 hover:text-gray-600 transition-colors"
            >
              <FaGithub className="h-5 w-5" aria-hidden />
              Saintsauceee
            </a>
            <a
              href="https://www.linkedin.com/in/donghao-zeng/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2 hover:text-gray-600 transition-colors"
            >
              <FaLinkedin className="h-5 w-5" aria-hidden />
              Donghao Zeng
            </a>
            <a
              href="mailto:t.donghao.zeng@gmail.com"
              className="flex flex-row gap-2 hover:text-gray-600 transition-colors"
            >
              <MdEmail className="h-5 w-5" aria-hidden />
              t.donghao.zeng@gmail.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm mx-auto leading-relaxed"
          >
            I'm currently a 3rd year Computer Science undergrad at <span className="italic">McGill University</span> with experience in fullstack development and AI systems.
            Previously, I have built end-to-end software at <span className="italic">Digitech Payments</span> and <span className="italic">Group Imi</span>,
            from hybrid RAG backends to a web-based video editor, focusing on performance, clean code, and seamless UX.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 text-sm"
          >
            Some of my interests include:
            <ul className="list-disc list-inside space-y-2">
              <li>Building fun, user-centric tools that make everyday tasks easier</li>
              <li>Exploring LLM applications and vector databases</li>
              <li>Reinforcement Learning techniques on multimodal LLMs</li>
              <li>Always learning and experimenting with new technologies!</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-4 text-sm"
          >
            I also have interests outside of programming!

            <span>
              I love to cook delicious meals for my girlfriend and edit extremely long hours of video footage for non-profit organizations.
              And of course, I'm absolutely obsessed with eating ALL the yummy food in the world!
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center mt-32 cursor-pointer group"
            onClick={handleBubbleClick}
          >
            <span className="w-3 h-3 rounded-full mb-1 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 opacity-40 shadow-md transition-opacity group-hover:opacity-90 group-active:opacity-40 duration-300"></span>
            <span className="animate-aesthetic-float group-hover:opacity-60 group-active:opacity-40 transition-opacity">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b6b6d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </motion.div>

          <style jsx global>{`
          @keyframes aesthetic-float {
            0%, 100% { transform: translateY(0); opacity: 0.7; }
            50% { transform: translateY(8px); opacity: 1; }
          }
          .animate-aesthetic-float {
            animation: aesthetic-float 1.6s infinite;
            display: inline-block;
          }
        `}</style>
        </div>

      </div>

      {/* Resume */}
      <div className="flex flex-col lg:w-[55%] md:w-[80%]">
        <div ref={nextSectionRef} className="flex flex-col w-[80%] min-h-screen gap-12 mx-auto p-2">
          <div className="mt-32">
            <p>Here goes my journey!</p>
          </div>
          {EXPERIENCES.map((experience, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col text-md gap-4">
                  <div className="flex flex-row justify-between">
                    <p>{experience.role} @ {experience.company}</p>
                    <p>{experience.period}</p>
                  </div>
                  <div className="flex flex-row gap-1 text-xs">
                    Technologies:
                    {experience.technologies.map((technology, index) => {
                      return (
                        <p key={index}>{technology}</p>
                      )
                    })}
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    {experience.bullets.map((bullet, index) => {
                      return (
                        <div key={index}>
                          {bullet}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}
