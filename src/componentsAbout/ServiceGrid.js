"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Styles from "./ServiceGrid.module.css";
import Link from "next/link";
import Button from "../components/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 1,
    title: "Interior Design",
    imgSrc: "/interior.png",
    link: "/services/interior-design",
  },
  {
    id: 2,
    title: "Design and Build",
    imgSrc: "/designBuild.png",
    link: "/services/design-and-build",
  },
  {
    id: 3,
    title: "Marine Infrastructure",
    imgSrc: "/marine.png",
    link: "/services/marine-infrastructure",
  },
  {
    id: 4,
    title: "Fit Outs",
    imgSrc: "/fitOuts.png",
    link: "/services/fit-outs",
  },
  {
    id: 5,
    title: "Civil Construction",
    imgSrc: "/civil.png",
    link: "/services/civil-construction",
  },
];

const ServiceGrid = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const heading1Ref = useRef(null);
  const btnRef = useRef(null);
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

      // Animate heading
      tl.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      });

      tl.from(heading1Ref.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      });

      tl.from(btnRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      });

      // Staggered animation for service items
      tl.from(
        columnRefs.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          stagger: 0.2,
        },
        "-=0.5"
      ); // Start column animation just after heading
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={Styles.serviceGridSection}>
      <div className="container">
        <div className={Styles.rowServiceGrid}>
          <div className={Styles.columnServiceGrid}>
            <h4 ref={heading1Ref}>
              Enhance satisfaction by transcending quality standards
            </h4>
            <h2 ref={headingRef}>Our Services</h2>
          </div>
          <div className={Styles.columnServiceGrid} ref={btnRef}>
            <Link href="/services">
              <Button
                text="Learn More"
                textColor="var(--color-dark-blue)"
                bgColor="transparent"
                borderColor="var(--color-dark-blue)"
                hoverBgColor="var(--color-dark-blue)"
                hoverTextColor="#ffffff"
              />
            </Link>
          </div>
        </div>

        {/* Service Grid */}
        <div className={Styles.gridContainer}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={Styles.gridItem}
              ref={(el) => (columnRefs.current[index] = el)}
            >
              <Link href={service.link}>
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className={Styles.serviceImage}
                />
                <h3>{service.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
