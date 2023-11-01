// to-do list de coisas a fazer aqui ...
//  - componentizacao BEM OK
// - definicao de props (no prop drilling)

import { ReactNode } from "react";

const Elem = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col bg-white p-2 bg-opacity-20 rounded-lg">
        {children}
      </div>
    </>
  );
};

const Item = () => {
  const ProductTag = ({ tag }: { tag: string }) => {
    return (
      <>
        <a
          href="#"
          className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2 gap-2"
        >
          <img
            src="https://api.iconify.design/iconoir:organic-food.svg"
            alt="ancora para itens relacionados apenas de verduras"
          />
          {tag}
        </a>
      </>
    );
  };
  return (
    <>
      <a href="#">
        <div className=" w-44   overflow-hidden bg-white flex flex-col items-center pb-2   rounded-lg p-2 justify-center shadow-md duration-300 hover:scale-105 hover:shadow-lg ">
          <img
            src="https://source.unsplash.com/random"
            className="object-fill rounded-lg shadow-sm overflow-hidden bg-[#f7f7f9] flex flex-col mb-1 pb-0 w-40 items-start"
          />

          <div className="flex flex-row   items-center justify-center mb-1 ml-2  w-full ">
            <div className="relative flex flex-col w-11 shrink-0 items-end pt-2 pb-1 ">
              <div className="text-xs  font-semibold text-[#fd384f] absolute top-2 left-0 h-4 w-4">
                R$
              </div>
              <div className="text-xl  font-semibold text-[#fd384f] absolute top-0 left-4 h-6 w-3">
                5
              </div>
              <div className="text-xs  font-semibold text-[#fd384f] ml-12">
                ,99
              </div>
            </div>
            <div className="text-xs  line-through text-[#999999] mt-2">
              R$65
            </div>
          </div>
          <ProductTag tag="Verduras" />
          <div className="flex flex-row gap-1 w-32 items-start mb-1 ml-2">
            <img
              src="https://file.rendit.io/n/hzcKS0zkkP8HxiGyPXu0.png"
              id="Xpng"
              className="w-20 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/7pd1wry4eFXbLyTmFvxk.png"
              id="Xpng1"
              className="w-12 shrink-0"
            />
          </div>
          <div className="bg-gray-200 bg-opacity-20  rounded-lg py-1 px-2 my-0.5 h-full w-full">
            <h1 className="text-xs font-bold ">Nome do Produto</h1>
          </div>

          <p className=" text-sm text-black bg-gray-200 rounded-md line-clamp-3 mb-1 p-1 text-start font-normal hover:underline ">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum
          </p>
          <div className="text-sm  w-full  text-[#009966]  flex  flex-row items-center justify-center px-2 py-0.5 rounded-md">
            <p>Frete grátis</p>
          </div>
        </div>
      </a>
      <button
        type="button"
        className="flex-1 px-3 py-2 mt-2  md:ml-5 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300/20 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 lg:mr-5"
      >
        Adicionar ao Carrinho
      </button>
    </>
  );
};

export const AliexpressCart = () => {
  return (
    <>
      <Elem>
        <Item />
      </Elem>
    </>
  );
};
