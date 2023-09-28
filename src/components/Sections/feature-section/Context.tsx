import { createContext } from "react";

export const context = createContext<object | undefined>({});

const namespace = {
  feature: createContext<object | undefined>({
    Sustentabilidade:
      "Descubra nossa seleção exclusiva de produtos: da alta qualidade à variedade de cores e tamanhos, temos tudo o que você precisa para melhorar sua vida.",
    Frescor:
      "Economize agora! Compre nossos produtos em promoção por tempo limitado e desfrute de descontos incríveis que não podem ser perdidos.",
    Saúde:
      "Sua satisfação é nossa prioridade. Oferecemos uma política de devolução livre de complicações, garantindo sua tranquilidade em cada compra.",
    Natural:
      "Conheça nossa jornada! Desde nossa fundação, estamos comprometidos com a qualidade, sustentabilidade e satisfação do cliente.",
    Pureza:
      "Veja o que nossos clientes têm a dizer. Nossos produtos receberam avaliações de cinco estrelas e elogios entusiásticos. Satisfação garantida!",
    Certificação:
      "Você está a um clique de transformar sua vida. Navegue em nossa seleção, leia as avaliações e faça uma compra informada com confiança.",
  }),
};

export const { feature } = namespace;
