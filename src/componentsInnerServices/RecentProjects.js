/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useEffect } from "react";
import styles from "./RecentProjects.module.css";
import { gsap } from "gsap";

const RecentProjects = ({ projects }) => {
  const sliderRef = useRef(null);
  const slideRef = useRef(null);
  const currentSlide = useRef(0);
  const totalSlides = projects.length;

  useEffect(() => {
    gsap.set(sliderRef.current, { x: 0 });
  }, []);

  const handleNext = () => {
    const slideWidth = slideRef.current.offsetWidth + window.innerWidth * 0.01;
    currentSlide.current = (currentSlide.current + 1) % totalSlides;
    gsap.to(sliderRef.current, {
      x: -(slideWidth * currentSlide.current),
      duration: 0.7,
      ease: "power2.inOut",
    });
  };

  const handlePrev = () => {
    const slideWidth = slideRef.current.offsetWidth + window.innerWidth * 0.01;
    currentSlide.current =
      (currentSlide.current - 1 + totalSlides) % totalSlides;
    gsap.to(sliderRef.current, {
      x: -(slideWidth * currentSlide.current),
      duration: 0.7,
      ease: "power2.inOut",
    });
  };

  return (
    <section className={styles.recentProjects}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <h2 className="h2">Recent Projects</h2>
            <p className="description">
              Ever since inception, Ocean Lifespaces has taken pride in its
              portfolio of completed Turnkey Interiors & Civil Construction.
            </p>
            <div className={styles.arrowContainer}>
              <div className={styles.arrow} onClick={handlePrev}>
                ←
              </div>
              <div className={styles.arrow} onClick={handleNext}>
                →
              </div>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.slider} ref={sliderRef}>
              {projects.map((project, index) => (
                <div key={index} className={styles.slide} ref={slideRef}>
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className={styles.carouselImage}
                  />
                  <div className={styles.projectInfo}>
                    <h4 className="h4">{project.title}</h4>
                    <p className="description">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
