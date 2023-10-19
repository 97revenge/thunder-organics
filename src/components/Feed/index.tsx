import { MaterialCart } from "../Carts";
import { OrganicProductsContext as Context } from "../Carts/Context";

import { useContext } from "react";
import { HighlightedCart } from "./HighlightedCart";

export default function MaterialFeed() {
  const context = useContext(Context);

  return (
    <>
      <div className="w-auto h-full rounded-md bg-gray-200/50 mt-10 pt-2  ">
        <HighlightedCart />
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-row-9  lg:gap-8   w-full lg:max-h-30  max-w-5xl mt-5  p-3 gap-3">
          <Context.Provider value={context}>
            {<HighlightedCart /> ? (
              context.map((item: any) => (
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
              ))
            ) : (
              <div>ok</div>
            )}
          </Context.Provider>
        </div>
      </div>
    </>
  );
}
