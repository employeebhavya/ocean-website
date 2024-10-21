"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const faqData = [
  {
    question: "What types of services do you provide?",
    answer: "We provide various services like...",
  },
  {
    question: "Do you offer customization options?",
    answer: "Yes, we offer a wide range of customization...",
  },
  {
    question: "What materials do you use?",
    answer: "We use high-quality materials such as...",
  },
  {
    question: "Do you provide delivery and assembly services?",
    answer: "Yes, delivery and assembly are available...",
  },
  {
    question: "How do we book a project with you?",
    answer: "You can book a project by...",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className="h2">FAQs</h2>
      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
            {item.question}
            {openIndex === index ? (
              <AiOutlineMinus className={styles.faqIcon} />
            ) : (
              <AiOutlinePlus className={styles.faqIcon} />
            )}
          </div>
          {openIndex === index && (
            <p className={styles.faqAnswer}>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
