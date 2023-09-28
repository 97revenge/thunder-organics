import { createContext } from "react";

type Title = {
  title: string[];
};

export const TitleContext = createContext<Title | any>(
  Array.from(["Feed", "FLV", "Embalados", "Frutas"])
);
