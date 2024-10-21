"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

const services = [
  { id: 1, title: "Interior Design", imgSrc: "/interior.png" },
  { id: 2, title: "Design and Build", imgSrc: "/designBuild.png" },
  { id: 3, title: "Marine Infrastructure", imgSrc: "/marine.png" },
  { id: 4, title: "Fit Outs", imgSrc: "/fitOuts.png" },
  { id: 5, title: "Civil Construction", imgSrc: "/civil.png" },
];

const DraggableSlider = () => {
  const sliderRef = useRef(null);
  const wrapRef = useRef(null);
  const numClones = 2; // Number of clones for looping effect

  useEffect(() => {
    const slider = sliderRef.current;
    const wrap = wrapRef.current;

    // Clone elements to create infinite scroll effect
    const cloneElements = () => {
      const children = Array.from(slider.children);
      for (let i = 0; i < numClones; i++) {
        children.forEach((child) => {
          const clone = child.cloneNode(true);
          clone.style.opacity = 1; // Ensure the clones are visible
          slider.appendChild(clone); // Append cloned elements
        });
      }
    };

    cloneElements();

    const totalWidth = slider.scrollWidth / (1 + numClones); // Adjust width after cloning
    const visibleWidth = wrap.clientWidth; // Width of the visible container

    const draggableInstance = Draggable.create(slider, {
      type: "x",
      bounds: { minX: -totalWidth + visibleWidth, maxX: 0 }, // Adjust bounds for smooth scroll
      inertia: true, // Smooth drag
      onDrag: wrapElements,
      onThrowUpdate: wrapElements,
    });

    function wrapElements() {
      const currentX = gsap.getProperty(slider, "x");

      // Wrap the slider back when it reaches the end
      if (currentX <= -totalWidth + visibleWidth) {
        gsap.set(slider, { x: 0 });
      } else if (currentX >= 0) {
        gsap.set(slider, { x: -totalWidth + visibleWidth });
      }
    }

    return () => {
      // Cleanup Draggable instance on unmount
      draggableInstance[0].kill();
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ overflow: "hidden", width: "100%" }}>
      <div ref={sliderRef} style={{ display: "flex", width: "max-content" }}>
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              flex: "0 0 auto",
              width: "30vw",
              marginRight: "2vw",
            }}
          >
            <img
              src={service.imgSrc}
              alt={service.title}
              style={{ width: "100%", marginBottom: "12px" }}
            />
            <h3 className="h4" style={{ textAlign: "left" }}>
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraggableSlider;
