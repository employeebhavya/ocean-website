"use client";

import styles from "./Accordion.module.css";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Sample data with a "section" property to distinguish between "Architects" and "PMCs"
  const data = [
    // Architects
    {
      title: "Adrianse India Pvt Ltd",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Aswathanarayana & Eswara",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Charles Correa",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Design Studio",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Dwp Interiors",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "HBO + EMTB, Singapore",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Mmoser Associates",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Praxis Inc",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Quadra Architects Pvt Ltd",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Rapidcorp Architects",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Swbi",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Sudhakar Pai Associates",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Vijay Punjabi",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Architecture Red",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Atelier Global",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "C S Designs Pvt Ltd",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Design Transit",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Edifice Consultants Pvt Ltd",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "KGD Architects",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "M-Cube Architects",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "PSP Architects",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "RSP Architects",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Sara Interiors",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Space Matrix",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "TATA Consulting Engineers",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Arvind Varuna",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "C R Narayana Rao",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Decon Architects",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Dsp Architects",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Gensler",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Madras Designs",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "M+W Group",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "PTK Architects",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "RAJ Consultants",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Sankalpan",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Symmetrix",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },
    {
      title: "Varsha & Pradeep",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Architect",
    },

    // PMCs
    {
      title: "AN Prakash",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "Builtech",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "Cushman & Wakefield",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "SSJ PICIPL",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "Integrate PMC India Pvt Ltd",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "Potential Project Managers Pvt Ltd",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "CBRE",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "Colliers International",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "Synergy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "FABS",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "Faithful + Gould",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "JLL",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "Turner & Townsend",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
    {
      title: "Promat",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "PMC",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filtering data based on section
  const architects = data.filter((item) => item.category === "Architect");
  const pmcs = data.filter((item) => item.category === "PMC");

  return (
    <section className={styles.accordion}>
      <div className="container">
        <div className={styles.rowMainAccordion}>
          <div className={styles.rowHeader}>
            <h2 className="h2">Our Partners</h2>
            <p className="description">
              We have collaborated with some of the leading Architects and
              Project Management Consultants (PMCs) in India, on one-of-a-kind
              projects.
            </p>
          </div>
          <h3 className="h3">Leading Architects we have Collaborated with</h3>
          <div className={styles.rowAccordion}>
            {/* Architects Section */}
            {architects.map((section, index) => (
              <div key={index} className={styles.accordionSection}>
                <div
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  <h5 className="h5">
                    <RiArrowRightDoubleFill /> {section.title}
                  </h5>
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {activeIndex === index && (
                  <div className={styles.accordionContent}>
                    <p className="description">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h3 className="h3">Leading PMC&apos;S we WORKED with</h3>
          <div className={styles.rowAccordion}>
            {/* PMCs Section */}
            {pmcs.map((section, index) => (
              <div
                key={index + architects.length}
                className={styles.accordionSection}
              >
                <div
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index + architects.length)}
                >
                  <h5 className="h5">
                    <RiArrowRightDoubleFill /> {section.title}
                  </h5>
                  {activeIndex === index + architects.length ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
                {activeIndex === index + architects.length && (
                  <div className={styles.accordionContent}>
                    <p className="description">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
