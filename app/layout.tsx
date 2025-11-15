import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "alpo-DH - اقرأ واستمع للمقالات الطبية",
  description:
    "منصة مقالات طبية موثوقة - اقرأ المقالات واستمع إليها في نفس الوقت برعاية خبراء بدرجة دكتوراه",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${alexandria.className} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
