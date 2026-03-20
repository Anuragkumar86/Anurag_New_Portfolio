"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowButton from "@/components/ui/GlowButton";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

export default function ContactSection() {
  const { lang } = useLanguage();
  const tr = t[lang].contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error('Error sending message');
      }
    } catch (error) {
      console.error('Failed to submit:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title={tr.title} 
          subtitle={tr.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-16 mt-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Let's build together</h3>
            <p className="text-text-main text-lg mb-10 leading-relaxed">
              Whether you have a project in mind, a role to fill, or just want to chat about tech, I'm always open to new connections and opportunities.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:anuragkr8651@gmail.com" className="flex items-center gap-3 text-white hover:text-primary transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/50 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <span className="font-medium">Email Me</span>
              </a>
              
              <a href="https://linkedin.com/in/anuragkumar86" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-[#0A66C2] transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#0A66C2]/50 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0A66C2]/20 text-[#0A66C2] group-hover:scale-110 transition-transform">
                  <Linkedin size={18} />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>

              <a href="https://twitter.com/anuragkr8651" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-[#1DA1F2] transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#1DA1F2]/50 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1DA1F2]/20 text-[#1DA1F2] group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </div>
                <span className="font-medium">Twitter / X</span>
              </a>

              <a href="https://instagram.com/_anurag_yadav_86" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-[#E1306C] transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#E1306C]/50 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E1306C]/20 text-[#E1306C] group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
                <span className="font-medium">Instagram</span>
              </a>

              <a href="https://github.com/anuragkumar86" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-white/90 transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/30 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white group-hover:scale-110 transition-transform">
                  <Github size={18} />
                </div>
                <span className="font-medium">GitHub</span>
              </a>

              <a href="https://leetcode.com/u/anuragkr8651/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-[#FFA116] transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FFA116]/50 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFA116]/20 text-[#FFA116] group-hover:scale-110 transition-transform">
                  <SiLeetcode size={18} />
                </div>
                <span className="font-medium">LeetCode</span>
              </a>

              <a href="https://www.hackerrank.com/profile/anuragkr8651" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-[#00EA64] transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#00EA64]/50 group col-span-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#00EA64]/20 text-[#00EA64] group-hover:scale-110 transition-transform">
                  <SiHackerrank size={18} />
                </div>
                <span className="font-medium">HackerRank — @anuragkr8651</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-bg-secondary/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-text-sub">{tr.name_label}</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20"
                placeholder={tr.name_placeholder}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-text-sub">{tr.email_label}</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20"
                placeholder={tr.email_placeholder}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-text-sub">{tr.message_label}</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-white/20"
                placeholder={tr.message_placeholder}
              />
            </div>

            <GlowButton 
              type="submit" 
              variant="primary" 
              className="w-full mt-2" 
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? (
                <><Loader2 className="animate-spin" size={18} /> {tr.sending}</>
              ) : isSuccess ? (
                <>{tr.success} ✨</>
              ) : (
                <>{tr.send} <Send size={18} /></>
              )}
            </GlowButton>
          </motion.form>
        </div>
      </div>
      
      {/* Background decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-2xl h-[200px] bg-primary/10 blur-[100px] rounded-t-[100%] pointer-events-none" />
    </section>
  );
}
