import { Elem } from "./Elem";

// const Component = () => {
//   <Elem />;
// };

type Props = { children: React.ReactNode };
export const MaterialBanner = ({ children = <Elem /> }: Partial<Props>) => {
  return (
    <>
      <section className="relative bg-[url(https://multibeneficiosgpa.com.br/wp-content/uploads/2020/05/1588193759_2474Maio051132x566pxV1b.jpg)] bg-cover bg-center bg-no-repeat">
        {children}
      </section>
    </>
  );
};
