import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { STATIC_MENUS } from "../../../static/staticMenus";

const Sidebar = ({ mobileOpen, onClose, collapsed }) => {
  const location = useLocation();

  const drawerContent = (
    <>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {STATIC_MENUS.map((menu, index) => {
            const isActive = location.pathname.startsWith(menu.to);
            return (
              <ListItem key={index} sx={{ p: 0 }}>
                <ListItemButton
                  component={RouterLink}
                  to={menu.to}
                  selected={isActive}
                  onClick={onClose}
                  sx={{
                    mx: 1,
                    borderRadius: 2,
                    transition: "all 0.2s ease",
                    justifyContent: collapsed ? "center" : "flex-start",
                    "&.Mui-selected": {
                      backgroundColor: "primary.main",
                      color: "white",
                      "& .MuiListItemIcon-root": {
                        color: "white",
                      },
                    },

                    "&.Mui-selected:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: collapsed ? 0 : 2,
                      justifyContent: "center",
                    }}
                  >
                    <menu.icon />
                  </ListItemIcon>
                  {!collapsed && <ListItemText primary={menu.name} />}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );

  return (
    <>
      {/* Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: collapsed ? 72 : 300,
            transition: "width 0.3s",
            overflowX: "hidden",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
