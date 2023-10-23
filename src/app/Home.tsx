import React from "react";

export default function Home() {
  return (
    <section className="w-full h-[620px]">
      <div
        className="h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/banner.jpg")' }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <div className="w-[70%] flex justify-center text-center">
            <h1 className="text-white text-5xl font-bold">
              Garanta momentos inesquecíveis com as pessoas que você ama!
            </h1>
          </div>

          <p className="pt-8 text-white text-xl">
            Organize suas festas de forma prática e rápida.
          </p>
          <button className="bg-[#FA4A0C] text-white px-10 py-3 rounded-md mt-10 hover:bg-[#cc3600] transition">
            Baixar
          </button>
        </div>
      </div>
    </section>
  );
}
