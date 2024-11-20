import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const franklin = localFont({
  src: "./fonts/LibreFranklin-VariableFont_wght.ttf",
  variable: "--font-franklin",
  weight: "100 900",
});
const franklin_light = localFont({
  src: "./fonts/LibreFranklin-Light.ttf",
  variable: "--font-franklin-light",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${franklin.variable} ${franklin_light.variable} antialiased`}>
       
       
        {children}
       
      </body>
    </html>
  );
}
