import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <CursorGlow />

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-red-600/20 blur-[220px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[180px]"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-black/30 border-b border-red-500/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#about"
            className="font-bold text-xl tracking-wider transition-all duration-300 hover:text-white hover:[text-shadow:0_0_15px_white]"
          >
            HASEEB<span className="text-red-500">.</span>
          </a>

          <div className="hidden md:flex gap-8 text-sm">
            <a
              href="#about"
              className="text-zinc-400 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_12px_white]"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-zinc-400 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_12px_white]"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-zinc-400 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_12px_white]"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-zinc-400 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_12px_white]"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-[4px] text-sm mb-6">
              Computer Science Enthusiast
            </p>

            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              Syed
              <br />
              Mohammad
              <br />
              <span className="text-red-500">Haseeb</span>
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-xl">
              Building AI-powered solutions, web applications, and accessible
              technology that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="#projects"
                className="bg-red-600 hover:bg-red-700 hover:shadow-[0_0_50px_rgba(239,68,68,0.8)] transition-all duration-300 px-6 py-3 rounded-full hover:scale-105"
              >
                View Projects
              </Link>

              <Link
                href="https://github.com/Haseeb123786"
                target="_blank"
                className="border border-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] hover:scale-105"
              >
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/haseeb-akbar-379b9a1aa/"
                target="_blank"
                className="border border-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] hover:scale-105"
              >
                LinkedIn
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
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

          <div className="flex justify-center">
            <Link href="#projects" className="relative block">
              <div className="absolute inset-0 rounded-full bg-red-600 blur-[100px] opacity-40"></div>

              <Image
                src="/profile.jpg"
                alt="Haseeb"
                width={450}
                height={450}
                priority
                className="relative rounded-3xl border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_100px_rgba(239,68,68,0.5)] cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-10">
            About <span className="text-red-500">Me</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-8">
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
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16">
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
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16">
            Skills & <span className="text-red-500">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Python",
              "C++",
              "JavaScript",
              "React",
              "Next.js",
              "Flutter",
              "Machine Learning",
              "YOLO",
              "AWS",
              "Git",
              "GitHub",
              "Tailwind CSS",
            ].map((skill) => (
              <div
                key={skill}
                className="border border-white/10 p-6 rounded-xl text-center transition-all duration-300 hover:border-red-500 hover:text-red-400 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold">
            Let's <span className="text-red-500">Connect</span>
          </h2>

          <p className="mt-8 text-zinc-400">
            Open to internships, collaborations and exciting projects.
          </p>

          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            <a
              href="mailto:ha741183@gmail.com"
              className="p-5 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
            >
              <FaEnvelope size={32} />
            </a>

            <a
              href="https://github.com/Haseeb123786"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <FaGithub size={32} />
            </a>

            <a
              href="https://www.linkedin.com/in/haseeb-akbar-379b9a1aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,119,181,0.5)]"
            >
              <FaLinkedin size={32} />
            </a>

            <a
              href="https://www.instagram.com/haseeb.syed72/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(225,48,108,0.5)]"
            >
              <FaInstagram size={32} />
            </a>

            <a
              href="https://x.com/Haseeb85008238"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <FaXTwitter size={32} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
