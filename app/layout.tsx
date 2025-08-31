import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Chandra Coaters - Professional CED Coating Services",
  description: "Leading provider of CED (Cathodic Electro-Deposition) Coating services for automotive parts, industrial components, and metal surfaces. Quality, durability, and corrosion resistance guaranteed.",
  keywords: "CED coating, cathodic electro-deposition, automotive coating, industrial coating, metal surface treatment, corrosion resistance, Chandra Coaters",
  authors: [{ name: "Chandra Coaters" }],
  openGraph: {
    title: "Chandra Coaters - Professional CED Coating Services",
    description: "Leading provider of CED (Cathodic Electro-Deposition) Coating services for automotive and industrial applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
