import { Box } from "grommet";

export const BackgroundHalfLogin = () => {
  return (
    <>
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 bg-green-700/50">
        <Box animation={"fadeIn"}>
          <img
            alt="Welcome"
            src="https://www.frubelle.com.br/wp-content/uploads/2019/12/A-import%C3%A2ncia-do-hortifruti-na-alimenta%C3%A7%C3%A3o-1000x600.jpg"
            className="absolute inset-0 h-full w-full object-cover rounded-3xl "
          />
        </Box>
      </div>
    </>
  );
};
