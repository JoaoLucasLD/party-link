import Image from "next/image";

export default function Reviews() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="mt-10 mb-16 text-black text-5xl font-semibold">
        O que nossos clientes dizem
      </h2>
      <div className="flex w-full justify-center items-center">
        <div className="flex w-full justify-evenly items-center mb-12">
          <div className="w-[388px] h-[509px] bg-[#E9511C] rounded-[18px]">
            <div className="flex flex-col justify-center items-center mt-5 gap-3">
              <Image
                alt="Foto do cliente 1"
                src="/images/pessoa1.png"
                width={122}
                height={40}
              />
              <p className="font-medium text-2xl">João Pereira</p>
            </div>
            <div className="flex justify-center items-center w-full my-3">
              <div className="w-[70%]">
                <p className="text-xl text-center">
                  Este aplicativo revolucionou a maneira como planejo festas. Eu
                  costumava gastar horas pesquisando, comparando preços e
                  contatando fornecedores. Agora, tudo o que preciso está em um
                  só lugar. É simplesmente incrível!
                </p>
              </div>
            </div>
          </div>
          <div className="w-[388px] h-[509px] bg-[#E9511C] rounded-[18px]">
            <div className="flex flex-col justify-center items-center mt-5 gap-3">
              <Image
                alt="Foto do cliente 2"
                src="/images/pessoa2.png"
                width={122}
                height={40}
              />
              <p className="font-medium text-2xl">Laura Santos</p>
            </div>
            <div className="flex justify-center items-center w-full my-3">
              <div className="w-[70%]">
                <p className="text-xl text-center">
                  Eu amo como este aplicativo me dá controle total sobre o meu
                  evento. Eu posso escolher produtos e serviços, agendar tudo e
                  ter contato direto com os fornecedores. É um alívio saber que
                  tudo será perfeito no dia da festa.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[388px] h-[509px] bg-[#E9511C] rounded-[18px]">
            <div className="flex flex-col justify-center items-center mt-5 gap-3">
              <Image
                alt="Foto do cliente 3"
                src="/images/pessoa3.png"
                width={122}
                height={40}
              />
              <p className="font-medium text-2xl">Pedro Oliveira</p>
            </div>
            <div className="flex justify-center items-center w-full my-3">
              <div className="w-[70%]">
                <p className="text-xl text-center">
                  Nunca fui muito bom em organizar festas, mas este aplicativo
                  facilitou tudo. A variedade de opções e a conveniência de
                  fazer compras em um só lugar me surpreenderam. Minha última
                  festa foi um sucesso, e devo muito disso ao aplicativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
