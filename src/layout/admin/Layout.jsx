import { useState } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import CustomAlert from "../../components/CustomAlert";

export default function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = () => {
    if (isMobile) {
      setMobileOpen((prev) => !prev);
    } else {
      setCollapsed((prev) => !prev);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CustomAlert />
      <Header onMenuClick={handleMenuClick} />

      <Sidebar
        mobileOpen={mobileOpen}
        collapsed={collapsed}
        onClose={() => setMobileOpen(false)}
      />

      <Box
        component="main"
        sx={{
          width: "100%",
          flexGrow: 1,
          p: { xs: 1, sm: 3 },
          transition: "margin 0.3s",
          mt: "70px",
          ml: {
            sm: collapsed ? "72px" : "300px",
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
