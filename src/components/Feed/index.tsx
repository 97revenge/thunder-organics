import { MaterialCart } from "../Carts";
import { OrganicProductsContext as Context } from "../Carts/Context";

import { useContext } from "react";

export default function MaterialFeed() {
  const context = useContext(Context);

  return (
    <>
      <Context.Provider value={context}>
        <div className="  grid grid-cols-2 sm:grid-cols-3 grid-row-9  lg:gap-8  bg-gray-200/50 w-full lg:max-h-30  max-w-5xl mt-5 rounded-md p-3 gap-3">
          {context.map((item: any) => (
            <>
              <MaterialCart
                image={item.image}
                name={item.name}
                description={item.description}
                value={item.value}
                discount={item.discount(item.value)}
                time={Number(0)}
              />
            </>
          ))}
        </div>
      </Context.Provider>
    </>
  );
}
