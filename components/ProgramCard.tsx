"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProgramCardProps {
  title: string;
  grade: string;
  description: string;
  index: number;
  icon: string;
  image?: string;
}

export default function ProgramCard({ title, grade, description, index, icon, image }: ProgramCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const isOlive = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`
        group relative bg-white rounded-2xl overflow-hidden
        shadow-[0_2px_16px_rgba(87,106,139,0.06)]
        transition-all duration-500 ease-out
        hover:shadow-[0_8px_40px_rgba(87,106,139,0.14)]
        hover:-translate-y-1
        ${isVisible ? "animate-fade-in-up" : "opacity-0"}
      `}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Card image */}
      {image && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          {/* Grade badge on image */}
          <div className="absolute top-4 right-4">
            <span className={`
              px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm
              ${isOlive ? "bg-olive/90 text-white" : "bg-lime/90 text-sage-dark"}
            `}>
              {grade}
            </span>
          </div>
        </div>
      )}

      {/* Top accent bar (only if no image) */}
      {!image && (
        <div className={`h-1 ${isOlive
          ? "bg-gradient-to-l from-olive via-olive/60 to-transparent"
          : "bg-gradient-to-l from-lime via-lime/60 to-transparent"
        }`} />
      )}

      <div className="p-6">
        {/* Header row: icon + badge (badge only if no image) */}
        <div className="flex items-center justify-between mb-4">
          <div className={`
            w-11 h-11 rounded-xl flex items-center justify-center text-xl
            ${isOlive ? "bg-olive/10" : "bg-lime/20"}
            transition-transform duration-300 group-hover:scale-110
          `}>
            {icon}
          </div>

          {!image && (
            <span className={`
              px-3 py-1 rounded-full text-xs font-bold
              ${isOlive ? "bg-olive/10 text-olive-dark" : "bg-lime/25 text-sage-dark"}
            `}>
              {grade}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sage-dark text-lg font-bold mb-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 leading-[1.8] text-[13.5px]">
          {description}
        </p>
      </div>
    </div>
  );
}
