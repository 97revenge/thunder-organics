import { Box } from "grommet";

import { ProductPath } from "./ProductPath";
import { ProductContent } from "./ProductContent";
import { MaterialNav } from "../nav";
import { AliexpressComponent } from "./AliexpressComponent";
import { MaterialFooter } from "../footer";

export default function MaterialProductPage() {
  return (
    <>
      <MaterialNav />
      <Box
        className="flex items-center   sm:py-16     bg-green-200 object-center "
        animation={"slideLeft"}
      >
        <div className="container bg-red-200  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-white to-green-200/90 w-full h-auto rounded-xl p-5 lg:pl-5 gap-12">
          <ProductPath />
          <ProductContent />
        </div>

        <div className="flex flex-row justify-center  items-center bg-gradient-to-t from-green-400 to-green-200 w-full pb-12 ">
          <div className=" grid     lg:grid-cols-2 lg:grid-flow-row  lg:h-full  gap-12   h-full mt-12  bg-gray-200 bg-opacity-25 rounded-lg p-12   ">
            <div className="bg-gradient-to-r from-yellow-400/100 to-emerald-400 rounded-lg p-3 w-full ">
              <AliexpressComponent />
            </div>{" "}
            <div className="bg-gradient-to-r from-yellow-400/100 to-emerald-400 rounded-lg p-3 ">
              <AliexpressComponent />
            </div>{" "}
            <div className="bg-gradient-to-r from-yellow-400/100 to-emerald-400 rounded-lg p-3 ">
              <AliexpressComponent />
            </div>{" "}
            <div className="bg-gradient-to-r from-yellow-400/100 to-emerald-400 rounded-lg p-3 ">
              <AliexpressComponent />
            </div>
          </div>
        </div>
      </Box>
      {/* <MaterialFooter /> */}
    </>
  );
}
