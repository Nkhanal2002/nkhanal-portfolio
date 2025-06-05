import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Narayan Khanal | CS Enthusiast",
  description:
    "Narayan Khanal - Computer Science student at Caldwell University. Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects and experience.",
  keywords: [
    "Narayan Khanal",
    "narayan khanal",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Computer Science",
    "Caldwell University",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Narayan Khanal" }],
  creator: "Narayan Khanal",
  publisher: "Narayan Khanal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://narayankhanal.vercel.app",
    title: "Narayan Khanal | CS Enthusiast",
    description:
      "Computer Science student and aspiring Software Engineer. Explore my projects, experience, and technical skills in full-stack web development.",
    siteName: "Narayan Khanal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Narayan Khanal - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Narayan Khanal | CS Enthusiast",
    description:
      "Computer Science student and aspiring Software Engineer. Explore my projects and technical skills.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "xGhXi1joti9rFHISixCqMDuyWb9bUTvos5vIZDtjhEA",
  },
  icons: {
    icon: [
      { url: "/Favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/Favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicons/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/Favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/Favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/Favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
          integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="canonical" href="https://narayankhanal.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Narayan Khanal",
              jobTitle: "Computer Science Student & Aspiring Software Engineer",
              url: "https://narayankhanal.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/narayan-khanal-15a5b81aa/",
                "https://github.com/Nkhanal2002",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Caldwell University",
              },
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Full Stack Development",
                "Python",
                "PostgreSQL",
                "MongoDB",
              ],
            }),
          }}
        />
      </head>
      <body className="relative font-serif">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
