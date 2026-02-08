"use client";

interface ParallaxSectionProps {
  imageSrc: string;
  alt: string;
  children?: React.ReactNode;
}

export default function ParallaxSection({ imageSrc, alt, children }: ParallaxSectionProps) {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Parallax image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${imageSrc})` }}
        role="img"
        aria-label={alt}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-sage-dark/50" />
      {/* Content */}
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-8 text-center">
            {children}
          </div>
        </div>
      )}
    </section>
  );
}
