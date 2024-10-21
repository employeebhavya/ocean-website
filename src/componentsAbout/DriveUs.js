"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import styles from "./DriveUs.module.css";
import ImageSlider from "./ImageSlider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function DriveUs() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const columnRefs = useRef([]);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 100%",
          scrub: 1,
        },
      });

      // Animation for heading and description
      tl.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      })
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.5"
        ) // Start description animation half a second before heading animation ends

        // Staggered animation for columns
        .from(
          columnRefs.current,
          {
            opacity: 0,
            y: 50,
            duration: 0.5,
            stagger: 0.2,
          },
          "-=0.5"
        ); // Start column animation just after the description
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.driveUs}>
      <div className="container">
        <div className={styles.mainRowDriveUs}>
          <div className={styles.rowDriveUs}>
            <h3 className="h3" ref={headingRef}>
              What Drives Us
            </h3>
            <p className="description" ref={descriptionRef}>
              Discover the driving forces behind our interior design activities,
              which are powered by innovation and client delight.
            </p>
          </div>
          <div className={styles.rowDriveUs}>
            <div
              className={styles.columnDriveUs}
              ref={(el) => (columnRefs.current[0] = el)}
            >
              <img src="/about/drive-left.png" alt="image" />
            </div>
            <div
              className={styles.columnDriveUs}
              ref={(el) => (columnRefs.current[1] = el)}
            >
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DriveUs;
