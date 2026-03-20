"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiSocketdotio, SiPostgresql, SiMongodb, SiRedis, SiPrisma, 
  SiDocker, SiVercel, SiRender, SiGit, SiGithub, SiPostman, SiCplusplus, SiPython
} from "react-icons/si";
import { FaAws, FaCss3Alt } from "react-icons/fa";
import { Server } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function SkillsSection() {
  const { lang } = useLanguage();
  const tr = t[lang].skills;
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      color: "from-primary/20",
      borderColor: "group-hover:border-primary/50",
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff" },
        { name: "REST APIs", icon: Server, color: "#A78BFA" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
      ],
      color: "from-secondary/20",
      borderColor: "group-hover:border-secondary/50",
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      ],
      color: "from-accent/20",
      borderColor: "group-hover:border-accent/50",
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Vercel", icon: SiVercel, color: "#ffffff" },
        { name: "Render", icon: SiRender, color: "#46E3B7" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ],
      color: "from-success/20",
      borderColor: "group-hover:border-success/50",
    },
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
      ],
      color: "from-indigo-500/20",
      borderColor: "group-hover:border-indigo-500/50",
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title={tr.title} 
          subtitle={tr.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <GlassCard 
              key={category.title} 
              delay={index * 0.1}
              className={`group border-white/5 transition-colors duration-300 ${category.borderColor} ${category.title === "Languages" ? "md:col-span-2 lg:col-span-4" : ""}`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} to-transparent`} />
              
              <h3 className="text-2xl font-bold text-white mb-6 mt-2">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-white/5 text-text-main border border-white/10 cursor-default transition-all duration-300 shadow-md"
                  >
                    <skill.icon size={18} style={{ color: skill.color }} className="drop-shadow-[0_0_8px_currentColor]" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 -left-[10%] w-[30%] h-[40%] bg-secondary/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
    </section>
  );
}
