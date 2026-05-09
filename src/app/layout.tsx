import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nurul Shaikh | Top Backend Developer in Gujarat",
  description: "I am Nurul Shaikh, the best backend developer based in Navsari, Gujarat. Expert in scalable Node.js architectures, Express.js APIs, and performance-driven Web Development. Let's build something robust.",
  keywords: [
    "backend developer in gujarat", 
    "best backend developer near me", 
    "best website developer near me", 
    "Nurul Shaikh", 
    "developer in navsari", 
    "Node js developer", 
    "express js expert",
    "freelance backend developer india",
    "API development services"
  ],
  authors: [{ name: "Nurul Shaikh", url: "https://nurulshaikh.com" }], // You can update this domain later
  creator: "Nurul Shaikh",
  publisher: "Nurul Shaikh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Nurul Shaikh | Top Backend Developer",
    description: "Expert Node.js & Backend Developer in Gujarat, India. Architecting scalable web applications.",
    url: "https://nurulshaikh.com", // You should change this to your actual deployed domain
    siteName: "Nurul Shaikh Portfolio",
    images: [
      {
        url: "/images/professional_avatar.png",
        width: 800,
        height: 600,
        alt: "Nurul Shaikh - Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurul Shaikh | Backend Engineering Expert",
    description: "Specializing in Node.js, API architecture, and database optimization.",
    creator: "@nurulshaikh", // Replace with your twitter handle if any
    images: ["/images/professional_avatar.png"],
  },
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
  verification: {
    google: "google1ee9fe67d0400239", // Adds the meta tag for Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
