import React, { useEffect, useState } from "react";

export default function SplitTextAnimated({ text, delay = 30, speed = 5 }: { text: string; delay?: number; speed?: number }) {
  const words = text.split(" ");
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < words.length) {
      const timeout = setTimeout(() => setVisibleCount(visibleCount + 1), speed);
      return () => clearTimeout(timeout);
    }
  }, [visibleCount, words.length, speed]);

  return (
    <span className="inline-block">
      {words.map((word, idx) => (
        <span
          key={idx}
          className={`inline-block transition-all duration-300 ease-in-out ${
            idx < visibleCount
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
          style={{ transitionDelay: `${idx * delay}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}