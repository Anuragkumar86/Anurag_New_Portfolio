"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import { SiCoursera } from "react-icons/si";
import { FaAward, FaShieldAlt, FaCode, FaRobot, FaJava } from "react-icons/fa";

export default function CertificatesSection() {
  const [showAll, setShowAll] = useState(false);
  const { lang } = useLanguage();
  const tr = t[lang].certificates;

  const certificates = [
    {
      title: "Foundation of Cybersecurity",
      issuer: "Google / Coursera",
      date: "2024",
      link: "/assets/certificates/COURSERA_FOUNDATION_CYBERSECURITY.pdf",
      color: "from-blue-500/20 to-transparent",
      Icon: FaShieldAlt,
      iconColor: "#4285F4",
    },
    {
      title: "Play It Safe: Manage Security Risks",
      issuer: "Google / Coursera",
      date: "2024",
      link: "/assets/certificates/COURSERA_Play_It_Safe_Manage_Security_Risks.pdf",
      color: "from-blue-400/20 to-transparent",
      Icon: FaShieldAlt,
      iconColor: "#4285F4",
    },
    {
      title: "Bits and Bytes of Computer Networking",
      issuer: "Google / Coursera",
      date: "2024",
      link: "/assets/certificates/Coursera_Bits_Bytes.pdf",
      color: "from-emerald-500/20 to-transparent",
      Icon: SiCoursera,
      iconColor: "#00897B",
    },
    {
      title: "Digital Systems",
      issuer: "Coursera",
      date: "2024",
      link: "/assets/certificates/Coursera_Digital_System.pdf",
      color: "from-purple-500/20 to-transparent",
      Icon: SiCoursera,
      iconColor: "#A855F7",
    },
    {
      title: "Fundamentals of Network Communication",
      issuer: "Coursera",
      date: "2024",
      link: "/assets/certificates/Coursera_Fundamentals_Network_Communication.pdf",
      color: "from-cyan-500/20 to-transparent",
      Icon: SiCoursera,
      iconColor: "#06B6D4",
    },
    {
      title: "Introduction to Hardware & OS",
      issuer: "IBM / Coursera",
      date: "2024",
      link: "/assets/certificates/Coursera_Introduction_Hardware_OS.pdf",
      color: "from-indigo-500/20 to-transparent",
      Icon: SiCoursera,
      iconColor: "#6366F1",
    },
    {
      title: "Kali Linux & Ethical Hacking",
      issuer: "Coursera",
      date: "2024",
      link: "/assets/certificates/Coursera_Kali_linux.pdf",
      color: "from-red-500/20 to-transparent",
      Icon: FaShieldAlt,
      iconColor: "#EF4444",
    },
    {
      title: "C++ Programming",
      issuer: "NeoCollab",
      date: "2023",
      link: "/assets/certificates/Neo_collab_C++_Certificate.pdf",
      color: "from-blue-600/20 to-transparent",
      Icon: FaCode,
      iconColor: "#00599C",
    },
    {
      title: "C Programming",
      issuer: "NeoCollab",
      date: "2023",
      link: "/assets/certificates/Neo_collab_C_Certificate.pdf",
      color: "from-yellow-500/20 to-transparent",
      Icon: FaCode,
      iconColor: "#F59E0B",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "NeoCollab",
      date: "2023",
      link: "/assets/certificates/Neo_collab_DSA_Certificate.pdf",
      color: "from-green-500/20 to-transparent",
      Icon: FaCode,
      iconColor: "#10B981",
    },
    {
      title: "Java Programming",
      issuer: "NeoCollab",
      date: "2024",
      link: "/assets/certificates/neoColab_JAVA.pdf",
      color: "from-orange-500/20 to-transparent",
      Icon: FaJava,
      iconColor: "#F97316",
    },
    {
      title: "Summer Training 2025",
      issuer: "Certificate of Completion",
      date: "2025",
      link: "/assets/certificates/Summer_Certificate_2025.pdf",
      color: "from-pink-500/20 to-transparent",
      Icon: FaAward,
      iconColor: "#EC4899",
    },
    {
      title: "AI/ML Workshop",
      issuer: "Workshop Certification",
      date: "2023",
      link: "/assets/certificates/ai_workshop_1123_certificate.pdf",
      color: "from-violet-500/20 to-transparent",
      Icon: FaRobot,
      iconColor: "#8B5CF6",
    },
    {
      title: "Ethical Hacking Introduction",
      issuer: "Certification",
      date: "2024",
      link: "/assets/certificates/ethical_hacking_introdustion_certificate.pdf",
      color: "from-red-400/20 to-transparent",
      Icon: FaShieldAlt,
      iconColor: "#F87171",
    },
    {
      title: "Affiliate Marketing",
      issuer: "Course Certificate",
      date: "2023",
      link: "/assets/certificates/How_to_become_succelful_affliate_marketer_Certificate.pdf",
      color: "from-amber-500/20 to-transparent",
      Icon: FaAward,
      iconColor: "#F59E0B",
    },
  ];

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title={tr.title} 
          subtitle={tr.subtitle}
        />

        <motion.div layout className="grid md:grid-cols-3 gap-6 mt-16">
          <AnimatePresence>
            {displayedCertificates.map((cert, index) => (
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                layout
                key={cert.title + index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-bg-secondary/50 border border-white/5 overflow-hidden flex flex-col items-center text-center cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform">
                  <cert.Icon size={28} style={{ color: cert.iconColor }} />
                </div>
                
                <h3 className="text-base font-bold text-white mb-1 relative z-10 leading-tight">{cert.title}</h3>
                <p className="text-text-sub text-sm font-medium mb-4 relative z-10">{cert.issuer}</p>
                
                <div className="mt-auto flex items-center gap-2 text-xs text-text-sub w-full justify-between relative z-10 pt-3 border-t border-white/5 group-hover:border-white/10">
                  <span>{cert.date}</span>
                  <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    View <ExternalLink size={12} />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {certificates.length > 6 && (
          <motion.div layout className="flex justify-center mt-12">
            <GlowButton variant="outline" onClick={() => setShowAll(!showAll)}>
               {showAll ? tr.show_less : tr.view_all} 
               {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </GlowButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}
