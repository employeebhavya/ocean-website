/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Styles from "./AboutVision.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function AboutVision() {
  const visionTopRef = useRef(null);
  const visionSecRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: visionTopRef.current,
          start: "top 80%", // Trigger when the top of the section reaches 80% of the viewport
          end: "bottom 80%", // End when the bottom of the section hits the bottom of the viewport
          scrub: 1, // Smooth scrubbing
        },
      });

      // Animate the first section
      tl.from(visionTopRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
      })
        // Animate the second section
        .from(
          visionSecRef.current,
          {
            opacity: 0,
            y: 100,
            duration: 1,
          },
          "-=0.5"
        ); // Start this animation half a second before the previous one ends
    }, visionTopRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <>
      <section ref={visionTopRef} className={Styles.visionTop}>
        <div className={Styles.rowVisionTop}>
          <img src="/about/quote.png" alt="image" />
          <p className="h4">
            We have collaborated with some of the leading Architects and Project
            Management Consultants (PMCs) in India, on one-of-a-kind projects.
          </p>
        </div>
      </section>
      <section ref={visionSecRef} className={Styles.visionSec}>
        <div className={Styles.visionSecRow}>
          <div className={Styles.columnVsion}>
            <h3 className="h3">Mission and Vision</h3>
            <p className="description">
              We aim to achieve our goal by constantly merging our systems,
              processes, teams & activities to ensure that we remain on top of
              our present and future clients need at all times.
            </p>
            <p className="description">
              To achieve success in all latitudes and become the only
              sought-after name by Business Associates in all our endeavors and
              beyond.
            </p>
            <img src="/about/vision-left.png" alt="image" />
          </div>
          <div className={Styles.columnVsion}>
            <img src="/about/vision-right.png" alt="image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutVision;
