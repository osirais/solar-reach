"use client";

import { EmailForm } from "@/components/email-form";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [circleStage, setCircleStage] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("var(--background)");

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
    if (!isLightOn) {
      setTimeout(() => setCircleStage(1), 250);
      setTimeout(() => setCircleStage(2), 750);
      setTimeout(() => setCircleStage(3), 1250);
      setTimeout(() => setBackgroundColor("#e5a50a"), 1750);
    } else {
      setCircleStage(0);
      setBackgroundColor("var(--background)");
    }
  };

  return (
    <div
      className="min-w-screen flex min-h-screen flex-col items-center justify-center gap-16 p-8 pb-20 font-[Cantarell] overflow-hidden text-[var(--background)] transition-colors duration-1000 sm:p-20"
      onClick={toggleLight}
      style={{ backgroundColor }}
    >
      <div
        className={`absolute bottom-2/3 z-10 h-full w-4 transition-colors duration-1000 ${isLightOn ? "bg-[#c0bfbc]" : "bg-[#5e5c64]"}`}
      />
      <div className="min-w-screen -mt-20 flex min-h-screen flex-col items-start justify-center sm:items-start">
        <div className="relative flex h-full w-full items-center justify-center">
          <div
            className={`absolute h-[625px] w-[625px] rounded-full bg-[#f5c211] transition-opacity duration-1000 ${circleStage >= 3 ? "opacity-100" : "opacity-0"}`}
          ></div>
          <div
            className={`absolute h-[500px] w-[500px] rounded-full bg-[#f6d32d] transition-opacity duration-1000 ${circleStage >= 2 ? "opacity-100" : "opacity-0"}`}
          ></div>
          <div
            className={`absolute h-[375px] w-[375px] rounded-full bg-[#f8e45c] transition-opacity duration-1000 ${circleStage >= 1 ? "opacity-100" : "opacity-0"}`}
          ></div>
          <Image
            className={`relative z-10 -mt-20 cursor-pointer transition-opacity duration-500 ${isLightOn ? "opacity-100" : "opacity-0"}`}
            src="/lightbulb_on.svg"
            alt="Lit lightbulb"
            width={307}
            height={307}
            priority
          />
          <Image
            className={`absolute z-10 -mt-20 cursor-pointer transition-opacity duration-500 ${isLightOn ? "opacity-0" : "opacity-100"}`}
            src="/lightbulb_off.svg"
            alt="Unlit lightbulb"
            width={307}
            height={307}
            priority
          />
        </div>
      </div>
      <div className="-mt-18 flex flex-col items-center gap-8 sm:items-start">
        <h2 className="mx-auto max-w-screen-md text-center text-3xl font-extrabold text-[var(--background)]">
          Brightening futures with solar
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-xl font-medium text-[var(--background)]">
          At Solar Reach, we&apos;re committed to bringing sustainable, solar-powered
          light to areas where energy resources are scarce.
        </p>
      </div>
      <div className="flex w-full justify-center bg-[var(--background)]">
        <div className="flex w-full max-w-screen-lg flex-col justify-center py-16 sm:flex-row sm:items-start sm:gap-8">
          <div className="mx-auto max-w-full sm:w-1/2">
            <EmailForm />
          </div>
          <div className="flex flex-col items-center gap-4 sm:w-1/2 sm:items-start">
            <p className="text-center text-xl font-medium text-white sm:text-left">
              a
            </p>
            {/* <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
              <a
                className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our docs
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
