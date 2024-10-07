import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Commerce",
  description:
    "Discover My Commerce, India's leading ecommerce platform offering a wide range of products, from groceries to electronics, delivered right to your doorstep. Shop for your daily needs with ease and convenience.",
  openGraph: {
    title: "My Commerce - Shop for All Your Needs in India",
    description: "Wide range of products available across India.",
    url: "https://mycommerce.in",
    siteName: "My Commerce",
    images: [
      {
        url: "https://www.pexels.com/photo/black-and-white-box-beside-white-metal-rack-6214471/",
        alt: "A Generic Image for my Ecommerce",
      },
      {
        url: "https://www.pexels.com/photo/stylish-espadrilles-pair-in-carton-box-4464819/",
        alt: "An Image for my Ecommerce",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mycommerce_in",
    title: "My Commerce - India's Best Ecommerce Platform",
    description:
      "Shop for all your daily needs, from groceries to electronics.",
    images: [
      "https://www.pexels.com/photo/black-and-white-box-beside-white-metal-rack-6214471/",
      "https://www.pexels.com/photo/stylish-espadrilles-pair-in-carton-box-4464819/"
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mycommerce.com",
  },
};

const font = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
