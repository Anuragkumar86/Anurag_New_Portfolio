"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiPostgresql, SiTailwindcss } from "react-icons/si";

export default function HeroFloatingIcons() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const icons = [
    { Icon: SiReact, color: "#61DAFB", size: 48, defaultPos: { x: "10%", y: "20%" }, factor: 0.05 },
    { Icon: SiNextdotjs, color: "#ffffff", size: 56, defaultPos: { x: "80%", y: "15%" }, factor: -0.04 },
    { Icon: SiNodedotjs, color: "#339933", size: 64, defaultPos: { x: "70%", y: "70%" }, factor: 0.06 },
    { Icon: SiTypescript, color: "#3178C6", size: 40, defaultPos: { x: "20%", y: "80%" }, factor: -0.03 },
    { Icon: SiPostgresql, color: "#4169E1", size: 52, defaultPos: { x: "40%", y: "10%" }, factor: 0.02 },
    { Icon: SiTailwindcss, color: "#06B6D4", size: 44, defaultPos: { x: "90%", y: "50%" }, factor: -0.05 },
    { Icon: SiReact, color: "#61DAFB", size: 32, defaultPos: { x: "50%", y: "85%" }, factor: 0.04 },
    { Icon: SiNextdotjs, color: "#ffffff", size: 28, defaultPos: { x: "5%", y: "60%" }, factor: -0.02 },
    { Icon: SiTypescript, color: "#3178C6", size: 36, defaultPos: { x: "60%", y: "25%" }, factor: 0.03 },
    { Icon: SiTailwindcss, color: "#06B6D4", size: 24, defaultPos: { x: "30%", y: "40%" }, factor: -0.06 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((item, index) => {
        const xOffset = mousePosition.x * item.factor;
        const yOffset = mousePosition.y * item.factor;

        return (
          <motion.div
            key={index}
            className="absolute opacity-20 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_15px_currentColor]"
            style={{
              left: item.defaultPos.x,
              top: item.defaultPos.y,
              color: item.color,
            }}
            animate={{
              x: xOffset,
              y: yOffset,
              rotate: mousePosition.x * 0.01 * (index % 2 === 0 ? 1 : -1),
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        );
      })}
    </div>
  );
}
