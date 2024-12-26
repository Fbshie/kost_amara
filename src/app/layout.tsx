import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const libre = localFont({
  src: "./fonts/LibreFranklin-Regular.otf",
  variable: "--font-franklin",
  weight: "100 900",
});
const libre_sb = localFont({
  src: "./fonts/LibreFranklin-SemiBold.otf",
  variable: "--font-sb",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kost Amara",
  description: "Kost Putri Amara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libre.variable} font-franklin antialiased`}>
       
       
        {children}
       
      </body>
    </html>
  );
}
