import { SliderSection as Slider } from "../slider-section/SliderSection";
import MaterialFeed from "../../Feed";
import { Feature } from "./Feature";
import { Box, Heading } from "grommet";
import { useState } from "react";
import { bag } from "../../Carts";

// import { Bag } from "../../Carts";

// const context = useContext(Bag);

type ProductProps = {
  imageProduct: string;
  nameProduct: any;
  descriptionProduct: any;
  amountProduct: any;
  discountProduct: any;
  valueProduct: any;
};
const Product = ({
  imageProduct,
  nameProduct,
  descriptionProduct,
  amountProduct,
  discountProduct,
  valueProduct,
}: ProductProps) => {
  return (
    <>
      <li className="flex items-center gap-4 overflow-auto">
        <img
          src={imageProduct}
          alt=""
          className="h-16 w-16 rounded object-cover scroll-m-3"
        />
        <div>
          <h3 className="text-sm text-gray-900">{nameProduct}</h3>
          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">{descriptionProduct}</dt>
              <dd className="flex-1">{amountProduct}</dd>
            </div>
            <div>
              <dt className="inline"> {discountProduct} </dt>
              <dd className="inline">
                <strong>$ {valueProduct}.99</strong>
              </dd>
            </div>
          </dl>
        </div>
      </li>
    </>
  );
};

const MaterialBag = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Box
        animation={visible === false ? "slideRight" : "fadeOut"}
        className="absolute left-3 w-screen max-w-sm   sm:px-6 lg:px-8 hidden lg:block  "
      >
        <div
          className="absolute left-3 w-screen max-w-sm border border-gray-600 bg-green-100/10 px-4 py-8 sm:px-6 lg:px-8 hidden lg:block rounded-lg  "
          aria-modal="true"
          role="dialog"
          // tabIndex="-1"
        >
          <button
            className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
            onClick={() => setVisible(true)}
          >
            <span className="sr-only">Close cart</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mt-4 space-y-6 flex-1 w-full h-full items-center justify-center">
            <Heading textAlign="center">Seus Produtos</Heading>
            <ul className="space-y-4">
              {bag.map((item: any) => (
                <Box animation={"slideLeft"}>
                  <Product
                    imageProduct={item.image}
                    nameProduct={item.name}
                    descriptionProduct={item.description}
                    valueProduct={item.value}
                    discountProduct={item.discount}
                    amountProduct={() => {
                      console.log("ok");
                    }}
                  />
                </Box>
              ))}
              {/* <Bag.Provider value={context}>
                {context.map((item: any) => (
                  <Product
                    nameProduct={item.name}
                    descriptionProduct={item.description}
                    valueProduct={item.value}
                    discountProduct={item.discount}
                    amountProduct={() => {}}
                  />
                ))}

              </Bag.Provider> */}
            </ul>

            <div className="space-y-4 text-center bg-red-200">
              <a
                href="#"
                className="block rounded bg-gray-200 px-5 py-3 text-sm text-black-100 transition hover:bg-green-600 "
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export type Props = { slider: React.ReactNode; feed: React.ReactNode };
export default function FeatureSection({
  children = <Feature slider={<Slider />} feed={<MaterialFeed />} />,
}) {
  return (
    <>
      <section>
        <div className="max-w-screen-md px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 ">
          <MaterialBag />
          {children}
        </div>
      </section>
    </>
  );
}
