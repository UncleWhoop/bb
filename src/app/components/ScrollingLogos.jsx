// components/ScrollingLogos.jsx
"use client";

import React from "react";

const ScrollingLogos = () => {
  const firstRowLogos = [
    { name: "Apple", color: "text-white" },
    { name: "Google", color: "text-blue-400" },
    { name: "Microsoft", color: "text-blue-300" },
    { name: "Amazon", color: "text-orange-400" },
    { name: "Meta", color: "text-blue-400" },
    { name: "Netflix", color: "text-red-400" },
    { name: "Spotify", color: "text-green-400" },
    { name: "Uber", color: "text-white" },
    { name: "Airbnb", color: "text-red-400" },
    { name: "Tesla", color: "text-red-400" },
  ];

  const secondRowLogos = [
    { name: "Nike", color: "text-white" },
    { name: "Adobe", color: "text-red-400" },
    { name: "Shopify", color: "text-green-400" },
    { name: "Slack", color: "text-purple-400" },
    { name: "Zoom", color: "text-blue-400" },
    { name: "Figma", color: "text-purple-300" },
    { name: "Notion", color: "text-gray-300" },
    { name: "Stripe", color: "text-indigo-400" },
    { name: "Discord", color: "text-indigo-300" },
    { name: "Canva", color: "text-blue-300" },
  ];

  const thirdRowLogos = [
    { name: "Coinbase", color: "text-blue-400" },
    { name: "OpenAI", color: "text-green-400" },
    { name: "Binance", color: "text-yellow-400" },
    { name: "Polygon", color: "text-purple-400" },
    { name: "Chainlink", color: "text-blue-300" },
    { name: "Uniswap", color: "text-pink-400" },
    { name: "Solana", color: "text-purple-300" },
    { name: "Ethereum", color: "text-blue-400" },
    { name: "Avalanche", color: "text-red-400" },
    { name: "Cosmos", color: "text-white" },
  ];

  // Create duplicated arrays for seamless scrolling
  const duplicatedFirstRow = [...firstRowLogos, ...firstRowLogos];
  const duplicatedSecondRow = [...secondRowLogos, ...secondRowLogos];
  const duplicatedThirdRow = [...thirdRowLogos, ...thirdRowLogos];

  return (
    <>
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        .scroll-right {
          animation: scrollRight 35s linear infinite;
        }

        .scroll-left-slow {
          animation: scrollLeft 45s linear infinite;
        }

        .logos-container:hover .scroll-left,
        .logos-container:hover .scroll-right,
        .logos-container:hover .scroll-left-slow {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full container mx-auto px-5 mt-28">
        <div className="w-full py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Trusted by <span className="text-blue-400">30+</span> Partners
                and Backers Across the Space
              </h2>
              <p className="text-xl text-slate-400">
                Leading companies that power the future of technology
              </p>
            </div>

            <div className="logos-container space-y-8">
              {/* First scrolling row - left to right */}
              <div className="relative overflow-hidden">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>

                <div className="flex scroll-left">
                  {duplicatedFirstRow.map((logo, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex-shrink-0 mx-4 flex items-center justify-center h-24 w-44 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:bg-slate-700/50 hover:-translate-y-1"
                    >
                      <span className={`text-lg font-semibold ${logo.color}`}>
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second scrolling row - right to left */}
              <div className="relative overflow-hidden">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>

                <div className="flex scroll-right">
                  {duplicatedSecondRow.map((logo, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 mx-4 flex items-center justify-center h-24 w-44 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:bg-slate-700/50 hover:-translate-y-1"
                    >
                      <span className={`text-lg font-semibold ${logo.color}`}>
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex scroll-left-slow">
                {duplicatedThirdRow.map((logo, index) => (
                  <div
                    key={`third-${index}`}
                    className="flex-shrink-0 mx-4 flex items-center justify-center h-24 w-44 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:bg-slate-700/50 hover:-translate-y-1"
                  >
                    <span className={`text-lg font-semibold ${logo.color}`}>
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollingLogos;
