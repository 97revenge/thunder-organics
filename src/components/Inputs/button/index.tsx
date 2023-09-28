import { Button, Box } from "@mui/material";
import { BagStoreIcon } from "../../Icon/bag";

type Props = { children: React.ReactNode };

export const ButtonOf: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button
          variant="contained"
          disableElevation
          style={{ background: "#407536" }}
        >
          {children}
        </Button>
        <BagStoreIcon children={<h1></h1>} />
      </Box>
    </>
  );
};
