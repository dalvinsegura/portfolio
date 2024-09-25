import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiWakatime } from "react-icons/si";

export default function Footer() {
  const projects = [
    { name: "Packie", href: "/projects/packie-app" },
    { name: "Educus", href: "/projects/educus" },
    // Add more projects as needed
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/dalvinsegura",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/dalvinsegura",
      icon: <FaLinkedin />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/seguradev",
      icon: <FaTwitter />,
    },
    {
      name: "WakaTime",
      href: "https://wakatime.com/@dalvinsegura",
      icon: <SiWakatime />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Dalvin Segura</h3>
          <p className="text-gray-400">
            Software Developer & Tech Entrepreneur
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Projects</h3>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.name}>
                <Link
                  href={project.href}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Connect</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
