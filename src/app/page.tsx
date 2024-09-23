"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TypewriterEffect from "@/app/components/TypewriterEffect";
import ProjectCard, { Project } from "@/app/components/ProjectCard";
import SkillList from "@/app/components/SkillList";
import dalvinImg from "../public/dalvinsegura.webp";
import packiePreview from "../public/packie-preview.webp";
import educusPreview from "../public/educus-preview.webp";

export default function Home() {
  const projects = [
    {
      title: "Packie",
      description:
        "Packie is an app that simplifies delivery management with real-time tracking and easy communication between businesses, couriers, and customers.",
      image: packiePreview,
      technologies: ["React Native", "Expo", "Firebase"],
      link: "/projects/packie-app",
    },
    {
      title: "Educus",
      description:
        "The most affordable and effective way to track your study time.",
      image: educusPreview,
      technologies: ["Next.js", "Supabase", "Chrome Extension"],
      link: "/projects/educus",
    },
  ];

  const skills = [
    "React Native",
    "Expo SDK",
    "Express.js",
    "C#",
    "React.js",
    "Next.js",
    "Firebase",
    "SQL Server",
    "PostgreSQL",
    "Git/GitHub",
    "Tailwind CSS",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Dalvin Segura</h1>
          <TypewriterEffect text="Software Developer & Tech Entrepreneur" />
          <p className="mt-4 text-xl text-gray-300">
            Turning ideas into reality, one line of code at a time.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
          <SkillList skills={skills} />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={dalvinImg}
              alt="Dalvin Segura"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 mb-4">
              I'm <strong>Dalvin Segura</strong>, a software developer from the
              Dominican Republic specializing in{" "}
              <strong>mobile app development</strong> with
              <strong>React Native</strong> and <strong>Expo.</strong> I’ve
              built cross-platform apps for iOS and Android, with backend
              experience using <strong>Express.js, PostgreSQL,</strong> and
              frontend work with <strong>Next.js.</strong>
            </p>
            <p className="text-gray-300">
              I’m the founder of <strong>Packie,</strong> a shipment tracking
              platform for small businesses, and developed
              <strong>Instarecibo,</strong> a receipt management app for
              property owners. Currently, I'm pursuing the
              <strong>Google Data Analytics Professional Certificate</strong> to
              explore <strong>data science</strong> and enhance my skills in
              data-driven decision-making. I'm passionate about solving problems
              through technology and continuously learning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-4 py-20 flex flex-col"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>
        {/* <ContactForm /> */}
        {/* 
        Let's get in touch via email at
        */}
        <a
          href="mailto:dalvin@seguradev.com"
          className="w-52 text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6  rounded-full transition duration-300 self-center"
        >
          Email Me
        </a>
      </section>
    </div>
  );
}
