"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center min-h-screen px-6 bg-gray-900 text-white overflow-hidden"
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg mb-6"
      >
        <Image
          src="/me.jpg"
          alt="Charles - Web Developer"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Intro text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold leading-tight"
      >
        Hi, I’m <span className="text-teal-400">Charles</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        A passionate <span className="text-teal-400">Web Developer</span> crafting
        clean, responsive, and user-friendly web applications.
      </motion.p>

      {/* Call to action */}
      <motion.a
        href="/projects"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="mt-8 px-8 py-3 bg-teal-500 rounded-xl text-lg font-semibold hover:bg-teal-600 hover:scale-105 transition transform shadow-lg"
      >
        View My Work
      </motion.a>

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-12 h-12 rounded-full bg-teal-500/20"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-24 right-16 w-16 h-16 rounded-full bg-purple-500/20"
      />
    </section>
  );
}
