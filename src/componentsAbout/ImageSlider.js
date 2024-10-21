"use client";

import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import Image from "next/image";
import styles from "./ImageSlider.module.css"; // Import the CSS Module

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    "/about/driveSlide1.png",
    "/about/header-right.png",
    "/about/header-bg.jpg",
  ];

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    gsap.to(sliderRef.current, {
      x: "-100%",
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex(nextIndex);
        gsap.set(sliderRef.current, { x: "0%" });
      },
    });
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    gsap.to(sliderRef.current, {
      x: "100%",
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex(prevIndex);
        gsap.set(sliderRef.current, { x: "0%" });
      },
    });
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <div ref={sliderRef} className={styles.slider}>
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={800}
            height={500}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <div className={styles.arrows}>
        <FaArrowLeft onClick={prevSlide} className={styles.arrow} />
        <FaArrowRight onClick={nextSlide} className={styles.arrow} />
      </div>
    </div>
  );
};

export default ImageSlider;
