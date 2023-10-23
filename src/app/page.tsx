import Image from "next/image";
import Header from "./Header";
import Home from "./Home";
import AppInfo from "./AppInfo";
import Footer from "./Footer";
import Reviews from "./Reviews";
export default function Main() {
  return (
    <main className="flex flex-col w-screen max-w-full bg-white">
      <Header />
      <Home />
      <AppInfo />
      <Reviews />
      <Footer />
    </main>
  );
}
