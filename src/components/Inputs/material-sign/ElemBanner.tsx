import { Box } from "grommet";

export const ElemBanner = () => {
  return (
    <>
      <Box
        className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
        animation={"slideLeft"}
      >
        <img
          alt="Pattern"
          src="https://www.vero.com.br/wp-content/uploads/2020/06/38506560_c8b4_41a8_82f8_5374ecbbaf81.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </Box>
    </>
  );
};
