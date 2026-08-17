import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://laybit.dev"),
  title: {
    default: "Laybit — Build Better Software",
    template: "%s · Laybit",
  },
  description:
    "Laybit is a developer platform with everything you need to ship — from AI-powered assistants to everyday developer tools. One platform. Multiple products.",
  keywords: [
    "Laybit",
    "developer tools",
    "developer platform",
    "Snap2Code",
    "screenshot to code",
    "developer products",
  ],
  authors: [{ name: "Laybit" }],
  openGraph: {
    title: "Laybit — Build Better Software",
    description:
      "One platform. Multiple products. Everything developers need to ship faster.",
    url: "https://laybit.dev",
    siteName: "Laybit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laybit — Build Better Software",
    description:
      "One platform. Multiple products. Everything developers need to ship faster.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      
        <body className="bg-background font-sans text-text antialiased">
          <Navbar />
            {children}
          <Footer />
        </body>
    </html>
  );
}
