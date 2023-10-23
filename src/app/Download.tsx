import React from "react";

export default function Download() {
  return (
    <section id="download" className="w-full h-[500px]">
      <div
        className="w-full h-full bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'url("/images/bday.jpg")',
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <div className="w-[70%] flex justify-center text-center">
            <h1 className="text-white text-5xl font-bold">
              Crie memórias com PartyLink. Baixe agora.
            </h1>
          </div>

          <p className="pt-8 text-white text-xl">
            Disponível para Android e iOS.
          </p>
          <button className="bg-[#FA4A0C] text-white px-10 py-3 rounded-md mt-10 hover:bg-[#cc3600] transition">
            Baixar
          </button>
        </div>
      </div>
    </section>
  );
}
