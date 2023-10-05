import { AliexpressCart } from "../../Carts/AliexpressCart";

type Component = React.JSX.Element;

export const AliexpressComponent = (): React.ReactNode => {
  const Title = (): Component => {
    return (
      <>
        <div className="text-3xl  font-bold leading-[56px] text-[#191919]  bg-white px-2 py-1 mb-2 rounded-md bg-opacity-25">
          Itens semelhantes
        </div>
      </>
    );
  };

  const Elem = (): Component => {
    return (
      <>
        <div className="flex flex-col bg-white p-2 bg-opacity-20 rounded-lg">
          <a href="#">
            {" "}
            <div className=" w-44   overflow-hidden bg-white flex flex-col items-center pb-2   rounded-lg p-2 justify-center shadow-md duration-300 hover:scale-105 hover:shadow-lg ">
              <img
                src="https://source.unsplash.com/random"
                className="object-fill rounded-lg shadow-sm overflow-hidden bg-[#f7f7f9] flex flex-col mb-1 pb-0 w-40 items-start"
              />

              <div className="flex flex-row gap-2 w-20 items-start mb-1 ml-2">
                <div className="relative flex flex-col w-10 shrink-0 items-end pt-2 pb-1">
                  <div className="text-xs  font-semibold text-[#fd384f] absolute top-2 left-0 h-4 w-4">
                    R$
                  </div>
                  <div className="text-xl  font-semibold text-[#fd384f] absolute top-0 left-4 h-6 w-3">
                    5
                  </div>
                  <div className="text-xs  font-semibold text-[#fd384f] relative">
                    ,1
                  </div>
                </div>
                <div className="text-xs  line-through text-[#999999] mt-2">
                  R$65
                </div>
              </div>
              <a
                href="#"
                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2 gap-2"
              >
                <img
                  src="https://api.iconify.design/iconoir:organic-food.svg"
                  alt=""
                />
                Verduras
              </a>
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
              <div className="text-xs  text-[#191919] ml-2">
                900+ vendido(s)
              </div>
              <p className=" text-sm text-black bg-gray-200 rounded-md line-clamp-3 mb-1 p-1 text-start font-normal hover:underline ">
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum
              </p>
              <div className="text-xs  text-[#009966] ml-2">Frete grátis</div>
            </div>
          </a>
          <button
            type="button"
            className="flex-1 px-3 py-2 mt-2  md:ml-5 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300/20 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 lg:mr-5"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="bg-green-200 bg-opacity-5 rounded-lg px-5 py-5   flex flex-col items-start h-full w-full ">
        <Title />
        <div className="bg-gray-900/10 grid grid-cols-2   md:grid-cols-4 lg:grid-cols-5  sm:grid-cols-1  sm:grid-flow-row      p-5 rounded-lg  gap-10  max-w-full items-center ">
          <AliexpressCart />
          <Elem />
          <Elem />
          <Elem />
          <Elem />
          <Elem />
          <Elem />
          <Elem />
          <Elem />
          <Elem />
        </div>
      </div>
    </>
  );
};
