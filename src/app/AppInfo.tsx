import React from "react";
import Image from "next/image";

export default function AppInfo() {
  return (
    <div>
      <section id="sobre" className="w-full h-[700px]">
        <div className="flex flex-col justify-center items-center w-full mt-10">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              alt="Página de cadastro do aplicativo"
              src="/images/start-mockup.png"
              width={250}
              height={584}
            />
            <Image
              alt="Página inicial do aplicativo"
              src="/images/home-mockup.png"
              width={250}
              height={584}
            />
          </div>
          <div className="flex justify-center h-[3px] w-[60%] bg-[#E4E4E4]"></div>
          <h2 className="mt-10 text-black text-5xl font-semibold">
            Como o aplicativo funciona?
          </h2>
        </div>
      </section>
      <section className="w-full mt-20">
        <div className="flex justify-center items-center">
          <div className="w-full flex justify-center">
            <Image
              alt="Página de Login"
              src="/images/login-mockup.png"
              width={261}
              height={525}
            />
          </div>
          <div className="w-full">
            <div className="w-[80%]">
              <p className="text-[#FA4A0C] font-bold text-2xl">
                Crie uma conta
              </p>
              <p className="text-[#252B42] font-bold text-[40px] mt-3 mb-8">
                {" "}
                Crie uma conta ou entre em uma já existente
              </p>
              <p className="text-2xl font-medium text-[#737373]">
                Uma conta será criada com o seu email e a senha escolhida!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-40">
          <div className="flex justify-end w-full">
            <div className="flex flex-col justify-center w-[80%]">
              <p className="text-[#FA4A0C] font-bold text-2xl">
                Explore a variedade
              </p>
              <p className="text-[#252B42] font-bold text-[40px] mt-3 mb-8">
                {" "}
                Encontre produtos e serviços
              </p>
              <p className="text-2xl font-medium text-[#737373]">
                Você pode buscar por produtos específicos ou por categorias de
                produtos que deseja incluir em sua festa!
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Image
              alt="Página de busca de produtos"
              src="/images/produtos-mockup.png"
              width={261}
              height={525}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-20">
          <div className="w-full flex justify-center">
            <Image
              alt="Página de Revisão de Itens e Pagamento"
              src="/images/payment-mockup.png"
              width={261}
              height={525}
            />
          </div>
          <div className="w-full">
            <div className="w-[80%]">
              <p className="text-[#FA4A0C] font-bold text-2xl">Checkout</p>
              <p className="text-[#252B42] font-bold text-[40px] mt-3 mb-8">
                {" "}
                Revise os itens e efetue o pagamento
              </p>
              <p className="text-2xl font-medium text-[#737373]">
                Com o PartyLink, você pode revisar todos os seus pedidos e pagar
                de forma centralizada!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
