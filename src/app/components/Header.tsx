"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          DS
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/projects"
            className="hover:text-red-500 transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            className="hover:text-red-500 transition duration-300"
          >
            Skills
          </Link>
          <Link
            href="/#about"
            className="hover:text-red-500 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="hover:text-red-500 transition duration-300"
          >
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <nav className="flex flex-col items-center py-4">
            <Link
              href="/projects"
              className="py-2 hover:text-red-500 transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              className="py-2 hover:text-red-500 transition duration-300"
            >
              Skills
            </Link>
            <Link
              href="/#about"
              className="py-2 hover:text-red-500 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="py-2 hover:text-red-500 transition duration-300"
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
