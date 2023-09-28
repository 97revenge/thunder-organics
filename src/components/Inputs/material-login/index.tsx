import { Elem } from "./Elem";
import { Props } from "./type";

export const MaterialLogin = ({ children = <Elem /> }: Partial<Props>) => {
  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        {children}
      </section>
    </>
  );
};
