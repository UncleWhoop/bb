import React from "react";
import Image from "next/image";
import bb from "/public/images/era.jpg";

export default function ProjectsSection() {
  return (
    <section className="w-full h-[80vh] py-[3rem] bg-blue-900">
      <div className="content-wrapper container mx-auto flex flex-col justify-center gap-12 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col max-w-[600px]">
            <h1 className="px-5 text-[24px] font-bold leading-[26px] text-gray-100 md:px-0 md:text-[36px] md:leading-[44px]">
              Upcoming projects
            </h1>
            <p className="mt-[8px] px-5 font-inter text-base font-normal leading-normal text-gray-100/[0.7] md:px-0">
              Discover our selection of highly vetted live and upcoming
              projects, and participate in the next big launches
            </p>
          </div>
          <div className="hidden items-center md:flex">
            <div className="border-gradient-l-purple-blue-purple gradient-border-2 flex gap-3 rounded-xl px-6 py-[15px] text-gray-100">
              <a
                className="text-xl font-bold leading-[23px] text-gray-100"
                title="Click to see all projects"
                href="/launchpad"
              >
                See all projects
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-5 justify-center">
          <div className="rounded-2xl bg-[#1C1B3A] p-4 shadow-xl text-white font-inter h-full">
            {/* Top Image with IDO Badge and Upcoming Tag */}
            <div className="rounded-xl overflow-hidden mb-4 flex flex-col gap-4">
              <Image
                src={bb}
                alt="hero-image"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover h-[200px]"
              />

              <div className="flex flex-row gap-2">
                {/* IDO Badge */}
                <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 py-1 rounded-md">
                  IDO
                </button>
                {/* Upcoming Tag */}
                <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 py-1 rounded-md">
                  Upcoming
                </button>
                {/* App Icon (Bottom Left) */}
                <Image
                  src={bb}
                  alt="app-icon"
                  width={32}
                  height={32}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Title & Description */}
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-lg font-bold">Kii Chain</h3>
              <p className="text-sm text-gray-300">
                The Blockchain for emerging markets...
              </p>
            </div>

            {/* Raise & Application Info */}
            <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-4 text-sm">
              <div className="flex flex-col">
                <span className="text-gray-400">Raise</span>
                <span className="font-bold text-white">
                  100,000 <span className="text-xs text-gray-400">USD</span>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-400">Applications Open In</span>
                <span className="font-bold text-white">TBA</span>
              </div>
            </div>

            {/* Project Details Button */}
            <div className="mt-4">
              <button className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 font-bold text-white transition duration-300 hover:opacity-90">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l4-4-4-4m5 8V8"
                  />
                </svg>
                Project Details
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-[#1C1B3A] p-4 shadow-xl text-white font-inter h-full">
            {/* Top Image with IDO Badge and Upcoming Tag */}
            <div className="rounded-xl overflow-hidden mb-4 flex flex-col gap-4">
              <Image
                src={bb}
                alt="hero-image"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover h-[200px]"
              />

              <div className="flex flex-row gap-2">
                {/* IDO Badge */}
                <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 py-1 rounded-md">
                  IDO
                </button>
                {/* Upcoming Tag */}
                <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 py-1 rounded-md">
                  Upcoming
                </button>
                {/* App Icon (Bottom Left) */}
                <Image
                  src={bb}
                  alt="app-icon"
                  width={32}
                  height={32}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Title & Description */}
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-lg font-bold">Kii Chain</h3>
              <p className="text-sm text-gray-300">
                The Blockchain for emerging markets...
              </p>
            </div>

            {/* Raise & Application Info */}
            <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-4 text-sm">
              <div className="flex flex-col">
                <span className="text-gray-400">Raise</span>
                <span className="font-bold text-white">
                  100,000 <span className="text-xs text-gray-400">USD</span>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-400">Applications Open In</span>
                <span className="font-bold text-white">TBA</span>
              </div>
            </div>

            {/* Project Details Button */}
            <div className="mt-4">
              <button className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 font-bold text-white transition duration-300 hover:opacity-90">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l4-4-4-4m5 8V8"
                  />
                </svg>
                Project Details
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-[#1C1B3A] p-4 shadow-xl text-white font-inter h-full">
            {/* Top Image with IDO Badge and Upcoming Tag */}
            <div className="rounded-xl overflow-hidden mb-4 flex flex-col gap-4">
              <Image
                src={bb}
                alt="hero-image"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover h-[200px]"
              />

              <div className="flex flex-row gap-2">
                {/* IDO Badge */}
                <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 py-1 rounded-md">
                  IDO
                </button>
                {/* Upcoming Tag */}
                <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 py-1 rounded-md">
                  Upcoming
                </button>
                {/* App Icon (Bottom Left) */}
                <Image
                  src={bb}
                  alt="app-icon"
                  width={32}
                  height={32}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Title & Description */}
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-lg font-bold">Kii Chain</h3>
              <p className="text-sm text-gray-300">
                The Blockchain for emerging markets...
              </p>
            </div>

            {/* Raise & Application Info */}
            <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-4 text-sm">
              <div className="flex flex-col">
                <span className="text-gray-400">Raise</span>
                <span className="font-bold text-white">
                  100,000 <span className="text-xs text-gray-400">USD</span>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-400">Applications Open In</span>
                <span className="font-bold text-white">TBA</span>
              </div>
            </div>

            {/* Project Details Button */}
            <div className="mt-4">
              <button className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 font-bold text-white transition duration-300 hover:opacity-90">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l4-4-4-4m5 8V8"
                  />
                </svg>
                Project Details
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-[#1C1B3A] p-4 shadow-xl text-white font-inter h-full">
            {/* Top Image with IDO Badge and Upcoming Tag */}
            <div className="rounded-xl overflow-hidden mb-4 flex flex-col gap-4">
              <Image
                src={bb}
                alt="hero-image"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover h-[200px]"
              />

              <div className="flex flex-row gap-2">
                {/* IDO Badge */}
                <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 py-1 rounded-md">
                  IDO
                </button>
                {/* Upcoming Tag */}
                <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 py-1 rounded-md">
                  Upcoming
                </button>
                {/* App Icon (Bottom Left) */}
                <Image
                  src={bb}
                  alt="app-icon"
                  width={32}
                  height={32}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Title & Description */}
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-lg font-bold">Kii Chain</h3>
              <p className="text-sm text-gray-300">
                The Blockchain for emerging markets...
              </p>
            </div>

            {/* Raise & Application Info */}
            <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-4 text-sm">
              <div className="flex flex-col">
                <span className="text-gray-400">Raise</span>
                <span className="font-bold text-white">
                  100,000 <span className="text-xs text-gray-400">USD</span>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-400">Applications Open In</span>
                <span className="font-bold text-white">TBA</span>
              </div>
            </div>

            {/* Project Details Button */}
            <div className="mt-4">
              <button className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 font-bold text-white transition duration-300 hover:opacity-90">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l4-4-4-4m5 8V8"
                  />
                </svg>
                Project Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
