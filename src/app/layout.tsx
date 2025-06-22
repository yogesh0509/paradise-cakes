import "./globals.css";
import type { Metadata } from "next";
import { Geist, Playfair_Display, Dancing_Script } from "next/font/google";
import { cn } from '@/lib/utils'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paradise Cakes | Handcrafted Cakes & Pastries",
  description: "Delicious handcrafted cakes and pastries for birthdays, weddings, and special occasions. Order custom cakes made with love from Paradise Cakes.",
  keywords: ["cakes", "pastries", "bakery", "custom cakes", "birthday cakes", "wedding cakes", "desserts"],
  authors: [{ name: "Paradise Cakes" }],
  creator: "Paradise Cakes",
  publisher: "Paradise Cakes",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://thecakemakers.com",
    title: "Paradise Cakes | Handcrafted Cakes & Pastries",
    description: "Delicious handcrafted cakes and pastries for birthdays, weddings, and special occasions.",
    siteName: "Paradise Cakes",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Paradise Cakes - Handcrafted Cakes & Pastries",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paradise Cakes | Handcrafted Cakes & Pastries",
    description: "Delicious handcrafted cakes and pastries for birthdays, weddings, and special occasions.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        geistSans.variable,
        playfair.variable,
        dancingScript.variable
      )}>
        {children}
      </body>
    </html>
  );
}
