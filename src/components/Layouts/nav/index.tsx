import { Elem } from "./Elem";
import { Icon } from "./Icon";
import { Item } from "./Item";
import { Nav } from "./Nav";
import { Button } from "./Button";

import { Box } from "grommet";

const Component = () => {
  return (
    <>
      <Elem>
        <Icon />
        <Item toogleButton={<Button />}>
          <Nav />
        </Item>
      </Elem>
    </>
  );
};

type Props = { children: React.ReactNode | undefined };
export const MaterialNav = ({ children = <Component /> }: Partial<Props>) => {
  return (
    <>
      <Box animation={"fadeIn"}>
        <header className="bg-white ">{children}</header>
      </Box>
    </>
  );
};
