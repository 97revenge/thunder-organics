import { Box } from "grommet";

import { ProductPath } from "./ProductPath";
import { ProductContent } from "./ProductContent";
import { MaterialNav } from "../nav";
import { AliexpressComponent } from "./AliexpressComponent";

export default function MaterialProductPage() {
  return (
    <>
      <MaterialNav />
      <Box
        className=" flex items-center  sm:py-16     bg-green-200 object-center"
        animation={"slideLeft"}
      >
        <div className="container  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-white to-green-200/90 w-full h-auto rounded-xl p-12">
          <ProductPath />
          <ProductContent />
        </div>

        <div className=" m-12  grid gird grid-flow-row lg:grid-cols-2 lg:h-full   gap-12 max-w-full  h-full pt-40 ">
          <div className="bg-gradient-to-r from-blue-400/100 to-emerald-400 rounded-lg p-5">
            <AliexpressComponent />
          </div>
          <div className="bg-gradient-to-r from-yellow-400/100 to-emerald-400 rounded-lg p-5 ">
            <AliexpressComponent />
          </div>
        </div>
      </Box>
    </>
  );
}
