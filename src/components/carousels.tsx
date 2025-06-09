import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/1.JPG",
  "/images/2.JPG",
  "/images/3.JPG",
  "/images/4.JPG",
  "/images/5.JPG",
  "/images/6.JPG",
];

export default function Carousels() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageHeight = 240; // Increased from 180 to 240
  const gap = 28;          // Optionally, increase gap for better spacing
  const imageWidth = 360;  // Increased from 270 to 360
  const totalWidth = images.length * (imageWidth + gap);
  const translateX = -(scrollY % totalWidth);

  const carouselImages = [...images, ...images];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "98.7vw",
        background: "#0d0d0d",
        padding: "20px 0",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: `${gap}px`,
          transform: `translateX(${translateX}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {carouselImages.map((src, idx) => (
          <div
            key={idx}
            style={{
              height: `${imageHeight}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#222",
              borderRadius: "18px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              flex: "0 0 auto",
              overflow: "hidden",
            }}
          >
            <Image
              src={src}
              alt=""
              height={imageHeight}
              width={imageWidth}
              style={{
                height: `${imageHeight}px`,
                width: "auto",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}