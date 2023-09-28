import { Item } from "./Item";

export type Props = { children: React.ReactNode };
export const Elem = ({ children = <Item /> }: Partial<Props>) => {
  return (
    <>
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      {children}
    </>
  );
};
