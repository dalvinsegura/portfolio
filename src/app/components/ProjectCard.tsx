"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={project.link}
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
}
