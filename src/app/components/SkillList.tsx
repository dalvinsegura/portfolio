"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillListProps {
  skills: Skill[];
}

export default function SkillList({ skills }: SkillListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center shadow-lg"
        >
          <div className="text-4xl mb-2">{skill.icon}</div>
          <span className="text-center">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
