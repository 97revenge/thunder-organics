import React from "react";
import { Props } from "./Props";

import { Box } from "grommet";

export const bag: any[] = [];

export const MaterialCart = ({
  image,
  name,
  description,
  value,
  discount,
}: Partial<Props>) => {
  const generateProduct = () => {
    const result = {
      image,
      name,
      description,
      value,
      discount,
    };
    bag.push(result);
    console.log(bag);
  };

  return (
    <>
      <Box>
        <Box
          animation={{ duration: 3000, type: "zoomOut" }}
          className="  items-center  bg-green-300/50 rounded-lg p-3 shadow-md  h-full w-full"
        >
          <div className="flex-1 items-center justify-center  h-full transform overflow-hidden bg-white  dark:bg-green-800   rounded-lg p-2   shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-gray-100 rounded-md p-1 ">
              <img
                className="object-contain object-center  shadow-sm  h-32 w-44 rounded-md "
                src={image}
                alt="Imagem do Produto"
              />
            </div>
            <div className="bg-green-200/90 rounded-md mb-2 h-24  pb-5 shadow-lg   ">
              <h2 className=" text-sm font-medium dark:text-white  w-full  h-5  rounded-md line-clamp-2 lg:line-clamp-1  bg-gray-100 mt-1 ">
                {name}
              </h2>

              <p className=" text-sm dark:text-gray-300 text-gray-700 line-clamp-3 mb-1 p-1 text-start font-normal hover:underline ">
                {description}
              </p>
            </div>
            <Box animation={{ delay: 3000, type: "fadeIn" }}>
              <div className=" grid grid-cols-2   ">
                <p className="pr-2 text-lg  font-semibold text-gray-900 dark:text-white bg-green-200/40 rounded-md w-16 h-7 hover:bg-gray-500">
                  ${value}.99
                </p>
                <div className="  mr-12">
                  <p className="text-clip   font-medium text-red-500 line-through dark:text-gray-300 hidden sm:block text blur-sm hover:blur-0">
                    ${discount}.00
                  </p>
                </div>
              </div>
            </Box>
          </div>
          <Box>
            <button
              type="button"
              className="flex-1 px-3 py-2 mt-2  md:ml-5 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300/20 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 lg:mr-5"
              onClick={generateProduct}
            >
              Adicionar ao Carrinho
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
