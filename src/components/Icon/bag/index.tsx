import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { BottomNavigationAction, Box } from "@mui/material";

export default function UpperNavigation() {
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigationAction
        label="Meu Carrinho"
        icon={<LocalGroceryStoreIcon />}
      />
    </Box>
  );
}

type Props = { children: React.JSX.Element };
export const BagStoreIcon: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Box sx={{ width: 500 }} alignItems={"center"}>
        <BottomNavigationAction
          label={children}
          icon={<LocalGroceryStoreIcon />}
        />
      </Box>
    </>
  );
};
