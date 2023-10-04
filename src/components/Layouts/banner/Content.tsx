import { useContext } from "react";
import { ContentContext } from "./Context";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { ShopBox } from "./ShopBox";

export const Content = () => {
  const context: any = useContext(ContentContext);
  return (
    <>
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right bg-slate-300/50 p-3 rounded-md gap-4">
        <Heading h1={context[0]} h2={context[1]} />
        <Paragraph p={context[2]} />
        <ShopBox shop={context[3]} sign={context[4]} />
      </div>
    </>
  );
};
