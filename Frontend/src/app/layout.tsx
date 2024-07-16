import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minify - URL Shortener ",
  description: "Minify - The Ultimate URL Shortener is a powerful and intuitive URL shortener designed to simplify theway you share links online. Whether you’re a marketer, developer, orcasual user, Minimalist provides a seamless experience for managing your URLs with ease.",
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
