"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { Orbitron } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

import {
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiVercel,
} from "react-icons/si";
import { SiFlutter, SiGit } from "react-icons/si";

import { FaReact, FaPython, FaAws } from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss, SiTensorflow } from "react-icons/si";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import CursorGlow from "@/components/CursorGlow";
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600"],
});
export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <main className="bg-black text-white overflow-x-hidden pt-24">
      <CursorGlow />

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-red-600/20 blur-[220px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[180px]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 md:gap-10 px-5 md:px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <a
            href="#about"
            className={`${orbitron.className} font-bold text-lg md:text-xl tracking-[2px] md:tracking-[3px] transition-all duration-300 hover:text-white hover:[text-shadow:0_0_15px_white]`}
          >
            HASEEB<span className="text-red-500">.</span>
          </a>

          <div
            className={`${spaceGrotesk.className} flex gap-4 md:gap-8 text-xs md:text-sm relative tracking-wide`}
          >
            <a
              href="#about"
              className={`relative transition-all duration-300 ${
                activeSection === "about"
                  ? "text-white drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              About
              {activeSection === "about" && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                />
              )}
            </a>

            <a
              href="#projects"
              className={`relative transition-all duration-300 ${
                activeSection === "projects"
                  ? "text-white drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Projects
              {activeSection === "projects" && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                />
              )}
            </a>

            <a
              href="#skills"
              className={`relative transition-all duration-300 ${
                activeSection === "skills"
                  ? "text-white drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Skills
              {activeSection === "skills" && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                />
              )}
            </a>

            <a
              href="#contact"
              className={`relative transition-all duration-300 ${
                activeSection === "contact"
                  ? "text-white drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Contact
              {activeSection === "contact" && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                />
              )}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-8 lg:pt-0 -mt-6 lg:-mt-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-[4px] text-sm mb-6">
              Computer Science Enthusiast
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[0.95] text-center lg:text-left">
              Syed
              <br />
              Mohammad
              <br />
              <span className="text-red-500">Haseeb</span>
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Building AI-powered solutions, web applications, and accessible
              technology that solve real-world problems.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
              <Link
                href="#projects"
                className="bg-red-600 hover:bg-red-700 hover:shadow-[0_0_50px_rgba(239,68,68,0.8)] transition-all duration-300 px-6 py-3 rounded-full hover:scale-105"
              >
                View Projects
              </Link>

              <a
                href="https://github.com/Haseeb123786"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/haseeb-akbar-379b9a1aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 lg:mt-16">
              <div className="border border-white/10 p-4 rounded-xl">
                <h3 className="text-2xl font-bold">2nd</h3>
                <p className="text-zinc-500 text-sm">Hackathon Place</p>
              </div>

              <div className="border border-white/10 p-4 rounded-xl">
                <h3 className="text-2xl font-bold">AWS</h3>
                <p className="text-zinc-500 text-sm">Certified</p>
              </div>

              <div className="border border-white/10 p-4 rounded-xl">
                <h3 className="text-2xl font-bold">AI</h3>
                <p className="text-zinc-500 text-sm">ML Focused</p>
              </div>

              <div className="border border-white/10 p-4 rounded-xl">
                <h3 className="text-2xl font-bold">2028</h3>
                <p className="text-zinc-500 text-sm">Graduation</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center -translate-y-1">
            <Link href="#projects" className="relative block">
              <div className="absolute inset-0 rounded-full bg-red-600 blur-[100px] opacity-40"></div>

              <Image
                src="/profile.jpg"
                alt="Haseeb"
                width={450}
                height={450}
                priority
                className="relative rounded-full lg:rounded-3xl border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_100px_rgba(239,68,68,0.5)] cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-10 text-center">
            About <span className="text-red-500">Me</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-8 text-center lg:text-left">
            I am a B.Tech Computer Science Engineering student at ITS
            Engineering College, Greater Noida, currently entering my third
            year.
            <br />
            <br />
            My interests lie in Artificial Intelligence, Machine Learning, Web
            Development, and Cloud Computing. I enjoy building practical
            software that creates meaningful real-world impact.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 lg:mb-16 text-center">
            Featured <span className="text-red-500">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* DISHA */}
            <div className="border border-red-500/30 bg-zinc-900/40 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_80px_rgba(239,68,68,0.35)]">
              <span className="text-red-500 font-semibold">
                🏆 2nd Place Winner
              </span>

              <h3 className="text-3xl font-bold mt-4">DISHA (दिशा)</h3>

              <p className="mt-4 text-zinc-400">
                AI-powered offline navigation assistant for visually impaired
                users.
              </p>

              <ul className="mt-6 space-y-2 text-zinc-300">
                <li>• Real-time obstacle detection</li>
                <li>• Depth estimation</li>
                <li>• 4-level risk classification</li>
                <li>• Offline navigation support</li>
                <li>• Instant audio feedback</li>
              </ul>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="https://flutter.dev"
                  target="_blank"
                  className="bg-red-500/10 px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.7)]"
                >
                  Flutter
                </a>

                <a
                  href="https://en.wikipedia.org/wiki/YOLO_(software)"
                  target="_blank"
                  className="bg-red-500/10 px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.7)]"
                >
                  YOLOv8
                </a>

                <a
                  href="https://github.com/isl-org/MiDaS"
                  target="_blank"
                  className="bg-red-500/10 px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.7)]"
                >
                  MiDaS
                </a>

                <a
                  href="https://www.tensorflow.org/lite"
                  target="_blank"
                  className="bg-red-500/10 px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.7)]"
                >
                  TFLite
                </a>
              </div>
              <div className="mt-8 flex justify-center">
                <a
                  href="https://github.com/Haseeb123786/Disha-Navigation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center
    w-24 h-14 rounded-2xl
    border border-white/15
    bg-transparent
    transition-all duration-300
    hover:scale-105
    hover:border-blue-500
    hover:shadow-[0_0_10px_rgba(59,130,246,0.6),0_0_25px_rgba(59,130,246,0.45),0_0_45px_rgba(59,130,246,0.3)]"
                >
                  <FaGithub
                    size={30}
                    className="text-white transition-all duration-300
      group-hover:text-blue-400"
                  />
                </a>
              </div>
            </div>

            {/* Chess */}
            <div className="border border-white/10 p-8 rounded-3xl transition-all duration-500 hover:border-red-500 hover:-translate-y-3 hover:shadow-[0_0_80px_rgba(239,68,68,0.35)]">
              {" "}
              <span className="text-yellow-500 font-semibold">
                ♟ Solo Project
              </span>
              <h3 className="text-3xl font-bold mt-4">
                Voice Controlled Chess
              </h3>
              <p className="mt-4 text-zinc-400">
                Full hands-free chess game powered by speech recognition.
              </p>
              <ul className="mt-6 space-y-2 text-zinc-300">
                <li>• Voice command gameplay</li>
                <li>• Speech-to-text moves</li>
                <li>• Move validation</li>
                <li>• Chess engine integration</li>
                <li>• Audio move feedback</li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="https://www.python.org"
                  target="_blank"
                  className="bg-white/10 px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] hover:text-white"
                >
                  Python
                </a>

                <a
                  href="https://en.wikipedia.org/wiki/Speech_recognition"
                  target="_blank"
                  className="bg-white/10 px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] hover:text-white"
                >
                  Speech Recognition
                </a>

                <a
                  href="https://en.wikipedia.org/wiki/Chess_engine"
                  target="_blank"
                  className="bg-white/10 px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] hover:text-white"
                >
                  Chess Engine
                </a>
              </div>
              <div className="mt-8 flex justify-center">
                <a
                  href="https://github.com/Haseeb123786/Voice-Controlled-Chess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center
    w-24 h-14 rounded-2xl
    border border-white/15
    bg-transparent
    transition-all duration-300
    hover:scale-105
    hover:border-blue-500
    hover:shadow-[0_0_15px_rgba(59,130,246,0.8),0_0_35px_rgba(59,130,246,0.6),0_0_60px_rgba(59,130,246,0.4)]"
                >
                  <FaGithub
                    size={30}
                    className="text-white transition-all duration-300 group-hover:text-blue-400"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">
            Skills & <span className="text-red-500">Technologies</span>
          </h2>

          <p className="text-zinc-400 mb-12 text-center">
            Tools and technologies I work with.
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { name: "React", icon: <FaReact className="text-cyan-400" /> },
              { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
              {
                name: "Tailwind",
                icon: <SiTailwindcss className="text-cyan-500" />,
              },
              {
                name: "Python",
                icon: <FaPython className="text-yellow-400" />,
              },
              {
                name: "Node.js",
                icon: <SiNodedotjs className="text-green-500" />,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-600" />,
              },
              {
                name: "Express",
                icon: <SiExpress className="text-gray-300" />,
              },
              {
                name: "TypeScript",
                icon: <SiTypescript className="text-blue-500" />,
              },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-300" />,
              },
              { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
              { name: "GitHub", icon: <FaGithub className="text-white" /> },
              { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
              {
                name: "TensorFlow Lite",
                icon: <SiTensorflow className="text-orange-500" />,
              },
              { name: "AWS", icon: <FaAws className="text-orange-400" /> },
              { name: "Vercel", icon: <SiVercel className="text-white" /> },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300"
              >
                <span className="text-xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-6xl font-bold text-center lg:text-left">
              Let's <span className="text-red-500">Connect</span>
            </h2>

            <p className="mt-6 text-zinc-400 text-lg text-center lg:text-left">
              Open to internships, collaborations, hackathons and exciting
              software projects.
            </p>

            {/* Book Meeting */}
            <a
              href="https://cal.com/mohammad-haseeb-sayed-qbzmav/portfolio-call"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:scale-[1.02] transition-all duration-300"
            >
              <FaCalendarAlt size={28} />
              <div>
                <h3 className="font-semibold">Book a Meeting</h3>
                <p className="text-zinc-400 text-sm">
                  Schedule a 30-minute call with me
                </p>
              </div>
            </a>

            {/* Available */}
            <div className="mt-6 p-5 rounded-2xl border border-green-500/20 bg-green-500/5 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-[1.02] transition-all duration-300">
              <p className="text-green-400 font-medium">
                ● Available for internships & freelance projects
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <form
              action="https://formsubmit.co/ha741183@gmail.com"
              method="POST"
              className="space-y-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.7)] focus:border-red-500 focus:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.7)] focus:border-red-500 focus:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300 outline-none"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                required
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.7)] focus:border-red-500 focus:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300 outline-none resize-none"
              />
              <div className="mt-8 flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="px-8 py-4 bg-red-600 rounded-2xl hover:bg-red-700 hover:shadow-[0_0_40px_rgba(239,68,68,0.7)] transition-all duration-300 -mt-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-14 flex-wrap">
          <a
            href="mailto:ha741183@gmail.com"
            className="p-4 rounded-xl border border-white/10 hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope size={24} />
          </a>

          <a
            href="https://github.com/Haseeb123786"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-white/10 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/haseeb-akbar-379b9a1aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-white/10 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://www.instagram.com/haseeb.syed72/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-white/10 hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] hover:scale-110 transition-all duration-300"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="https://x.com/Haseeb85008238"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-white/10 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:scale-110 transition-all duration-300"
          >
            <FaXTwitter size={24} />
          </a>
        </div>
        <div className="mt-12 text-center text-zinc-500 text-sm">
          © 2026 Designed & Developed by Syed Mohammad Haseeb.
        </div>
      </section>
    </main>
  );
}
