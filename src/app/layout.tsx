import "./globals.css";
import type { Metadata } from "next";
import { Geist, Playfair_Display, Dancing_Script } from "next/font/google";
import { cn } from '@/lib/utils'
import Script from 'next/script';

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
  metadataBase: new URL('https://www.paradisecakes.xyz'),
  title: "Paradise Cakes by Sangeeta Agrawal | Handcrafted Cakes & Pastries",
  description: "Paradise Cakes started as a small family business with a passion for creating delicious and beautiful cakes. We use only the finest ingredients and never compromise on quality. Each cake is handcrafted to perfection.",
  keywords: [
    "custom cakes",
    "birthday cakes",
    "wedding cakes",
    "theme cakes",
    "pastries",
    "bakery",
    "desserts",
    "cake delivery",
    "custom desserts",
    "celebration cakes",
    "cake shop",
    "fresh baked goods",
    "specialty cakes",
    "cakes in Chaibasa",
    "Indian cakes",
    "mango cake",
    "chocolate truffle cake",
    "boss baby theme cake"
  ],
  authors: [{ name: "Sangeeta Agrawal", url: "https://www.paradisecakes.xyz" }],
  creator: "Sangeeta Agrawal",
  publisher: "Paradise Cakes",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.paradisecakes.xyz",
    title: "Paradise Cakes by Sangeeta Agrawal | Handcrafted Cakes & Pastries",
    description: "Handcrafted cakes and pastries made with love. Perfect for any occasion. We specialize in custom theme cakes, classic cakes, Indian specials, and more.",
    siteName: "Paradise Cakes",
    images: [{
      url: "/images/logo.png",
      width: 500,
      height: 500,
      alt: "Paradise Cakes - Handcrafted Cakes & Pastries by Sangeeta Agrawal",
    }],
  },
  alternates: {
    canonical: "https://www.paradisecakes.xyz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "Paradise Cakes",
              image: "https://www.paradisecakes.xyz/images/logo.png",
              "@id": "https://www.paradisecakes.xyz",
              url: "https://www.paradisecakes.xyz",
              telephone: "+91 7979031093",
              email: "sangeetasaraff@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5A, jamuna tower, tungri",
                addressLocality: "Chaibasa",
                postalCode: "833201",
                addressCountry: "IN"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 7979031093",
                email: "sangeetasaraff@gmail.com",
                contactType: "customer service"
              },
              founder: {
                "@type": "Person",
                name: "Sangeeta Agrawal"
              },
              priceRange: "₹₹",
              servesCuisine: "Bakery & Desserts",
              menu: "https://www.paradisecakes.xyz/products",
              potentialAction: {
                "@type": "OrderAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.paradisecakes.xyz/ordering",
                  inLanguage: "en-IN"
                },
                deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModePickUp"]
              }
            })
          }}
        />
      </head>
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
