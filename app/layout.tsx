import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "החממה | מבואות עירון",
  description: "שיתופי פעולה עם החממה האקולוגית בעין שמר - המוסד החינוכי מבואות עירון",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
