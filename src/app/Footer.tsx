import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-evenly items-center w-full h-28 bg-[#FA4A0C]">
      <img
        src="/images/logo.png"
        alt="PartyLink"
        className="w-[180px] h-[50px]"
      />
      <div className="flex gap-10">
        <a href="">
          <Image
            alt="Logo do Facebook"
            src="/images/facebook.svg"
            width={40}
            height={40}
          />
        </a>
        <a href="">
          <Image
            alt="Logo do Instagram"
            src="/images/instagram.svg"
            width={40}
            height={40}
          />
        </a>
      </div>
      <p className="text-xs text-[#5c5c5c] font-bold">
        Copyright 2023 PartyLink
      </p>
    </footer>
  );
}
