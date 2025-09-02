"use client";

import React from "react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "LensCraft",
      desc: "A platform for photographers to showcase their work",
      img: "/project1.png",
    },
    {
      title: "E-Shop",
      desc: "A full-stack e-commerce application built with Next.js and Tailwind CSS.",
      img: "/project2.png",
    },
    {
      title: "FashionDesign",
      desc: "Fashion design app with live API data.",
      img: "/project3.png",
    },
    {
      title: "Sewas-Styles",
      desc: "Clothing e-commerce with payment integration",
      img: "/project4.png",
    },
    {
      title: "MySchoolApp",
      desc: "A school management application with student and teacher portals.",
      img: "/project5.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          My Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
