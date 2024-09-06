import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minify - URL Shortener ",
  description: "Minify is a digital URL shortener that simplifies long web addresses into concise, shareable links, making it ideal for businesses and individuals seeking to streamline their digital marketing efforts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/logo.png" />
        </head>
      <body className={inter.className}>
        {children}
            <Footer />
      </body>
    </html>
  );
}
