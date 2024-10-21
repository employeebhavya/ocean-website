/* eslint-disable @next/next/no-img-element */
"use client";

import Styles from "./AboutHeader.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function AboutHeader() {
  const [counters, setCounters] = useState({
    employees: 0,
    projects: 0,
    experience: 0,
  });

  const counterRef = useRef(null);
  const textRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Counter animation
      ScrollTrigger.create({
        trigger: counterRef.current,
        start: "top 80%",
        onEnter: () => startCounting(),
      });

      // Text and image animation
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      imageRefs.current.forEach((img, index) => {
        gsap.from(img, {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          delay: index * 0.2, // Staggered effect
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
          },
        });
      });
    }, counterRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const startCounting = () => {
    const targets = [
      { id: "employees", end: 500 },
      { id: "projects", end: 350 },
      { id: "experience", end: 23 },
    ];

    targets.forEach((target) => {
      gsap.to(
        { value: 0 },
        {
          value: target.end,
          duration: 2,
          ease: "power1.out",
          onUpdate: function () {
            setCounters((prev) => ({
              ...prev,
              [target.id]: Math.floor(this.targets()[0].value),
            }));
          },
        }
      );
    });
  };

  return (
    <section className={Styles.aboutHeader} ref={counterRef}>
      <div className={Styles.rowAh}>
        <div className={Styles.columnAboutHeader}>
          <img
            ref={(el) => (imageRefs.current[0] = el)}
            className={Styles.imageOneAbout}
            src="/about/header-left.png"
            alt="image"
          />
        </div>
        <div className={Styles.columnAboutHeader}>
          <div className={Styles.innercolumnAh} ref={textRef}>
            <h2 className="h2">Experience the difference</h2>
            <p className="description">
              To create exceptional interior design solutions and accumulate an
              expertise that is the best in the industry.
            </p>
          </div>
          <div className={Styles.innercolumnAh}>
            <h3 className="h4 align-self-end">
              Outstanding <br></br>Results
            </h3>
            <div className={Styles.aboutCounter}>
              <div className={Styles.counterBox}>
                <p className="description">Number of Employees</p>
                <h4 className="h3">{counters.employees}</h4>
              </div>
              <div className={Styles.counterBox}>
                <p className="description">Number of Projects</p>
                <h4 className="h3">{counters.projects}</h4>
              </div>
              <div className={Styles.counterBox}>
                <p className="description">Years of Experience</p>
                <h4 className="h3">{counters.experience}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.columnAboutHeader}>
          <img
            ref={(el) => (imageRefs.current[1] = el)}
            src="/about/header-right.png"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;
