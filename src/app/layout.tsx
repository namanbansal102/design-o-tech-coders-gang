import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charter Immigration",
  description: "This is A Charter Accountant Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
     
      <body style={{
        backgroundColor:""
      }} className={inter.className}>{children}</body>
    </html>
  );
}
