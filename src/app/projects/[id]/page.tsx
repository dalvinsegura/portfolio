"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import educusPreviewOne from "../../../public/educus/preview1.webp";
import educusPreviewTwo from "../../../public/educus/preview2.webp";
import educusPreviewThree from "../../../public/educus/preview3.webp";

import packiePreviewOne from "../../../public/packie/preview1.webp";

// Simulated project data
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
    images: [packiePreviewOne],
    youtubeVideo:
      "https://www.youtube.com/embed/cTKiTPHt8PM?si=JPwQAf-xtRECkvje", // Replace with actual video link when ready
    gif: "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/Recording%202024-09-23%20174317-GE3dhaJS4zUxeSvSm1DcxlTAAqPeBT.webm", // Replace with actual demo GIF when ready
    projectLink: "https://packie.vercel.app/",
    githubLink: "https://github.com/dalvinsegura/packie-mobile", // Replace with actual GitHub repo link
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
    images: [educusPreviewTwo, educusPreviewOne, educusPreviewThree],
    youtubeVideo: null,
    gif: "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/landing-showcase-fmcXbCAKqqnOXu4ZaAWCT0193rQLIV.webm", // Replace with actual demo GIF when ready
    projectLink: "https://educus.vercel.app/", // Replace with actual project link
    githubLink: "https://github.com/dalvinsegura/educus", // Replace with actual GitHub repo link
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

// Components
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold mb-4 text-red-500">{children}</h2>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-300 mb-4">{children}</p>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside mb-4 text-gray-300">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const ChallengeCard = ({
  challenge,
  solution,
}: {
  challenge: string;
  solution: string;
}) => (
  <div className="bg-gray-800 rounded-lg p-4 mb-4">
    <h3 className="font-bold mb-2 text-red-400">Challenge:</h3>
    <p className="mb-2 text-gray-300">{challenge}</p>
    <h3 className="font-bold mb-2 text-green-400">Solution:</h3>
    <p className="text-gray-300">{solution}</p>
  </div>
);

const TestimonialCard = ({
  name,
  role,
  content,
}: {
  name: string;
  role: string;
  content: string;
}) => (
  <div className="bg-gray-800 rounded-lg p-4 mb-4">
    <p className="mb-2 text-gray-300 italic">"{content}"</p>
    <p className="text-red-400 font-bold">{name}</p>
    <p className="text-gray-400">{role}</p>
  </div>
);

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    // In a real application, you would fetch the project data here
    // For this example, we're using the simulated data
    setProject(projectsData[id as keyof typeof projectsData]);
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          {project.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionTitle>Project Overview</SectionTitle>
          <Paragraph>{project.description}</Paragraph>

          <SectionTitle>Technologies Used</SectionTitle>
          <List items={project.technologies} />

          <SectionTitle>Challenges and Solutions</SectionTitle>
          {project.challenges.map((item: any, index: number) => (
            <ChallengeCard
              key={index}
              challenge={item.challenge}
              solution={item.solution}
            />
          ))}

          <SectionTitle>Results and Achievements</SectionTitle>
          <List items={project.results} />

          <SectionTitle>Project Gallery</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {project.images.map((image: string, index: number) => (
              <Image
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg"
              />
            ))}
          </div>

          {project.youtubeVideo && (
            <>
              <SectionTitle>Project Showcase</SectionTitle>
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <iframe
                  src={project.youtubeVideo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </>
          )}

          {project.gif && (
            <video
              autoPlay
              loop
              muted
              className="rounded-lg mx-auto"
              width="600"
              height="400"
            >
              <source src={project.gif} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          <SectionTitle>Project Links</SectionTitle>
          <div className="flex gap-4 mb-8">
            <Link
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Live Project
            </Link>
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              GitHub Repository
            </Link>
          </div>

          {project.testimonials.length > 0 && (
            <>
              <SectionTitle>Testimonials</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.testimonials.map((testimonial: any, index: number) => (
                  <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                  />
                ))}
              </div>
            </>
          )}

          <SectionTitle>Lessons Learned</SectionTitle>
          <List items={project.lessonsLearned} />

          <SectionTitle>Next Steps</SectionTitle>
          <List items={project.nextSteps} />

          <SectionTitle>Project Status</SectionTitle>
          <Paragraph>{project.projectStatus}</Paragraph>
        </motion.div>
      </div>
    </div>
  );
}
