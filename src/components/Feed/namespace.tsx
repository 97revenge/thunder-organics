import { Props } from "./Props";

export const namespace = {
  Promotion: function ({ title = "Promocao" }: Props) {
    return (
      <>
        <button className="self-stretch pl-2.5 flex-col justify-start items-start inline-flex rounded-md ">
          <div className="h-8 px-3.5 bg-blue-500 rounded-sm shadow justify-center items-center inline-flex hover:scale-105 hover:shadow-lg">
            <div className="text-white text-sm font-normal  capitalize leading-loose">
              {title}
            </div>
          </div>
        </button>
      </>
    );
  },
  Fruits: function ({ title = "Promocao" }: Props) {
    return (
      <>
        <button className="self-stretch pl-2.5 flex-col justify-start items-start inline-flex rounded-md ">
          <div className="h-8 px-3.5  bg-gradient-to-r from-emerald-500  to-green-500 rounded-sm shadow justify-center items-center inline-flex hover:bg-green-200  hover:scale-105 hover:shadow-lg">
            <div className="text-white text-sm font-normal  capitalize leading-loose">
              {title}
            </div>
          </div>
        </button>
      </>
    );
  },

  Vegetables: function ({ title = "FLV" }: Props) {
    return (
      <>
        <button className="self-stretch pl-2.5 flex-col justify-start items-start  rounded-md hidden sm:block">
          <div className="h-8 px-3.5  bg-gradient-to-r from-lime-700  to-green-700 rounded-sm shadow justify-center items-center inline-flex hover:bg-green-200  hover:scale-105 hover:shadow-lg">
            <div className="text-white text-sm font-normal  capitalize leading-loose">
              {title}
            </div>
          </div>
        </button>
      </>
    );
  },

  Discount: function ({ title = "Desconto" }: Props) {
    return (
      <>
        <button className="self-stretch pl-2.5 flex-col justify-start items-start inline-flex rounded-md ">
          <div className="h-8 px-3.5 bg-red-500 rounded-sm shadow justify-center items-center inline-flex hover:scale-105 hover:shadow-lg">
            <div className="text-white text-sm font-normal  capitalize leading-loose">
              {title}
            </div>
          </div>
        </button>
      </>
    );
  },
};
