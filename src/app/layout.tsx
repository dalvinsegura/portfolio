import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dalvin Segura - Software Developer & Tech Entrepreneur",
  keywords: [
    "Dalvin Segura",
    "Dalvin Segura Portfolio",
    "Dalvin Segura Projects",
    "Dalvin Segura Skills",
    "Dalvin Segura Contact",
  ],
  authors: [{ name: "Dalvin Segura" }],
  category: "Software Development",
  creator: "Dalvin Segura",
  publisher: "Dalvin Segura",
  alternates: {
    canonical: "https://seguradev.com",
  },
  description:
    "Portfolio of Dalvin Segura, showcasing projects in mobile and web development, including React Native, Next.js, and more.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.seguradev.com",
    siteName: "Dalvin Segura Portfolio",
    images: [
      {
        url: "https://4cnrzwxucdld10hl.public.blob.vercel-storage.com/Blue%20and%20White%20Modern%20Welcome%20Banner%20(2)-it21cObqO0mQYqXxLvF1PjSUnOTjm8.webp",
        width: 1200,
        height: 630,
        alt: "Dalvin Segura Portfolio",
      },
    ],
  },
  twitter: {
    creator: "@seguradev",
    site: "@seguradev",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
