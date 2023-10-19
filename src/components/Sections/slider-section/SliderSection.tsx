import { Carousel, Box } from "grommet";

type Props = { children: React.ReactNode; tag: string };

const Content = ({ tag }: Partial<Props>) => {
  return (
    <>
      <div className=" px-10 ml-12 w-full flex items-center justify-center ">
        <p className="  w-full  h-full flex-row font-bold line-clamp-4  sm:text-lg lg:text-sm bg-white bg-opacity-70 rounded-md  text-green-800   items-center">
          {tag}
        </p>
      </div>
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
        <GroometBox tag="bg-cover bg-center  w-full h-full object-fill bg-[url(https://source.unsplash.com/random/720x600/?vegetables)] ">
          <Content tag="FLV na Promo 🥬 " />
        </GroometBox>
        <GroometBox tag="bg-cover bg-center  w-full h-full  bg-[url(https://source.unsplash.com/random/720x600/?fruits)]">
          <Content tag=" Embalados 🌯 " />
        </GroometBox>
        <GroometBox tag="bg-cover bg-center  w-full h-full  bg-[url(https://source.unsplash.com/random/720x600/?groceries)]">
          <Content tag=" O melhor do mercado 🌟 " />
        </GroometBox>
      </Carousel>
    </>
  );
};

const OffersCarousel = ({}) => {
  return (
    <>
      <Carousel controls={false} play={3500}>
        <GroometBox tag="bg-cover bg-center  w-full h-full  bg-[url(https://source.unsplash.com/random/720x600/?ecommerce)]">
          <Content tag="Olha a oferta 😍 " />
        </GroometBox>
        <GroometBox tag="bg-cover bg-center  w-full h-full  bg-[url(https://source.unsplash.com/random/720x600/?salad)]">
          <Content tag="Já vai acabar 💨 " />
        </GroometBox>
        <GroometBox tag="bg-cover bg-center  w-full h-full  bg-[url(https://source.unsplash.com/random/720x600/?family)]">
          <Content tag="Coisas Novas 😍 " />
        </GroometBox>
      </Carousel>
    </>
  );
};
const DayOffCarousel = ({}) => {
  return (
    <>
      <Carousel controls={false} play={4500}>
        <GroometBox tag="bg-cover bg-center  w-full h-full  bg-[url(https://source.unsplash.com/random/720x600/?organic)]">
          <Content tag="Promocoes de FLV !" />
        </GroometBox>
        <GroometBox tag="bg-cover bg-center  w-full h-full  bg-[url(https://source.unsplash.com/random/720x600/?vegetables)]">
          <Content tag="Embalados no preco !" />
        </GroometBox>
        <GroometBox tag="bg-cover bg-center  w-full h-full  bg-[url(https://source.unsplash.com/random/720x600/?green)]">
          <Content tag="Promocoes de Frutas ! " />
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
