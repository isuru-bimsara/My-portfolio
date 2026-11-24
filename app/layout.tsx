
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isuru B Suraweera | Full-Stack Developer",
  description:
    "Personal portfolio of Isuru B Suraweera - Backend Developer and Information Technology undergraduate at SLIIT.",
  keywords: [
    "Isuru B Suraweera",
    "Full-Stack Developer",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Isuru B Suraweera" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
