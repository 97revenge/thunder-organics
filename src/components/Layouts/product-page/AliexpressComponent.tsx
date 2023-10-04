type Component = React.JSX.Element;

export const AliexpressComponent = (): React.ReactNode => {
  const Title = (): Component => {
    return (
      <>
        <div className="text-3xl  font-bold leading-[56px] text-[#191919] px-4">
          Itens similares
        </div>
      </>
    );
  };

  const Elem = (): Component => {
    return (
      <>
        <div
          id="Link1"
          className=" w-44   overflow-hidden bg-white flex flex-col items-start pb-2 gap-px  rounded-lg p-2 "
        >
          <div
            id="DivpLx"
            className="overflow-hidden bg-[#f7f7f9] flex flex-col mb-1 pb-0 w-40 items-start"
          >
            <img
              src="https://file.rendit.io/n/raNMwRc486FYEY0zVROT.png"
              className=""
            />
          </div>
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
          <div className="text-xs  text-[#191919] ml-2">900+ vendido(s)</div>
          <div className="relative flex flex-col pb-px w-40 items-end mb-1 ml-2">
            <div className="text-xs  text-[#222222] absolute top-px left-0 h-4 w-[143px]">
              KIT Garrafa Colorida Com
            </div>
            <div className="text-xs  text-[#222222] relative">…</div>
          </div>
          <div className="text-xs  text-[#009966] ml-2">Frete grátis</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="bg-white py-5  w-full flex flex-col items-center h-full">
        <Title />
        <div className="bg-gray-100 grid grid-flow-row grid-cols-1  md:grid-rows-2 lg:grid-cols-3 sm:grid-cols-3      p-5 rounded-lg  gap-10 h-auto  w-auto items-center ">
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
