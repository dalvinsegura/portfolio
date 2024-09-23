"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import packiePreview from "../../public/packie-preview.webp";
import educusPreview from "../../public/educus-preview.webp";

// Simulated project data
const projects = [
  {
    id: "packie-app",
    title: "Packie App",
    shortDescription:
      "Packie is a mobile and web application designed to help small businesses manage and track deliveries efficiently.",
    image: packiePreview,
  },
  {
    id: "educus",
    title: "Educus",
    shortDescription:
      "The most affordable and effective way to track your study time.",
    image: educusPreview,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.shortDescription}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
