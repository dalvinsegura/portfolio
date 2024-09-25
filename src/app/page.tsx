"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TypewriterEffect from "@/app/components/TypewriterEffect";
import ProjectCard from "@/app/components/ProjectCard";
import SkillList from "@/app/components/SkillList";
import CertificateCarousel from "@/app/components/CertificateCarousel";
import AIChat from "@/app/components/AIChat";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  SiExpo,
  SiFirebase,
  SiNextdotjs,
  SiSupabase,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { TbBrandReactNative, TbFileTypeSql } from "react-icons/tb";
import { FaChrome } from "react-icons/fa";

import packiePreview from "../../public/packie-preview.webp";
import educusPreview from "../../public/educus-preview.webp";
import { FaWandMagicSparkles } from "react-icons/fa6";

export default function Home() {
  const [showAIChat, setShowAIChat] = useState(false);

  const projects = [
    {
      title: "Packie",
      description:
        "Packie is an app that simplifies delivery management with real-time tracking and easy communication between businesses, couriers, and customers.",
      image: packiePreview,
      video:
        "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/Recording%202024-09-23%20174317-GE3dhaJS4zUxeSvSm1DcxlTAAqPeBT.webm",
      technologies: ["React Native", "Expo", "Firebase"],
      link: "/projects/packie-app",
    },
    {
      title: "Educus",
      description:
        "The most affordable and effective way to track your study time.",
      image: educusPreview,
      video:
        "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/landing-showcase-fmcXbCAKqqnOXu4ZaAWCT0193rQLIV.webm",
      technologies: ["Next.js", "Supabase", "Chrome Extension"],
      link: "/projects/educus",
    },
  ];

  const skills = [
    { name: "React Native", icon: <TbBrandReactNative /> },
    { name: "Expo SDK", icon: <SiExpo /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Express.JS", icon: <SiExpress /> },
    { name: "SQL", icon: <TbFileTypeSql /> },
  ];

  const certificates = [
    "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/certificates/certificate%20(1)-ghNsaX6bW4YYrz7mW9no8xUKyqUhaA.webp",
    "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/certificate%20(6)-01OyL8sJjCQB86SvHGSkYXxryOaOy8.webp",
    "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/certificates/certificate%20(2)-tgiUeVXtM4E7XxXp2WwCickkz2rI0N.webp",
    "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/certificate%20(3)-thBzrhQHtihFdETiPMs4eI3V4ODelp.webp",
    "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/certificate%20(5)-G9oSiZRq78kdd2fGmse3JnlbXlpnUx.webp",
    "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/certificate%20(6)-01OyL8sJjCQB86SvHGSkYXxryOaOy8.webp",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover opacity-15"
        >
          <source
            src="https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/Untitled%20design%20(1)-wVRZ4xGNDpMVqDRgiBBc4DPbpZEA2v.webm"
            // type="video"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Dalvin Segura
            </h1>
            <TypewriterEffect text="Software Developer & Tech Entrepreneur" />
            <p className="mt-4 text-xl text-gray-300">
              Turning ideas into reality, one line of code at a time.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Get in Touch
              </Link>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
            <button
              onClick={() => setShowAIChat(true)}
              // let's add a gradint border to the button
              className="bg-transparent hover:bg-slate-300 text-white hover:text-red-800 py-3 px-6 rounded-xl transition duration-500 mt-4 border border-slate-300 flex items-center flex-1 inline-flex"
            >
              <FaWandMagicSparkles className="mr-2" /> Ask AI anything about me
            </button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-r from-gray-900 to-blue-900"
      >
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
              src="/dalvinsegura.webp"
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
              <strong> React Native</strong> and <strong>Expo.</strong> I've
              built cross-platform apps for iOS and Android, with backend
              experience using <strong>Express.js, PostgreSQL,</strong> and
              frontend work with <strong>Next.js.</strong>
            </p>
            <p className="text-gray-300">
              I'm the founder of <strong>Packie,</strong> a shipment tracking
              platform for small businesses, and developed
              <strong> Instarecibo,</strong> a receipt management app for
              property owners. Currently, I'm pursuing the
              <strong>
                {" "}
                Google Data Analytics Professional Certificate
              </strong>{" "}
              to explore <strong>data science</strong> and enhance my skills in
              data-driven decision-making. I'm passionate about solving problems
              through technology and continuously learning.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section
        id="certificates"
        className="py-20 bg-gradient-to-r from-gray-900 to-red-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            My Certificates
          </h2>
          <div className="py-20">
            {/* Added padding here */}
            <CertificateCarousel certificates={certificates} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-4 py-20 flex flex-col"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>
        <a
          href="mailto:dalvin@seguradev.com"
          className="w-52 text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 self-center"
        >
          Email Me
        </a>
      </section>

      {/* AI Chat Modal */}
      {showAIChat && <AIChat onClose={() => setShowAIChat(false)} />}
    </div>
  );
}
