"use client";
import Image from "next/image";
import Header from "./Header";
import Home from "./Home";
import AppInfo from "./AppInfo";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Download from "./Download";
import Vantagens from "./Vantagens";
import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";
export default function App() {
  return (
    <NextUIProvider>
      <main className="flex flex-col w-screen max-w-full bg-white">
        <Header />
        <Home />
        <AppInfo />
        <Vantagens />
        <Reviews />
        <Download />
        <Footer />
      </main>
    </NextUIProvider>
  );
}
