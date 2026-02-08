import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/mevot/images/greenhouse/field3.jpg)" }}
      />
      <div className="absolute inset-0 bg-[#2d3d2a]/90" />

      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/mevot/images/logo.png"
              alt="לוגו מבואות עירון"
              width={48}
              height={72}
              className="object-contain opacity-70"
            />
          </div>
          <h3 className="text-yellow text-xl font-bold mb-1">מבואות עירון</h3>
          <p className="text-yellow/40 text-sm mb-8">
            אדם. יצירה. חברה – ברוח החינוך הקיבוצי
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-yellow/15" />
            <div className="w-1.5 h-1.5 rounded-full bg-olive/40" />
            <div className="w-8 h-px bg-yellow/15" />
          </div>
          <p className="text-yellow/30 text-xs">
            שיתוף פעולה עם החממה האקולוגית – החווה החקלאית בעין שמר
          </p>
        </div>
      </div>
    </footer>
  );
}
