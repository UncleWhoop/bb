import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function AnimatedDiv({ className = "", children }) {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Track whether the animation has been triggered

  useEffect(() => {
    const gsapInstance = gsap;

    // Check if GSAP and containerRef are available
    if (gsapInstance && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          // When the element is 50% visible, trigger the animation
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              // Trigger the GSAP animation
              const childElements = containerRef.current.children;
              
              if (childElements.length > 1) {
                gsapInstance.from(childElements, {
                  opacity: 0,
                  y: 30,
                  duration: 0.6,
                  stagger: 0.2, // Staggering animation for multiple children
                  ease: "power2.out",
                });
              } else {
                gsapInstance.from(containerRef.current, {
                  opacity: 0,
                  y: 30,
                  duration: 0.6,
                  ease: "power2.out",
                });
              }

              setHasAnimated(true); // Ensure animation only happens once
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the element is visible
        }
      );

      // Start observing the containerRef
      observer.observe(containerRef.current);

      // Cleanup observer on unmount
      return () => observer.disconnect();
    }
  }, [hasAnimated]); // Re-run if `hasAnimated` changes

  return (
    <div
      ref={containerRef}
      className={`animated-div ${className}`} // Adding custom className passed by user
    >
      {children}
    </div>
  );
}
