
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://isurubsuraweera.me"),

  title: {
    default: "Isuru B Suraweera | Full-Stack Developer",
    template: "%s | Isuru B Suraweera",
  },

  description:
    "Official portfolio of Isuru B Suraweera, a Full-Stack Developer and IT undergraduate at SLIIT. Explore my projects, technical skills, experience, and software development journey.",

  keywords: [
    "Isuru B Suraweera",
    "Isuru Bimsara",
    "Isuru Suraweera",
    "Full-Stack Developer Sri Lanka",
    "Backend Developer Sri Lanka",
    "Software Developer",
    "SLIIT",
    "Node.js Developer",
    "React Developer",
    "Portfolio",
  ],

  authors: [{ name: "Isuru B Suraweera" }],
  creator: "Isuru B Suraweera",
  publisher: "Isuru B Suraweera",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isurubsuraweera.me",
    siteName: "Isuru B Suraweera Portfolio",
    title: "Isuru B Suraweera | Full-Stack Developer",
    description:
      "Explore the portfolio, projects, skills, and professional experience of Isuru B Suraweera.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Isuru B Suraweera - Full-Stack Developer",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
