import "./globals.css";
import { switzerFont } from "./src/lib/myfonts";
import Navbar from "@/components/layout/navbar";

// app/layout.tsx
export const metadata = {
  title: {
    default: "Emmanuel Oyeyipo – Frontend Engineer",
    template: "%s | Emmanuel Oyeyipo",

  },
  description:
    "Emmanuel Oyeyipo is a Frontend Engineer dedicated to turning complex ideas into seamless, high-performance digital experiences. With over 2 years of experience, he specialize in building scalable web applications using React, Next.js, and TypeScript.",
  icons: {
    icon: "/favicon.svg"
  },
  keywords: [
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Engineer",
    "JavaScript Developer",
    "Typescript Developer",
    "Typescript Engineer",
    "Web Developer",
    "Frontend Developer Portfolio",
    "Frontend Engineer Portfolio",
    "A teenage web developer Portfolio",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Emmanuel Oyeyipo" }],
  creator: "Emmanuel Oyeyipo",
  metadataBase: new URL("https://devemmanuel.tech"),
  twitter: {
    card: "summary_large_image",
    site: "@Emma_Leo01",
    creator: "@Emma_Leo01",
    title: "Emmanuel Oyeyipo – Frontend Engineer",
    description:
      "Frontend Engineer dedicated to turning complex ideas into seamless, high-performance digital experiences.",
    images: ["/assets/images/og-image.jpeg"],
  },
  openGraph: {
    title: "Emmanuel Oyeyipo – Frontend Engineer",
    description:
      "Frontend Engineer dedicated to turning complex ideas into seamless, high-performance digital experiences.",
    url: "https://devemmanuel.tech",
    siteName: "Emmanuel Oyeyipo Portfolio",
    images: [
      {
        url: "/assets/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Oyeyipo – Frontend Engineer",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased ${switzerFont.variable} scroll-smooth`}>
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
