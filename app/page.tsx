import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import ParallaxSection from "@/components/ParallaxSection";
import PhotoGrid from "@/components/PhotoGrid";
import Footer from "@/components/Footer";

const programsTop = [
  {
    title: "מייקרס",
    grade: "שכבות ח׳ ו-ט׳",
    icon: "🔧",
    image: "/images/greenhouse/research.jpg",
    description:
      "בתכנית מפתחים פתרונות לאתגרים שונים בתחום החקלאות והסביבה באמצעות מייקינג בדגש על חשיבה יצירתית, פיתוח כלים יישומיים לתכנון ועיצוב תוך ביטוי אישי מקורי. הפתרונות משלבים מגוון טכנולוגיות הנגרות ובנייה בחומרים שונים, דרך מידול והדפסת תלת מימד ועד תכנות בקרים וחיישנים (מיקרוביט).",
  },
  {
    title: "תוכנית מאסטר פוד",
    grade: "מצוינות שכבת ט׳",
    icon: "🍽️",
    image: "/images/greenhouse/plants.jpg",
    description:
      "תכננו בצוותים מנה בריאה המבוססת על חומר גלם מועמד כחלבון העתיד: האצה אולווה, ספירולינה, עשב חיטה, האצה גרצילריה ועדשת המים. למדנו את חשיבות ערכם התזונתי של מרכיבי המזון.",
  },
  {
    title: "חיידקים בשירות האדם",
    grade: "מצוינות ט׳",
    icon: "🔬",
    image: "/images/greenhouse/lab.jpg",
    description:
      "בתכנית זו נחשפנו לשיטות לשימור מזון, התנסינו בשיטות מסורתיות כמו התססה וכבישה ובודדנו מהם חיידקים. התנסנו בעבודת מעבדה מיקרוביולוגית, כגון זריעה, בידוד וגידול חיידקים במצעים שונים. חקרנו את עולם המיקרואורגניזמים ותפקידם במחזור החיים ועוד.",
  },
  {
    title: "חקלאות העתיד",
    grade: "מדעים שכבת י׳",
    icon: "🌱",
    image: "/images/greenhouse/greenhouse1.jpg",
    description:
      "התכנית עוסקת בחקלאות העתיד, שילוב בין טכנולוגיה, חקלאות, סביבה ומדע. האתגר המרכזי הוא איך להאכיל 10 מיליארד אנשים באמצעות כדור ארץ אחד, ובמילים אחרות – כיצד להנגיש מזון בריא לאנשים, כיצד לייצר יותר מזון באמצעות פחות משאבים.",
  },
];

const programsBottom = [
  {
    title: "הידרופוניקה",
    grade: "מב״ר א׳",
    icon: "💧",
    image: "/images/greenhouse/hydroponics.jpg",
    description:
      "התלמידים עברו הכשרה על כל המיומנויות הדרושות לבנייה וגידול של מערכת הידרופוניקה (שימוש בכלים בסדנת בנייה בעץ, עבודה עם צינורות ומשאבות, מכשירים למדידות ריכוז הידרופוניקה ועוד…). מתוך התנסות חוויתית, בניית קיטים – התלמידים למדו על צרכי הצמח הבסיסיים, תהליך הפוטוסינתזה, תהליכים מכניים במערכות אקווה והידרו פוניקה.",
  },
  {
    title: "ביו-מימיקרי",
    grade: "שכבת י׳",
    icon: "🦋",
    image: "/images/greenhouse/students.jpg",
    description:
      "התוכנית עוסקת בפיתוח פתרונות יצירתיים לאתגרים בהשראת הטבע. במסגרת השליש הראשון הכרנו דוגמאות של ביומימיקרי שפיתחו אחרים, התחלקנו לצוותים, ניתחנו כתבה מדעי, יצרנו סרטון מדובב ומצגת המתארת את הפיתוח ואת ההשראה. בשליש השני נעסוק בפרויקט של בניית משחקי חצר לתלמידי ״קשתות״ בהשראת בעלי חיים.",
  },
  {
    title: "ביו-דיזיין",
    grade: "שכבת י׳",
    icon: "🎨",
    image: "/images/greenhouse/teaching.jpg",
    description:
      "מטרת התכנית לתכנן ולעצב את מערכות החיים העתידיות במגוון קנה מידה – מהמוצר, דרך סביבות המגורים ועד מערכות עירוניות. בתכנית אנו מפתחים חלופות עיצוביות חכמות לבעיות אקולוגיות תוך יצירת סימביוזה חדשה עם הטבע.",
  },
  {
    title: "יום חממה יער – פרויקט גומא",
    grade: "פרויקט מיוחד",
    icon: "🌳",
    image: "/images/greenhouse/aerial.jpg",
    description:
      "התלמידים לומדים על תחומים רבים ומגוונים, שותפים לפרויקטים רבים, משתתפים פעילים במחקרים בשת״פ עם חוקרי החממה, פעילים משמעותיים מאד בפרויקטים שונים בחממה המערבים תלמידים, מומחים, עבודות תחזוקה ומיצגים אמנותיים.",
  },
];

const galleryPhotos = [
  { src: "/images/greenhouse/field1.jpg", alt: "עבודת שדה בחממה" },
  { src: "/images/greenhouse/field2.jpg", alt: "פעילות חקלאית" },
  { src: "/images/greenhouse/research.jpg", alt: "מחקר בחממה" },
  { src: "/images/greenhouse/plants.jpg", alt: "צמחים בחממה" },
  { src: "/images/greenhouse/hydroponics.jpg", alt: "מערכת הידרופונית" },
  { src: "/images/greenhouse/students.jpg", alt: "תלמידים בחממה" },
  { src: "/images/greenhouse/lab.jpg", alt: "עבודת מעבדה" },
  { src: "/images/greenhouse/teaching.jpg", alt: "הוראה בחממה" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Intro text section */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-sage-dark text-lg md:text-xl leading-[2] font-light">
            במסגרת שיתופי פעולה אלו, מתנסים תלמידי המוסד
            במיזמים שונים במסגרת החממה, ותלמידי התיכון אף יכולים לכתוב עבודת גמר
            בהיקף 5 יחידות לימוד בליווי צוות החממה.
          </p>
        </div>
      </section>

      {/* Programs Section - Top */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-olive/10 text-olive-dark font-bold text-sm rounded-full mb-6">
              התוכניות שלנו
            </span>
            <h2 className="text-sage-dark text-3xl md:text-5xl font-black mb-5 leading-tight">
              תוכניות לימודים בשיתוף החממה
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
              מגוון תוכניות ייחודיות המשלבות מדע, טכנולוגיה, חקלאות ועיצוב
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programsTop.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                grade={program.grade}
                description={program.description}
                icon={program.icon}
                image={program.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax break */}
      <ParallaxSection
        imageSrc="/images/greenhouse/field1.jpg"
        alt="שדות החממה האקולוגית"
      >
        <h3 className="text-white text-3xl md:text-5xl font-black mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
          חוקרים את המחר
        </h3>
        <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
          איך נאכיל 10 מיליארד איש בעזרת כדור ארץ אחד?
        </p>
      </ParallaxSection>

      {/* Programs Section - Bottom */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programsBottom.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                grade={program.grade}
                description={program.description}
                icon={program.icon}
                image={program.image}
                index={index + 4}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax break */}
      <ParallaxSection
        imageSrc="/images/greenhouse/field2.jpg"
        alt="פעילות חקלאית בחממה"
      >
        <h3 className="text-white text-3xl md:text-5xl font-black mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
          צומחים יחד
        </h3>
        <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
          מדע, טכנולוגיה, חקלאות ותרבות – הכל מתחבר בחממה
        </p>
      </ParallaxSection>

      {/* Photo Gallery */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-12">
            <h3 className="text-sage-dark text-3xl md:text-4xl font-black mb-3">גלריית תמונות</h3>
            <p className="text-gray-400 text-base">תמונות מפעילויות החממה האקולוגית</p>
          </div>
          <PhotoGrid photos={galleryPhotos} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
