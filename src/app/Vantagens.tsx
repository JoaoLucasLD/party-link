import React from "react";
import Carousel from "./Carousel";
import Link from "next/link";

export default function Vantagens() {
  return (
    <section className="flex flex-col h-[700px] justify-center items-center">
      <h2 className="mt-10 mb-16 text-black text-5xl font-semibold">
        Vantagens de utilizar o Party Link
      </h2>
      <Carousel />
    </section>
  );
}
