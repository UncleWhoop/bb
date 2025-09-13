"use client";

import React from "react";
import AnimatedDiv from "./AnimatedDiv";

const ScrollingLogos = () => {
  const firstRowLogos = [
    { name: "zerocap", src: "/images/sponsors/zerocap.svg" },
    { name: "dvdt", src: "/images/sponsors/dvdt.svg" },
    { name: "banter", src: "/images/sponsors/banter.svg" },
    { name: "quantblock", src: "/images/sponsors/quantblock.svg" },
    { name: "facultygroup", src: "/images/sponsors/facultygroup.svg" },
    { name: "nxgen", src: "/images/sponsors/nxgen.svg" },
    { name: "web3", src: "/images/sponsors/web3.svg" },
    { name: "insolvent", src: "/images/sponsors/insolvent.svg" },
    { name: "coweb", src: "/images/sponsors/coweb.svg" },
    { name: "everstake", src: "/images/sponsors/everstake.svg" },
    { name: "momentum", src: "/images/sponsors/momentum.svg" },
    { name: "altcoin", src: "/images/sponsors/altcoin.svg" },
    { name: "scalene", src: "/images/sponsors/scalene.svg" },
    { name: "newtribe", src: "/images/sponsors/newtribe.svg" },
    { name: "coinseek", src: "/images/sponsors/coinseek.svg" },
  ];

  const secondRowLogos = [
    { name: "kyros", src: "/images/sponsors/kyros.svg" },
    { name: "squid", src: "/images/sponsors/squid.svg" },
    { name: "coinseeker", src: "/images/sponsors/coinseeker.svg" },
    { name: "rarestone", src: "/images/sponsors/rarestone.svg" },
    { name: "interchain", src: "/images/sponsors/interchain.svg" },
    { name: "cogitent", src: "/images/sponsors/cogitent.svg" },
    { name: "kado", src: "/images/sponsors/kado.svg" },
    { name: "cyrator", src: "/images/sponsors/cyrator.svg" },
    { name: "obi", src: "/images/sponsors/obi.svg" },
    { name: "zokyo", src: "/images/sponsors/zokyo.svg" },
    { name: "zkme", src: "/images/sponsors/zkme.svg" },
    { name: "bigbrain", src: "/images/sponsors/bigbrain.svg" },
    { name: "asteroid", src: "/images/sponsors/asteroid.svg" },
  ];

  // Create duplicated arrays for seamless scrolling
  const duplicatedFirstRow = [...firstRowLogos, ...firstRowLogos];
  const duplicatedSecondRow = [...secondRowLogos, ...secondRowLogos];

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

        .logos-container:hover .scroll-left,
        .logos-container:hover .scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full container mx-auto px-5 mt-28">
        <div className="w-full py-20 overflow-hidden">
          <AnimatedDiv className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-h-12 max-w-32 object-contain filter brightness-0 invert"
                      />
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
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-h-12 max-w-32 object-contain filter brightness-0 invert"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </>
  );
};

export default ScrollingLogos;