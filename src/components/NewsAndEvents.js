"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Styles from "./NewsAndEvents.module.css";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeAgo = (date) => {
  const now = new Date();
  const eventDate = new Date(date);
  const diffInMs = now - eventDate;
  const diffInMins = Math.floor(diffInMs / (1000 * 60));

  if (diffInMins < 60) {
    return `${diffInMins} minutes ago`;
  } else if (diffInMins < 1440) {
    const diffInHours = Math.floor(diffInMins / 60);
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  } else if (diffInMins < 43200) {
    const diffInDays = Math.floor(diffInMins / 1440);
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  } else if (diffInMins < 518400) {
    const diffInMonths = Math.floor(diffInMins / 43200);
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  } else {
    const diffInYears = Math.floor(diffInMins / 518400);
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
  }
};

const newsEvents = [
  {
    title:
      "Groundbreaking Ceremony for 30,000 Sq. Ft. Ground Floor Lobby Project in Taramani",
    description:
      "We are pleased to announce the successful Site Pooja for the Design and Build of the Ground Floor Lobby...",
    image: "/news1.png",
    date: "2024-08-28T09:00:00",
    link: "/news/groundbreaking-ceremony",
  },
  {
    title:
      "Ocean Lifespaces Partners with Vestian for a Landmark Workplace Project in Chennai",
    description:
      "We are proud to announce our partnership with Vestian Global Workplace Services Pvt Ltd for the interiors...",
    image: "/news2.png",
    date: "2024-09-25T08:50:00",
    link: "/news/ocean-lifespaces-partners",
  },
  {
    title: "Spreading Christmas Cheer at Ocean Lifespaces!",
    description:
      "The holiday spirit was in full swing at Ocean Lifespaces as our office transformed into a winter wonderland...",
    image: "/news3.png",
    date: "2024-06-28T08:40:00",
    link: "/news/spreading-christmas-cheer-at-ocean-lifespaces",
  },
  {
    title:
      "Ocean Lifespaces at CoreNet Global India Conference 2024 - Bengaluru",
    description:
      "Ocean Lifespaces made a remarkable presence at the CoreNet Global India Conference 2024, held at Conrad Bangalore...",
    image: "/news/news1.png",
    date: "2024-06-25T12:00:00",
    link: "/news/cornet-global-india-conference",
  },
  {
    title:
      "Pongal Celebrations at Ocean Lifespaces: Harvesting Joy and Prosperity!",
    description:
      "At Ocean Lifespaces, we embrace traditions that bring us together and celebrate the spirit of unity, gratitude...",
    image: "/news/news2.png",
    date: "2024-06-27T15:30:00",
    link: "/news/pongal-celebration",
  },
  {
    title:
      "Successful Completion of Protective Coating Project at a Mission-Critical Nuclear Power Plant",
    description:
      "We are proud to announce the successful application of protective and antifouling coating on a hydro-technical...",
    image: "/news/news3.png",
    date: "2024-06-26T14:15:00",
    link: "/news/protective-coating-project",
  },
  {
    title:
      "Ocean Lifespaces Secures General Contracting Project for 55,000 Sq. Ft. Office Space in Hyderabad",
    description:
      "We are excited to announce our latest project win – the General Contracting of a 55,000 sq. ft. office space...",
    image: "/news/news4.png",
    date: "2024-06-20T10:00:00",
    link: "/news/general-contracting-project",
  },
];

const NewsAndEvents = ({ list = 3 }) => {
  const [latestNews, setLatestNews] = useState([]);
  const newsEventsRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const sortedNews = [...newsEvents].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setLatestNews(sortedNews.slice(0, list));
  }, [list]);

  useLayoutEffect(() => {
    if (
      newsEventsRef.current &&
      headingRef.current &&
      cardsRef.current.length
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: newsEventsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      }).from(
        cardsRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }
  }, [latestNews]);

  return (
    <section className={Styles.sectionNews} ref={newsEventsRef}>
      <div className="container">
        <div className={Styles.rowNews} ref={headingRef}>
          <h4>enhance satisfaction by transcending quality standards</h4>
          <h2>News and Events</h2>
        </div>
        <div className={Styles.grid}>
          {latestNews.map((news, index) => (
            <div
              key={index}
              className={Styles.card}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img src={news.image} alt={news.title} />
              <div className={Styles.dateBarNews}>
                <p>{timeAgo(news.date)}</p>
                <p>{news.date.slice(0, 10)}</p>
              </div>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <Link href={news.link}>
                <button>
                  <span>
                    Read More <BsArrowUpRight />
                  </span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
