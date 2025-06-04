"use client";

export default function AboutPage() {
  return (
    <div>
      {Array.from({ length: 70 }).map((_, i) => (
        <div key={i}>AboutPage</div>
      ))}
    </div>
  );
}
