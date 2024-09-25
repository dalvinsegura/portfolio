"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaReact, FaFireAlt, FaChrome } from "react-icons/fa";
import {
  SiExpo,
  SiPosthog,
  SiSentry,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiPaypal,
  SiClerk,
} from "react-icons/si";

const projectsData = {
  "packie-app": {
    title: "Packie App",
    description:
      "Packie is a mobile and web application designed to help small businesses manage and track deliveries efficiently. Currently in closed beta, Packie offers real-time delivery updates and easy-to-use features that streamline communication between senders and recipients. The app is built using Expo SDK and Firebase, ensuring a smooth and reliable user experience.",
    technologies: ["React Native", "Expo SDK", "Firebase", "PostHog", "Sentry"],
    challenges: [
      {
        challenge:
          "Gaining enough beta testers to move forward with public release",
        solution:
          "We're currently working on attracting more beta testers through social media outreach and collaborations with small businesses. The goal is to get 20 active users testing the app consistently.",
      },
      {
        challenge: "Handling debugging and stability in a cross-platform app",
        solution:
          "Using Sentry and PostHog, we improved our error tracking and real-time analytics, allowing us to debug issues faster and optimize the user experience in both Android and iOS environments.",
      },
    ],
    results: [
      "Successfully launched in closed beta on Google Play",
      "Significant improvements in debugging skills through Expo SDK and React Native",
      "Continuous feedback from early users to enhance the app's functionality and stability",
    ],
    images: ["/packie/preview1.webp"],
    youtubeVideo:
      "https://www.youtube.com/embed/cTKiTPHt8PM?si=JPwQAf-xtRECkvje",
    gif: "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/Recording%202024-09-23%20174317-GE3dhaJS4zUxeSvSm1DcxlTAAqPeBT.webm",
    projectLink: "https://packie.vercel.app/",
    githubLink: "https://github.com/dalvinsegura/packie-mobile",
    testimonials: [],
    lessonsLearned: [
      "The importance of detailed error tracking and logging for smoother debugging",
      "The value of beta testers in identifying issues and improving features before public launch",
      "Balancing the development of new features while maintaining app stability",
    ],
    nextSteps: [
      "Implement Google Maps API for real-time courier location tracking",
      "Open the app for public release once we reach our beta testing goals",
      "Develop more analytics tools to improve delivery efficiency and business insights",
    ],
    projectStatus: "Closed Beta",
  },
  educus: {
    title: "EDUCUS",
    description:
      "EDUCUS is a Chrome extension designed to help students track their study time effectively, particularly for online courses like Coursera's Google Data Analytics Professional Certificate program. The tool was developed by Dalvin Segura, who faced challenges in managing study hours while pursuing certification. Frustrated by the high costs of existing tools, Dalvin created EDUCUS to provide an affordable solution for students worldwide, offering a subscription model at just $1.99 per month.",
    technologies: [
      "Next.js",
      "Chrome Extension",
      "Tailwind",
      "Supabase",
      "Clerk",
      "PayPal",
    ],
    challenges: [
      {
        challenge: "Integrating PayPal for subscription management",
        solution:
          "Implementing PayPal was a significant challenge due to its deprecated SDK. After extensive debugging and learning to use the new API, the integration now works flawlessly.",
      },
      {
        challenge: "Ensuring accurate time tracking and data visualization",
        solution:
          "Developed a dashboard that connects with the extension to display key performance indicators (KPIs) related to student performance.",
      },
    ],
    results: [
      "Successfully launched the extension on the Chrome Web Store.",
      "Implemented a user-friendly dashboard that provides insights into study habits.",
      "Established a low-cost subscription model that appeals to students globally.",
    ],
    images: [
      "/educus/preview2.webp",
      "/educus/preview1.webp",
      "/educus/preview3.webp",
    ],
    youtubeVideo: null,
    gif: "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/landing-showcase-fmcXbCAKqqnOXu4ZaAWCT0193rQLIV.webm",
    projectLink: "https://educus.vercel.app/",
    githubLink: "https://github.com/dalvinsegura/educus",
    testimonials: [],
    lessonsLearned: [
      "The importance of user feedback in refining features and functionality.",
      "Continuous learning is essential when integrating new technologies like payment APIs.",
      "Balancing feature development with maintaining a stable user experience.",
    ],
    nextSteps: [
      "Implement AI-based features to enhance time tracking and productivity suggestions.",
      "Expand support for additional learning platforms beyond Coursera.",
      "Continue improving user experience based on feedback and analytics.",
    ],
    projectStatus: "Production",
  },
};

const techIcons: { [key: string]: JSX.Element } = {
  "React Native": <FaReact />,
  "Expo SDK": <SiExpo />,
  Firebase: <FaFireAlt />,
  PostHog: <SiPosthog />,
  Sentry: <SiSentry />,
  "Next.js": <SiNextdotjs />,
  "Chrome Extension": <FaChrome />,
  Tailwind: <SiTailwindcss />,
  Supabase: <SiSupabase />,
  Clerk: <SiClerk />,
  PayPal: <SiPaypal />,
};

const GradientCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg ${className}`}
  >
    {children}
  </div>
);

const ProjectStatus = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "production":
        return "bg-green-500";
      case "closed beta":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
        status
      )} text-white`}
    >
      {status}
    </div>
  );
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    setProject(projectsData[id as keyof typeof projectsData]);
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-slate-50">
            {project.title}
          </h1>
          <ProjectStatus status={project.projectStatus} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <GradientCard>
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Project Overview
              </h2>
              <p className="text-gray-300">{project.description}</p>
            </GradientCard>

            <GradientCard>
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-700 rounded-full px-3 py-1"
                  >
                    <span className="mr-2 text-xl">
                      {techIcons[tech] || null}
                    </span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </GradientCard>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              Challenges and Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.challenges.map((item: any, index: number) => (
                <GradientCard key={index} className="flex flex-col h-full">
                  <h3 className="font-bold mb-2 text-yellow-400">Challenge:</h3>
                  <p className="mb-4 text-gray-300 flex-grow">
                    {item.challenge}
                  </p>
                  <h3 className="font-bold mb-2 text-green-400">Solution:</h3>
                  <p className="text-gray-300">{item.solution}</p>
                </GradientCard>
              ))}
            </div>
          </div>

          <GradientCard className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              Results and Achievements
            </h2>
            <ul className="list-disc list-inside text-gray-300">
              {project.results.map((result: string, index: number) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </GradientCard>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.images.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {project.youtubeVideo && (
            <GradientCard className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Project Showcase
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={project.youtubeVideo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg w-full h-full"
                ></iframe>
              </div>
            </GradientCard>
          )}

          {project.gif && (
            <GradientCard className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Demo</h2>
              <video autoPlay loop muted className="rounded-lg mx-auto w-full">
                <source src={project.gif} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </GradientCard>
          )}

          <div className="flex gap-4 mt-8">
            <Link
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex-1 text-center"
            >
              Live Project
            </Link>
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex-1 text-center"
            >
              GitHub Repository
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <GradientCard>
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Lessons Learned
              </h2>
              <ul className="list-disc list-inside text-gray-300">
                {project.lessonsLearned.map((lesson: string, index: number) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </GradientCard>

            <GradientCard>
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Next Steps
              </h2>
              <ul className="list-disc list-inside text-gray-300">
                {project.nextSteps.map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </GradientCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
