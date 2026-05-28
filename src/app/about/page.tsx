"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const SKILLS = [
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: FaJava, label: "Java", color: "#E76F00" },
  { icon: SiHtml5, label: "HTML", color: "#E34F26" },
  { icon: SiHtml5, label: "CSS", color: "#1572B6" },
  { icon: SiReact, label: "React.js", color: "#61DAFB" },
  { icon: SiExpress, label: "Express", color: "currentColor" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiMongodb, label: "NoSQL", color: "#47A248" },
  { icon: SiGit, label: "Git", color: "#F05032" },
];

const FACTS = [
  { label: "Location", value: "Ahemadabad, Gujarat" },
  { label: "Current", value: "MERN Intern · Concatstring Solutions" },
  { label: "Education", value: "B.Tech. IT · Ganpat University · 2026" },
  { label: "CGPA", value: "7.5 / 10.0" },
  {
    label: "Email",
    value: "udayp19052004@gmail.com",
    href: "mailto:udayp19052004@gmail.com",
  },
  { label: "Phone", value: "+91 7990650844", href: "tel:+917990650844" },
  {
    label: "GitHub",
    value: "udaypatell",
    href: "https://github.com/udaypatell",
  },
  {
    label: "LinkedIn",
    value: "uday-patel-7214b2286",
    href: "https://linkedin.com/in/uday-patel-7214b2286",
  },
];

const STRENGTHS = [
  "Proficient in Java and OOP",
  "Fast learner, passionate coder",
  "Strong teamwork and communication",
  "Good at problem-solving and algorithms",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay,
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
});

export default function AboutPage() {
  return (
    <div
      className="min-h-screen pt-24 pb-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            About
          </span>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-display mt-3 leading-tight"
            style={{ color: "var(--fg)" }}
          >
            The Developer Behind the Work
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
          {/* Bio + Facts */}
          <motion.div {...fadeUp(0.15)} className="space-y-8">
            <div className="space-y-4">
              <h2
                className="font-display text-2xl"
                style={{ color: "var(--fg)" }}
              >
                Uday Patel
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                Final-year Bachelor of Technology in Information Technology
                student at U.V. Patel College of Engineering, Kherva (Ganpat
                University), graduating May 2026.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                A dedicated developer with a passion for building full-stack web
                applications. Proficient in Java and OOP, quick to learn new
                technologies, and committed to writing clean, organized code
                while collaborating effectively with teams.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="space-y-2">
              <h3
                className="text-[11px] font-medium tracking-widest uppercase mb-3"
                style={{ color: "var(--fg-subtle)" }}
              >
                Key Strengths
              </h3>
              {STRENGTHS.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "var(--fg-muted)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  {s}
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="space-y-0">
              {FACTS.map(({ label, value, href }) => (
                <div
                  key={label}
                  className="flex gap-4 py-3 border-b text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="w-24 flex-shrink-0"
                    style={{ color: "var(--fg-subtle)" }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-1 link-underline break-all"
                      style={{ color: "var(--accent)" }}
                    >
                      {value}{" "}
                      {href.startsWith("http") && <FiExternalLink size={11} />}
                    </a>
                  ) : (
                    <span style={{ color: "var(--fg)" }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills + Core Subjects */}
          <div className="space-y-12">
            <motion.div {...fadeUp(0.25)}>
              <h3
                className="text-[11px] font-medium tracking-widest uppercase mb-5"
                style={{ color: "var(--fg-subtle)" }}
              >
                Tech Stack
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {SKILLS.map(({ icon: Icon, label, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.04 }}
                    className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-transform hover:-translate-y-1 cursor-default"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                    title={label}
                  >
                    <Icon size={20} style={{ color }} aria-hidden="true" />
                    <span
                      className="text-[9px] sm:text-[10px] font-medium text-center leading-tight"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.35)}>
              <h3
                className="text-[11px] font-medium tracking-widest uppercase mb-5"
                style={{ color: "var(--fg-subtle)" }}
              >
                Core Subjects
              </h3>
              <div className="space-y-0">
                {[
                  "Data Structures & Algorithms",
                  "Database Management Systems (DBMS)",
                  "Computer Networks (CN)",
                ].map((subject) => (
                  <div
                    key={subject}
                    className="flex justify-between items-center py-3 border-b text-sm"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span style={{ color: "var(--fg)" }}>{subject}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.45)}>
              <h3
                className="text-[11px] font-medium tracking-widest uppercase mb-5"
                style={{ color: "var(--fg-subtle)" }}
              >
                Education
              </h3>
              <div className="space-y-4">
                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    className="font-medium text-sm"
                    style={{ color: "var(--fg)" }}
                  >
                    B.Tech in Information Technology
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    U.V. Patel College of Engineering, Kherva (Ganpat
                    University)
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--fg-subtle)" }}
                  >
                    Sept 2022 – May 2026 · CGPA: 7.3/10.0
                  </p>
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    className="font-medium text-sm"
                    style={{ color: "var(--fg)" }}
                  >
                    HSC — 12th Science
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    Pioneer School Of Science, Patan
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--fg-subtle)" }}
                  >
                    May 2022 · 71%
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
