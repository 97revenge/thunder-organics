import { namespace } from "./namespace";

const RankBox = () => {
  return (
    <>
      <div className=" pr-1 flex-col justify-start items-start inline-flex">
        <div className="text-neutral-600 text-sm font-normal  leading-none">
          Classificar por
        </div>
      </div>
    </>
  );
};

const ElemHighlighted = () => {
  return (
    <>
      <div className=" w-auto h-auto p-2 bg-opacity-25   rounded-md ">
        <div className="grow shrink basis-0 h-8 pr-52 justify-start items-start gap-2.5 flex rounded-md">
          <namespace.Promotion />
          <namespace.Discount />
          <namespace.Fruits />
          <namespace.Vegetables />
        </div>
      </div>
    </>
  );
};

export const HighlightedCart = () => {
  return (
    <>
      <div className=" w-20 h-14 px-2  py-5 mt-4 bg-black bg-opacity-5  justify-start items-center flex ml-4 rounded-md">
        <RankBox />
        <ElemHighlighted />
      </div>
    </>
  );
};
