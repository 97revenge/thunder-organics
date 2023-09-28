import { Box, Heading } from "grommet";
import { useState, useRef, useEffect } from "react";
import { bag } from "../../Carts";

export const MaterialBag = () => {
  const [state, setState] = useState({
    visible: false,
  });

  const reducer = (method: string) => {
    switch (method) {
      case "visible":
        setState({
          ...state,
          visible: false,
        });
        break;
      case "not visible":
        setState({
          ...state,
          visible: true,
        });
        break;
    }
  };

  const productRef = useRef<React.ReactNode | any>(null);

  useEffect(() => {
    productRef.current = bag.length;
    console.log(productRef.current);
  }, []);

  return (
    <>
      <Box
        animation={state.visible === false ? "slideRight" : "fadeOut"}
        className="absolute left-3 w-screen max-w-sm   sm:px-6 lg:px-8 hidden lg:block  "
      >
        <div
          className="absolute left-3 w-screen max-w-sm border border-gray-600 bg-green-100/10 px-4 py-8 sm:px-6 lg:px-8 hidden lg:block rounded-lg  "
          aria-modal="true"
          role="dialog"
        >
          <i
            className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
            onClick={() => {
              return reducer("not visible");
            }}
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
          </i>

          <div className="mt-4 space-y-6 flex-1 w-full h-full items-center justify-center">
            <Heading textAlign="center">Seus Produtos</Heading>
            <ul className="space-y-4">
              {/* {bag.map((item: any) => {
                productRef.current = (
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
                );
                return (
                  <>
                    <Box animation={"slideLeft"}>{productRef.current}</Box>
                  </>
                );
              })} */}

              <div ref={productRef.current}></div>
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
