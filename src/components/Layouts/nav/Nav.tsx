import { TitleContext } from "./Context";

import { useContext } from "react";

const Anchor = ({ title, tag }: { title: string; tag: string }) => {
  return (
    <>
      <li>
        <a
          className="text-gray-500 transition hover:text-gray-500/75"
          href={tag}
        >
          {title}
        </a>
      </li>
    </>
  );
};

export const Nav = () => {
  const context = useContext(TitleContext);

  return (
    <>
      <TitleContext.Provider value={context}>
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-md">
            {context.map((item: any) => {
              return (
                <>
                  <Anchor title={item} key={item} tag={item} />
                </>
              );
            })}
          </ul>
        </nav>
      </TitleContext.Provider>
    </>
  );
};
