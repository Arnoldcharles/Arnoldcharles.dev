"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/me.jpg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: About Content */}
        <div className="flex-1 text-gray-800 dark:text-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I’m <span className="font-semibold">Charles</span>, a passionate{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              Web Developer
            </span>{" "}
            with expertise in building modern, responsive, and user-friendly
            websites. I enjoy turning complex problems into simple, beautiful
            designs.
          </p>

          {/* Skills */}
          <h3 className="text-2xl font-semibold mb-3">My Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded-lg text-center shadow">
              HTML
            </span>
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded-lg text-center shadow">
              CSS
            </span>
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded-lg text-center shadow">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded-lg text-center shadow">
              React
            </span>
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded-lg text-center shadow">
              Next.js
            </span>
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded-lg text-center shadow">
              Tailwind CSS
            </span>
          </div>

          {/* Call-to-Action */}
          <div className="flex gap-4">
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300"
            >
              Download CV
            </a>
            <a
              href="https://wa.me/message/A4WPMQ2P765WA1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
