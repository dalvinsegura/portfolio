"use client";

import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-700 rounded-lg p-6 shadow-lg"
    >
      <p className="text-gray-300 mb-4">{testimonial.content}</p>
      <div className="font-bold">{testimonial.name}</div>
      <div className="text-gray-400">{testimonial.role}</div>
    </motion.div>
  );
}
