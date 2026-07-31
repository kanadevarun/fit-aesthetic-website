import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

// ============================================================
// Font Configuration — Premium typography
// ============================================================
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// ============================================================
// SEO Metadata
// ============================================================
export const metadata: Metadata = {
  title: "Dr. Akanksha Tiwari — Fit Aesthetic | Premium Fitness Coaching",
  description:
    "Personalized fitness guidance, realistic diet strategies, and sustainable transformation plans designed for real people. 500+ successful transformations.",
  keywords: [
    "fitness coach",
    "personal training",
    "diet planning",
    "fat loss",
    "muscle gain",
    "online fitness",
    "wellness",
    "Dr. Akanksha Tiwari",
    "Fit Aesthetic",
  ],
  authors: [{ name: "Dr. Akanksha Tiwari" }],
  creator: "Dr. Akanksha Tiwari",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fitaesthetic.in",
    siteName: "Fit Aesthetic",
    title: "Dr. Akanksha Tiwari — Fit Aesthetic | Premium Fitness Coaching",
    description:
      "Personalized fitness guidance, realistic diet strategies, and sustainable transformation plans designed for real people.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Akanksha Tiwari — Fit Aesthetic",
    description:
      "Premium fitness coaching for sustainable transformations. 500+ guided clients.",
    creator: "@fitaesthetic",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ============================================================
// Root Layout
// ============================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
