import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import SmoothScroll from "../components/SmoothScroll";
import ScrollToTop from "../components/ScrollToTop";
import ScrollProgress from "../components/ScrollProgress";
import type { Metadata } from "next";
import SchemaMarkup from "../components/SchemaMarkup";
import FloatingShop from "../components/FloatingShop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://watcon.co.in"),
  title: "Watcon International | India’s Leading Swimming Pool & Waterbody Builders",
  description: "Watcon International is India’s premium waterbody engineering company since 1972. Experts in luxury swimming pools, hydrotherapy, and musical fountains across India.",
  keywords: [
    "swimming pool builder delhi",
    "swimming pool builder india",
    "luxury swimming pool india",
    "hydrotherapy pool india",
    "underwater treadmill pool",
    "cold plunge pool india",
    "cryotherapy room india",
    "spa sauna steam builder india",
    "musical fountain india",
    "architectural fountain india",
    "waterbody designer india",
    "resort pool builder india"
  ],
  authors: [{ name: "Watcon International" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://watcon.co.in/",
    siteName: "Watcon International",
    title: "Watcon International | India’s Leading Swimming Pool & Waterbody Builders",
    description: "Experts in luxury swimming pools, hydrotherapy, and musical fountains across India since 1972.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Watcon International Luxury Pools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Watcon International | Luxury Pool Builders",
    description: "Experts in luxury swimming pools and waterbody engineering in India.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        <SchemaMarkup />
        <CustomCursor />
        <ScrollProgress />
        <ScrollToTop />
        <FloatingShop />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}