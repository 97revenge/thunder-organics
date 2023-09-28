import { Carousel, Box } from "grommet";

type Props = { children: React.ReactNode; tag: string };

const Content = ({ tag }: Partial<Props>) => {
  return (
    <>
      <p className=" flex-row font-bold line-clamp-4  sm:text-lg lg:text-sm   ">
        {tag}
      </p>
    </>
  );
};

const GroometBox = ({ children, tag }: Partial<Props>) => {
  return (
    <>
      <a href="/">
        <Box
          pad={{ bottom: "35px", top: "35px" }}
          margin={{ bottom: "5px" }}
          round={"5px"}
          className={tag}
          align="center"
        >
          {children}
        </Box>
      </a>
    </>
  );
};

const ProductsCarousel = ({}) => {
  return (
    <>
      <Carousel controls={false} play={3000}>
        <GroometBox tag="bg-gradient-to-r from-green-500/40 to-green-200/40">
          <Content tag="FLV na Promo 🥬🥦🥒 " />
        </GroometBox>
        <GroometBox tag="bg-gradient-to-r from-green-500/40 to-green-200/40">
          <Content tag=" Embalados 🌯🥫🥪🥗 " />
        </GroometBox>
        <GroometBox tag="bg-gradient-to-r from-green-500/40 to-green-200/40">
          <Content tag=" Frutas Docinhas 🍒🍓🍍🥑 " />
        </GroometBox>
      </Carousel>
    </>
  );
};

const OffersCarousel = ({}) => {
  return (
    <>
      <Carousel controls={false} play={3500}>
        <GroometBox tag="bg-gradient-to-r from-yellow-500/40 to-yellow-200/40">
          <Content tag="Olha a oferta 😍👀 " />
        </GroometBox>
        <GroometBox tag="bg-gradient-to-r from-yellow-500/40 to-yellow-200/40">
          <Content tag="Já vai acabar 💨 " />
        </GroometBox>
        <GroometBox tag="bg-gradient-to-r from-yellow-500/40 to-yellow-200/40">
          <Content tag="Coisas Novas  😍👨‍👩‍👧‍👧🆕 " />
        </GroometBox>
      </Carousel>
    </>
  );
};
const DayOffCarousel = ({}) => {
  return (
    <>
      <Carousel controls={false} play={4500}>
        <GroometBox tag="bg-gradient-to-r from-green-500/40 to-green-200/40">
          <Content tag="Promocoes de FLV !!! " />
        </GroometBox>
        <GroometBox tag="bg-gradient-to-r from-green-500/40 to-green-200/40">
          <Content tag="Embalados no preco ! " />
        </GroometBox>
        <GroometBox tag="bg-gradient-to-r from-green-500/40 to-green-200/40">
          <Content tag="Promocoes de Frutas !!! " />
        </GroometBox>
      </Carousel>
    </>
  );
};

export const SliderSection = () => {
  return (
    <>
      <Box animation={"fadeIn"}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-5">
          <div className="h-full rounded-lg bg-gray-300/50">
            <ProductsCarousel />
          </div>{" "}
          <div className="h-32 rounded-lg bg-gray-300/50">
            <OffersCarousel />
          </div>{" "}
          <div className="h-32 rounded-lg bg-gray-300/50">
            <DayOffCarousel />
          </div>
        </div>
      </Box>
    </>
  );
};
