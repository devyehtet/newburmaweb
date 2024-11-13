import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";
export const metadata: Metadata = {
  title: "A New Burma",
  description:
    "A New Burma is a collective of young people who believe in working together toward a shared goal: building a future inclusive of all who would call Myanmar home.",
};

const neutraface = localfont({
  src: [
    {
      path: "/fonts/NeutrafaceDisplayTitling.woff",
      weight: "bold",
    },
  ],
  variable: "--font-neutraface",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${neutraface.variable} antialiased bg-white `}>
        {children}
      </body>
    </html>
  );
}
