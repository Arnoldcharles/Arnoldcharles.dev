"use client";
import React from "react";

const projects = [
  {
    title: "LensCraft",
    description: "A platform for photographers to showcase their work. Built with Next.js and Tailwind CSS.",
    image: "/project1.png",
    link: "https://lens-craft-flax.vercel.app/",
  },
  {
    title: "E-Shop",
    description: "Full-stack store with Firebase auth and MongoDB backend.",
    image: "/project2.png",
    link: "https://e-shop-lemon-gamma.vercel.app/",
  },
  {
    title: "FashionDesign",
    description: "Fashion design app with live API data.",
    image: "/project3.png",
    link: "https://fashion-design-mocha.vercel.app/",
  },
  {
    title: "Event Tracker",
    description: "Event & RSVP tracker with Firebase and MongoDB.",
    image: "/images/event.png",
    link: "#",
  },
  {
    title: "Food Delivery App",
    description: "UI for ordering food online with smooth animations.",
    image: "/images/food.png",
    link: "#",
  },
  {
    title: "Streaming App UI",
    description: "MovieBox-inspired streaming interface design.",
    image: "/images/stream.png",
    link: "#",
  },
  {
    title: "ChatGPT Tool",
    description: "Simple chat interface connected to OpenAI API.",
    image: "/images/chatgpt.png",
    link: "#",
  },
  {
    title: "Invoice Generator",
    description: "Create, download and manage invoices online.",
    image: "/images/invoice.png",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Here are some of the projects I’ve built to showcase my skills and
          experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                    target="_blank"
                  className="inline-block text-blue-500 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
