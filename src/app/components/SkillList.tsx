"use client";

import { motion } from "framer-motion";

export default function SkillList({ skills }: { skills: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          className="bg-red-600 text-white rounded-full px-4 py-2 m-2"
        >
          {skill}
        </motion.div>
      ))}
    </motion.div>
  );
}
