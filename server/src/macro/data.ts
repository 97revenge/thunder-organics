import { Product } from "../types/types";

function generate(value: number) {
  return value - value + Math.floor(Math.random() * 5);
}
const result = generate(3);

export const data = [
  {
    image:
      "https://18666.cdn.simplo7.net/static/18666/sku/suco-de-uva-organico-suco-de-uva-aurora-integral-organico-1l-c-6--p-1628861236418.jpg",
    name: "Suco de Uva Orgânico da Pracinha C/6 garrafas",
    description: "Delicioso suco orgânico, bom para o café da manhã",
    value: 18,
    discount: `${result}`,
  },
  {
    image:
      "https://ibassets.com.br/ib.item.image.big/b-19990a1574594465aba8ad30f8d4080a.png",
    name: "Maçãs Orgânicas",

    description: "Maçãs frescas e orgânicas colhidas na fazenda",
    value: 10,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://freshorganicos.com.br/wp-content/uploads/2021/11/Tomate-Italiano.png",
    name: "Tomates Orgânicos",
    description: "Tomates vermelhos e suculentos cultivados sem pesticidas",
    value: 15,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "data:image/jpeg;base64,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",
    name: "Abóbora Orgânica",
    description: "Abóbora de tamanho médio, perfeita para fazer sopa orgânica",
    value: 12,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "data:image/jpeg;base64,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",
    name: "Pão Integral Orgânico",
    description: "Pão saudável e nutritivo, assado com ingredientes orgânicos",
    value: 5,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://freshorganicos.com.br/wp-content/uploads/2021/11/Leite-de-Amendoas-Vida-Veg.jpg",
    name: "Leite de Amêndoa Orgânico",
    description:
      "Leite de amêndoa rico em nutrientes, ideal para dietas veganas",
    value: 7,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://www.florestaorganica.com.br/images/Fotos/cenoura-organica-33-1379-717.webp",
    name: "Cenouras Orgânicas",
    description:
      "Cenouras frescas e suculentas, cultivadas sem produtos químicos",
    value: 8,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://images.tcdn.com.br/img/img_prod/761170/mel_organico_angico_apis_flora_240g_609_1_20200710145838.jpg",
    name: "Mel Orgânico Puro",
    description: "Mel de abelhas criadas organicamente, adoçante natural",
    value: 14,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://www.cerealistaexpress.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/q/u/queijo-de-cabra-re-priamo-amalattea-cerealista-express2.jpg",
    name: "Queijo de Cabra Orgânico",
    description: "Queijo de cabra artesanal, produzido em uma fazenda orgânica",
    value: 9,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81zr3-7MAAL._AC_UF1000,1000_QL80_.jpg",
    name: "Café Orgânico Premium",
    description: "Café de alta qualidade, cultivado em solos orgânicos",
    value: 20,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://mercadoorganico.com/6428-large_default/batata-inglesa-organica-500g-osm.jpg",
    name: "Batatas Orgânicas",
    description: "Batatas frescas e orgânicas, perfeitas para fritar ou assar",
    value: 6,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://images.tcdn.com.br/img/img_prod/909151/cha_de_camomila_organico_10_saches_kampo_de_ervas_375_1_872c83b4a135d2e2347d496419553fb2.jpg",
    name: "Chá de Camomila Orgânico",
    description: "Chá de camomila calmante, livre de pesticidas",
    value: 4,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "data:image/jpeg;base64,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",

    name: "Macarrão Integral Orgânico",
    description: "Macarrão de trigo integral, perfeito para pratos saudáveis",
    value: 5,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "data:image/jpeg;base64,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4OjUOuD2PL0K0nlrnZGRLoEWieXl/ddTtzAGm8EMEOE2vIPL+yybH3XFWoK1UkMY9rjlDYlscJcTziDAKxtx2rbzCYpM+mHZOy2sYcS9uZ7yBh6bojLENcZ0Lony812WE3Wa8B+JeXuIgNpnI1o6Ni8eWvOVH4hni1qfhYinlDgXsaW53AagEGwjkB5ld3h8MSJd7K/T8HdM2vC0xji9p7h4dzIoF1Jw7lzT2MyR5hcViNxcUCR+XLr/ABNew+oJcCruOFasBwzp7dV026as+Y8fpXIVmfw6q5JFSmHwJbxEHrxRY+i8d+Gr7frM04uF1j2vf6KzauFM2uF6zBHmfZP9ahisqX4XvdpiBmm5yGA33ueysbdzYlPB0BRplxElxLjcuOpjQaCwUlTphogL6WtOKtfMAiItAREQEREBERAREQEREBERAREQEREBERB4WpC9RBzW8mz6LAKxsQbDkSecdoJ9FyG1cYWUmU446hkNcAcrQLzprInv0VkbULfDOYA9JAP3VTbTxHiYl1SbBpDfIG/2Xk9fM98V34TvhI4AU6D6damGkcRLRpIMPAPyvFuxlWRsvaVOuzPTJjmHCCPMLgsLs2phDSxBYDSrAGrTHE1rzqWz1Fx7dF1DNlsnxcK7I43jkQbxGkX0+y16bu49iPP18/uEOhRfFLNlGaM0XyzE84lfa9EEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGjtLCuqQPltm8pv9LeqqvatNrcYWtHCC63YkSPurermGlV5vHszJis3VoPvIP1C8/reOIpNo96O0wOFZUwjWOHC5gt0kSI6RaPJaO7ZA8TDunNRMCTctOh/nULe3brF+Fpk8hl/wApLf2Xp2afzfjtIALMrheSeX7ey3iPFL1+v6Ei0QF6iLpBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBjqsmFo7Z2aKrfiLXAFoLe8f0UkvCFW1YtGSNLY2D8KiGTmgm5tqZW8vAF6prWKxkAiIpBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z",
    name: "Espinafre Orgânico",
    description: "Espinafre fresco e saudável, colhido organicamente",
    value: 8,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://images.tcdn.com.br/img/img_prod/1076953/vinho_tinto_vegano_organico_finca_lalande_merlot_2020_431_1_f19ce64207ef2f13c0ce5574faa062f2.png",
    name: "Vinho Tinto Orgânico Reserva",
    description: "Vinho tinto envelhecido organicamente, sabor sofisticado",
    value: 25,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://33443.cdn.simplo7.net/static/33443/sku/acucares.html-mel-organico-composto-korin-bisnaga-1663861334403.png",
    name: "Mel de Manjericão Orgânico",
    description: "Mel doce com notas de manjericão, colhido organicamente",
    value: 12,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "data:image/jpeg;base64,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m6gDTu6zpy16K30uTL20r14/LPtt740aZLGvBeA46GRHK11aezbAVHGri6pcTU7jM36WnvEDhLhH9K1xulu1W2hUdkJZTOXtKxAcWtBuxp0NQgT5gnrvrAYNlGmylTEMY0NaNbDmeJ6rr9N6aYXq91Ms9vdERdqgiIgIiICIiAiIgIiICIiAiIgIiICwTfzcUYma+HDW4iLtsBU+gdw5G2kSs7RRZL5RZt8w4ljmONOrTLHt1a6WuBk6ixCjix4dTAkAdV9Jbd3dwuMblxFFr+Tvde3+V4uPVay2/wCyWuwl2DrNqt/663dfHLOBld5hqwy4r7KXFrpzmS6xg8ATr5aLtUMgag8gYHiSpW0N19oUDFTBYgDmxhqN/up5gPMqmfiMhyu7pnR0gz4FZ3BXSW3MfeOU6NgyDfiuuWRlzcZJAkxyHBoUM48D849eKk4MVapinSq1Ta1Jr3nyygwnTUvScjCKbQ24Bc4mwm9uMrmpVD3tjM0Ra0SOsi2iv9k7g7UxMD/TmjTN81cinH9Hvz4t81m+yfY3SicXiqlV06UQKbY4tJdmcR4ZVecdq0jVYrhz2MaO+Q0F0OLuMRqSb6LPtx/Zg+qxtXE56DDminlArPE2c+fc6AieYFltPYe7uFwbYw9FtOdXXc8+LnEuPqrVa48cnlbSNs7AUqFJtKiwU6bBDWt0A+p68VJRFokREQEREBERAREQEREBERAREQEREBERAREQEREBedWi1whzWuH8QB+a9EQRm7Poi4o0wejG/ZSGiNLLlEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z",
    name: "Abacate Orgânico",
    description: "Abacates frescos e cremosos, ideais para guacamole",
    value: 7,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
  {
    image:
      "https://fnac.com.br/wp-content/uploads/2020/08/176767_6-560x560.jpg",
    name: "Barras de Granola Orgânicas",
    description: "Barras de granola nutritivas, perfeitas para lanches",
    value: 5,
    discount: function (value: number) {
      return value - value + Math.floor(Math.random() * 5);
    },
  },
] satisfies Partial<Product[]>;
