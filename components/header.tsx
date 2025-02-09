"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import NavIcon from "@/components/nav-icon";
import Link from "next/link";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute -top-16 left-0 right-0 z-50 mx-auto flex max-w-screen-lg flex-row items-center justify-between px-4 sm:top-0">
      <Image
      src="/logo_full_dark.svg"
      alt="Solar Reach logo"
      width={250}
      height={250}
      />
      <div
        className="relative flex flex-col justify-end"
        onMouseLeave={() => setIsHovered(false)}
      >
        <div onMouseEnter={() => setIsHovered(true)}>
          <NavIcon
            width={54}
            height={54}
            isHovered={isHovered}
          />
        </div>
        <div className="absolute right-2 top-12 w-40 text-right text-xl font-extrabold uppercase text-[var(--background)]">
          <motion.nav initial={false} animate={isHovered ? "open" : "closed"}>
            <motion.ul
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.1,
                    delayChildren: 0.2,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              style={{ pointerEvents: isHovered ? "auto" : "none" }}
              className="space-y-1"
            >
                <motion.li variants={itemVariants}>
                  <Link href="/" className="hover:underline decoration-2">Home</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/about" className="hover:underline decoration-2">About Us</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/team" className="hover:underline decoration-2">Our Team</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/volunteer" className="hover:underline decoration-2">Get Involved</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="mailto:solarreachinitiative@gmail.com" className="hover:underline decoration-2">Contact</Link>
                </motion.li>
            </motion.ul>
          </motion.nav>
        </div>
      </div>
    </div>
  );
}
