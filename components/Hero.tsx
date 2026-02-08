import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://greenhouse.org.il/wp-content/uploads/2023/01/vid3.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-20 h-28 md:w-24 md:h-36">
            <Image
              src="/images/logo.png"
              alt="לוגו מבואות עירון"
              fill
              className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        </div>

        {/* Institution name */}
        <p className="text-white/60 text-sm md:text-base tracking-[0.3em] uppercase mb-3">
          המוסד החינוכי
        </p>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-3 leading-[1.1] drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
          מבואות עירון
        </h1>
        <p className="text-white/50 text-base md:text-lg font-light mb-14">
          אדם. יצירה. חברה – ברוח החינוך הקיבוצי
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="w-12 h-px bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-olive" />
          <div className="w-12 h-px bg-white/20" />
        </div>

        {/* Page title */}
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug drop-shadow-[0_2px_16px_rgba(0,0,0,0.3)]">
          שיתופי פעולה עם החממה
          <br />
          <span className="text-lime drop-shadow-[0_2px_16px_rgba(216,233,131,0.3)]">האקולוגית בעין שמר</span>
        </h2>

        {/* Intro paragraph */}
        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-[1.9] font-light">
          המוסד החינוכי מבואות עירון מקיים שיתופי פעולה מגוונים עם החממה האקולוגית
          – החווה החקלאית בעין שמר.
        </p>
      </div>

      {/* Bottom fade to yellow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
