import React, { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";

interface GalleryProps {
  item: GalleryItem;
}

export default function Gallery({ item }: GalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex w-full h-[80vh] items-center justify-center relative">
      {/* Main Image */}
      <div className="flex-1 flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-bold mb-2 text-white">{item.title}</h2>
        <p className="mb-4 text-gray-300 max-w-2xl text-center">{item.description}</p>
        <div className="relative h-[60vh] w-auto max-w-4xl rounded-3xl overflow-hidden bg-black">
          <Image
            src={item.photos[selected]}
            alt={item.title}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-3xl"
            sizes="(max-width: 1200px) 80vw, 800px"
            priority
          />
        </div>
      </div>
      {/* Preview Bar */}
      <div className="flex flex-col gap-3 absolute right-6 top-1/2 -translate-y-1/2 z-20">
        {item.photos.map((photo, idx) => (
          <button
            key={photo}
            onClick={() => setSelected(idx)}
            className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              idx === selected ? "border-white" : "border-transparent opacity-70"
            }`}
            style={{ width: 60, height: 60 }}
            aria-label={`Preview ${item.title} photo ${idx + 1}`}
          >
            <Image
              src={photo}
              alt={`${item.title} photo ${idx + 1}`}
              width={60}
              height={60}
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}