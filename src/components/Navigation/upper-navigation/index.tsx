import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import ContactlessIcon from "@mui/icons-material/Contactless";

export default function UpperNavigation() {
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation showLabels style={{ display: "flex" }}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
        <BottomNavigationAction label="About us" icon={<InfoIcon />} />
        <BottomNavigationAction label="Nearby" icon={<ContactlessIcon />} />
      </BottomNavigation>
    </Box>
  );
}
