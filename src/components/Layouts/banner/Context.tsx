import { createContext } from "react";

type Context = string[] | any;

export const ContentContext = createContext<React.ContextType<Context>>([
  "Descubra sabores orgânicos",
  "entregues diretamente à sua porta.",
  " Nosso delivery de produtos orgânicos é a jornada para um mundo de frescor que você merece.",
  " Vamos as Compras 🛍",
  "Registre-se",
]);
