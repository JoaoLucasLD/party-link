import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const poppins = Poppins({ weight: "400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Party Link",
  description: "Crie momentos inesquecíveis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
