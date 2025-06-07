import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
];

export default function Carousels() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageHeight = 180; 
  const gap = 24;
  const imageWidth = 270; 
  const totalWidth = images.length * (imageWidth + gap);
  const translateX = -(scrollY % totalWidth);

  const carouselImages = [...images, ...images];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100vw",
        background: "#0d0d0d",
        padding: "20px 0",
        boxSizing: "border-box",
        transform: "rotate(-2deg)",
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
              width={9999} // Large width to preserve aspect ratio
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