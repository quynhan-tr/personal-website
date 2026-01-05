import React, { useEffect, useState } from "react";

export default function SplitTextAnimated({ text, delay = 30, speed = 5 }: { text: string; delay?: number; speed?: number }) {
  const lines = text.split("\n");
  const wordsFlat = lines.map(line => line.split(" ")).flat();
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < wordsFlat.length) {
      const timeout = setTimeout(() => setVisibleCount(visibleCount + 1), speed);
      return () => clearTimeout(timeout);
    }
  }, [visibleCount, wordsFlat.length, speed]);

  let globalWordIndex = 0;

  return (
    <span className="inline-block">
      {lines.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split(" ").map((word, wordIndex) => {
            const currentGlobalIndex = globalWordIndex;
            globalWordIndex++;
            return (
              <span
                key={`${lineIndex}-${wordIndex}`}
                className={`inline-block transition-all duration-300 ease-in-out ${currentGlobalIndex < visibleCount
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                  }`}
                style={{ transitionDelay: `${currentGlobalIndex * delay}ms` }}
              >
                {word}&nbsp;
              </span>
            );
          })}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
}