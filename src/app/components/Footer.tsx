import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {currentYear} Dalvin Segura. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://linkedin.com/in/dalvinsegura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com/seguradev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            Twitter
          </Link>
          <Link
            href="https://github.com/dalvinsegura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
