// Carousel.tsx
"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/embla.css";
import Card from "./Card";

export const unstable_clientComponent = true;

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  // Array de props para os slides
  const cardProps = [
    {
      source: "/images/facilidade.svg",
      title: "Facilidade",
      desc: "O Party Link simplifica a criação de eventos, tornando a organização de festas mais acessível para todos.",
      alt: "Imagem de facilidade",
    },
    {
      source: "/images/variedade.svg",
      title: "Ampla Variedade",
      desc: "Pode ser usado para criar uma ampla gama de eventos, desde festas infantis a celebrações sofisticadas, atendendo a diversas necessidades.",
      alt: "Imagem de ampla variedade",
    },
    {
      source: "/images/preco.svg",
      title: "Comparação de Preços",
      desc: "Você pode comparar preços de produtos e serviços relacionados a festas, ajudando a manter o orçamento sob controle.",
      alt: "Imagem de comparação de preços",
    },
    {
      source: "/images/organizacao.svg",
      title: "Organização",
      desc: "Com o Party Link na palma da mão, a organização das festas se torna mais conveniente e portátil.",
      alt: "Imagem de organização",
    },
    {
      source: "/images/tempo.png",
      title: "Economia de Tempo",
      desc: "Com o Party Link você economiza tempo, pois nós fornecemos recursos e informações essenciais para a organização de festas em um único local.",
      alt: "Imagem de economia de tempo",
    },
    {
      source: "/images/comunicacao.png",
      title: "Comunicação rápida",
      desc: "Com o Party Link você consegue mandar mensagens diretamente para os fornecedores.",
      alt: "Imagem de comunicação rápida",
    },
    {
      source: "/images/pagamento.png",
      title: "Pagamento Rápido e Simplificado",
      desc: "Com o Party Link, você pode pagar por todos os produtos e serviços relacionados à sua festa de uma única vez.",
      alt: "Imagem de pagamento rápido e simplificado",
    },
  ];

  return (
    <div className="overflow-hidden w-[80%] h-full" ref={emblaRef}>
      <div className="flex">
        {cardProps.map((props, index) => (
          <div key={index} className="embla__slide">
            <Card
              source={props.source}
              title={props.title}
              alt={props.alt}
              desc={props.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
