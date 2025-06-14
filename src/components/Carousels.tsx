import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/1.JPG",
  "/images/2.JPG",
  "/images/3.JPG",
  "/images/4.JPG",
  "/images/5.JPG",
];

export default function Carousels() {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    // Initialize width
    setWindowWidth(window.innerWidth);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Responsive sizing
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  const imageHeight = isMobile ? 160 : isTablet ? 200 : 240;
  const gap = isMobile ? 16 : isTablet ? 20 : 28;
  const imageWidth = isMobile ? 240 : isTablet ? 300 : 360;
  
  const totalWidth = images.length * (imageWidth + gap);
  const translateX = -(scrollY % totalWidth);

  const carouselImages = [...images, ...images];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100vw",
        background: "#0d0d0d",
        padding: isMobile ? "15px 0" : "20px 0",
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
              borderRadius: isMobile ? "12px" : "18px",
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
