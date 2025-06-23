"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <video
        src="/video-01.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-screen h-screen object-cover"
      ></video>

      <motion.div
        animate={
          isMenuOpen
            ? { y: "10%", scale: 0.95, opacity: 0 }
            : { y: "0%", scale: 1, opacity: 1 }
        }
        transition={{
          duration: 0.8,
          ease: [0.83, 0, 0.17, 1],
        }}
        className="absolute left-8 right-8 top-1/2 -translate-y-1/2 bg-zinc-950/80 rounded-2xl p-6 flex flex-col"
      >
        <div className="h-[clamp(100px,80vw,600px)] w-full rounded-xl overflow-hidden relative mb-6">
          <Image
            src="/image-01.jpeg"
            fill
            alt="image-01"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-[clamp(20px,8vw,100px)] font-bold tracking-tight leading-none">
            Can&apos;t Decide
          </h1>
          <p className="text-[clamp(12px,5vw,50px)] font-medium text-zinc-300">
            Max Dean, Luke Dean, Locky
          </p>
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="w-full rounded-full py-4 bg-zinc-200/10 text-zinc-50 font-semibold uppercase border border-zinc-200/10 hover:bg-zinc-200/20 transition-colors duration-300 cursor-pointer"
        >
          Pre-Save
        </button>
      </motion.div>

      <Menu isMenuOpen={isMenuOpen} />
    </main>
  );
}

function Menu({ isMenuOpen }: { isMenuOpen: boolean }) {
  const menuItems = [
    "Spotify",
    "Apple Music",
    "SoundCloud",
    "YouTube Music",
    "Deezer",
    "Amazon Music",
    "Tidal",
  ];
  return (
    <motion.ul
      animate={
        isMenuOpen
          ? { y: "-100%", scale: 1, opacity: 1 }
          : { y: "0%", scale: 0.95, opacity: 0 }
      }
      transition={{
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1],
      }}
      className="absolute left-8 right-8 bottom-8 translate-y-[110%] bg-zinc-950/80 rounded-2xl p-4 flex flex-col gap-2"
    >
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          className="w-full py-2 px-4 rounded-xl bg-zinc-200/10 text-zinc-50 font-semibold uppercase border border-zinc-200/10 hover:bg-zinc-200/20 transition-colors duration-300 cursor-pointer"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
