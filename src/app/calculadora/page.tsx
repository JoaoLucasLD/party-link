"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { Checkbox, Input } from "@nextui-org/react";
import { useState } from "react";
export default function Calculator() {
  const [foodCheckboxes, setFoodCheckboxes] = useState({
    Salgadinho: false,
    Bolo: false,
    Doce: false,
    Sorvete: false,
  });
  const [drinksCheckboxes, setDrinksCheckboxes] = useState({
    Cerveja: false,
    Refrigerante: false,
    Suco: false,
    Água: false,
  });

  const handleFoodCheckboxChange = (
    checkboxName: keyof typeof foodCheckboxes
  ) => {
    setFoodCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };
  const handleDrinksCheckboxChange = (
    checkboxName: keyof typeof drinksCheckboxes
  ) => {
    setDrinksCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  return (
    <>
      <Header />
      <section className="flex flex-col items-center  w-screen max-w-full h-screen bg-white">
        <h2 className="mt-20 mb-16 text-black text-5xl font-semibold">
          Calcule sua festa!
        </h2>
        <div className="flex flex-col w-full justify-center items-center">
          <p className="text-black font-semibold text-4xl">
            Escolha as comidas:
          </p>
          <div className="flex w-[50%] justify-evenly gap-9 mt-9">
            {Object.keys(foodCheckboxes).map((checkboxName: any) => (
              <Checkbox
                key={checkboxName}
                color="primary"
                isSelected={foodCheckboxes[checkboxName]}
                onValueChange={() => handleFoodCheckboxChange(checkboxName)}
              >
                <span className="text-black text-2xl">{checkboxName}</span>
              </Checkbox>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center mt-16">
          <p className="text-black font-semibold text-4xl">
            Escolha as bebidas:
          </p>
          <div className="flex w-[50%] justify-evenly gap-9 mt-9">
            {Object.keys(drinksCheckboxes).map((checkboxName: any) => (
              <Checkbox
                key={checkboxName}
                color="primary"
                isSelected={drinksCheckboxes[checkboxName]}
                onValueChange={() => handleDrinksCheckboxChange(checkboxName)}
              >
                <span className="text-black text-2xl">{checkboxName}</span>
              </Checkbox>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full pl-[100px] items-start gap-8 mt-24">
          <div className="flex w-full">
            <p className="text-black font-semibold text-4xl">
              Quantidade de pessoas:
            </p>
            <div className=" ml-10 w-[300px]">
              <Input
                type="number"
                placeholder="0"
                classNames={{ input: ["text-black font-semibold text-4xl"] }}
              />
            </div>
          </div>

          <div className="flex w-full">
            <p className="text-black font-semibold text-4xl">
              Duração da festa em horas:
            </p>
            <div className=" ml-10 w-[240px]">
              <Input
                type="number"
                placeholder="0"
                classNames={{ input: ["text-black font-semibold text-4xl"] }}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <button className="bg-[#FA4A0C] text-white px-10 py-3 rounded-md mt-10 hover:bg-[#cc3600] transition">
              Calcular
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
