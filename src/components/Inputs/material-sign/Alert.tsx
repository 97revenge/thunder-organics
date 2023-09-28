import { Box } from "grommet";

type Props = JSX.Element;
export const Alert = {
  Red: function ({
    title = "Erro ",
    subtitle = "tente corrigir algo nos seus dados ...",
  }): Props {
    return (
      <>
        <Box animation={"slideRight"} role="alert">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 mt-12">
            {title}
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{subtitle}</p>
          </div>
        </Box>
      </>
    );
  },
  Blue: function ({
    title = "Erro ",
    subtitle = "tente corrigir algo nos seus dados ...",
  }): Props {
    return (
      <>
        <Box animation={"slideRight"} role="alert">
          <div className="bg-blue-500 text-white font-bold rounded-t px-4 py-2 mt-12">
            {title}
          </div>
          <div className="border border-t-0 border-blue-400 rounded-b bg-red-100 px-4 py-3 text-blue-700">
            <p>{subtitle}</p>
          </div>
        </Box>
      </>
    );
  },
  Green: function ({
    title = "Erro ",
    subtitle = "tente corrigir algo nos seus dados ...",
  }): Props {
    return (
      <>
        <Box animation={"slideRight"} role="alert">
          <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2 mt-12">
            {title}
          </div>
          <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
            <p>{subtitle}</p>
          </div>
        </Box>
      </>
    );
  },
};
