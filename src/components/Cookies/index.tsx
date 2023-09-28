import { Box } from "grommet";
import { useContext, useState } from "react";
import { StateContext } from "../Carts/Context";

export const MaterialCookies = () => {
  const context = useContext(StateContext);
  const [state, setState] = useState(context);

  return (
    <>
      <Box
        animation={
          state.visible === true ? { type: "fadeIn" } : { type: "fadeOut" }
        }
        className="fixed bottom-0 w-full bg-green-50 dark:bg-green-800"
      >
        <div className="container px-4 py-8 mx-auto lg:flex lg:items-center lg:gap-x-16">
          <p className="text-gray-600 dark:text-green-300">
            Ao clicar em “Aceitar todos os cookies”, você concorda com o
            armazenamento de cookies no seu dispositivo para melhorar a
            navegação no site, analisar o site uso e auxiliar em nossos esforços
            de marketing.
          </p>

          <div className="flex items-center mt-6 gap-x-4 lg:gap-x-8 shrink-0 lg:mt-0">
            <button
              onClick={() => state.navigate("/config")}
              className="w-1/2 text-sm text-gray-800 underline transition-colors duration-300 md:w-auto dark:text-white dark:hover:text-green-400 hover:text-green-600 focus:outline-none"
            >
              Configuração de cookies
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setState({
                  ...state,
                  visible: false,
                });
              }}
              className=" text-sm w-1/2 md:w-auto font-medium bg-green-900 rounded-lg hover:bg-green-900/80 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
            >
              Aceitar todos os cookies
            </button>
          </div>
        </div>
      </Box>
    </>
  );
};
