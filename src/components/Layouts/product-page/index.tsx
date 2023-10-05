import { Box } from "grommet";

import { ProductPath } from "./ProductPath";
import { ProductContent } from "./ProductContent";
import { MaterialNav } from "../nav";
import MaterialRelated from "../../Shop/related";

export default function MaterialProductPage() {
  return (
    <>
      <MaterialNav />
      <Box
        className="flex items-center   sm:py-16     bg-green-200 object-center from-green-400 to-green-200 w-full pb-12 "
        animation={"slideLeft"}
      >
        <div className="container bg-red-200  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-white to-green-200/90 w-full h-auto rounded-xl p-5 lg:pl-5 gap-12">
          <ProductPath />
          <ProductContent />
        </div>

        <div className="flex flex-row justify-center  items-center bg-gradient-to-t  ">
          {/* <div className=" grid     lg:grid-cols-2 lg:grid-flow-row  lg:h-full  gap-12   h-full mt-12  bg-gray-200 bg-opacity-25 rounded-lg p-12   ">
            <div className="bg-gradient-to-r from-yellow-400/100 to-emerald-400 rounded-lg p-3 w-full ">
              <AliexpressComponent />
            </div>{" "}
          </div> */}
        </div>
        <div
          className=" flex  items-center  justify-center w-full h-auto py-5 gap-12 bg-white bg-opacity-25 mt-5
        
        "
        >
          <a href="#">
            <img
              src="https://api.iconify.design/logos:whatsapp-icon.svg"
              className="max-w-md w-28"
              alt=""
            />{" "}
          </a>{" "}
          <a href="#">
            <img
              src="https://api.iconify.design/logos:facebook.svg"
              className="max-w-md w-24"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://api.iconify.design/skill-icons:instagram.svg"
              className="max-w-md w-24"
              alt=""
            />
          </a>
        </div>
        <MaterialRelated />
      </Box>
    </>
  );
}
