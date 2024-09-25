"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { SiExpo, SiFirebase, SiNextdotjs, SiSupabase } from "react-icons/si";
import { TbBrandReactNative, TbBrandChrome } from "react-icons/tb";

const techIcons: { [key: string]: JSX.Element } = {
  "React Native": <TbBrandReactNative />,
  Expo: <SiExpo />,
  Firebase: <SiFirebase />,
  "Next.js": <SiNextdotjs />,
  Supabase: <SiSupabase />,
  "Chrome Extension": <TbBrandChrome />,
};

export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  video: string;
  technologies: string[];
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        {isHovered ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center bg-gray-700 rounded-full px-3 py-1 text-sm"
            >
              {techIcons[tech]}
              <span className="ml-2">{tech}</span>
            </span>
          ))}
        </div>
        <Link
          href={project.link}
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}
