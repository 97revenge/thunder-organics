import { Box } from "grommet";

import MaterialFeed from "../../Feed";
import { ProductPath } from "./ProductPath";
import { ProductContent } from "./ProductContent";
import { MaterialNav } from "../nav";

export default function MaterialProductPage() {
  return (
    <>
      <MaterialNav />
      <Box
        className=" absolute py-12 sm:py-16   rounded-lg lg:m-20 bg-green-200"
        animation={"slideLeft"}
      >
        <div className="container mx-auto px-6 py-2  bg-gray-200   ">
          <ProductPath />
          <ProductContent />
        </div>
        <div className=" m-12  grid max-lg:grid-cols-1 grid-flow-row lg:grid-cols-2   gap-12 max-w-full  h-full pt-40">
          <div className="bg-gradient-to-r from-blue-400/100 to-emerald-400 rounded-lg p-5">
            <h1 className="mt-8 text-5xl font-bold bg-gray-200 max-w-md rounded-lg px-5">
              Produtos Semelhantes
            </h1>
            <MaterialFeed />
          </div>{" "}
          <div className="bg-gradient-to-r from-rose-500 via-red-400 to-red-500 rounded-lg p-5 ">
            <h1 className="mt-8 text-5xl font-bold bg-gray-200 max-w-md rounded-lg px-5">
              Coisa Nova na Area
            </h1>
            <MaterialFeed />
          </div>
        </div>
      </Box>
    </>
  );
}
