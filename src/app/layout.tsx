import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSiteURL } from "@/lib/site-url";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const title = "Luxe Arch - Discover Properties";
const description = "Luxe Arch — discover, tour, and inquire about premium properties.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteURL()),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Luxe Arch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
