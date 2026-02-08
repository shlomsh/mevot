"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PhotoGridProps {
  photos: { src: string; alt: string }[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {photos.map((photo, i) => (
        <div
          key={i}
          className={`
            relative overflow-hidden rounded-xl aspect-square
            transition-all duration-700 ease-out
            ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}
          `}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}
