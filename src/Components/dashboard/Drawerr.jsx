import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Stack } from "@mui/material";
import "./dashboardCom.css";
import { deepPurple } from "@mui/material/colors";
import { AddCircleOutlineOutlined, CategoryOutlined, GroupAddOutlined, GroupOutlined, ProductionQuantityLimits } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
// @ts-ignore
import logo from "../../assets/Image/atom.png";
import "./dashboardCom.css";
import { useContext } from "react";
import { Menu } from "../../Context/Menuu";
import { WindowSize } from "../../Context/WindowSize";
import { currentUser } from "../../Context/CurrentUser";

const drawerWidth = 240;
export default function Drawerr() {
  //! menu context
  const menuContext = useContext(Menu);
  // @ts-ignore
  const isOpen = menuContext.isOpen;

  //! window size context
  const windowNow = useContext(WindowSize);
  const windowSize = windowNow.windowSize;

  //! Cuurent User Now
  const userNow = useContext(currentUser);
  // @ts-ignore
  const user = userNow.userContext;
  const name = user.name
  

  const drawerItems = [
    {
      name: "Users",
      icon: <GroupOutlined />,
      path: "users",
      role: "1995",
    },
    {
      name: "Add User",
      icon: <GroupAddOutlined />,
      path: "user/add",
      role: "1995",
    },

    {
      name: "Categories",
      icon: <CategoryOutlined />,
      path: "categories",
      role: ["1995","1999"],
    },
    {
      name: "Add Category",
      icon: <AddCircleOutlineOutlined />,
      path: "category/add",
      role: ["1995","1999"],
    },
    {
      name: "Products",
      icon: <ProductionQuantityLimits />,
      path: "products",
      role: ["1995","1999"],
    },
    {
      name: "Add product",
      icon: <AddCircleOutlineOutlined />,
      path: "product/add",
      role: ["1995","1999"],
    },
    {
      name: "Writer",
      icon: <GroupAddOutlined />,
      path: "writer",
      role: ["1995","1996"],
    },
  ];

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "70px",
          left: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0 , 0,0 ,0.3)",
          display: windowSize < "768" && isOpen ? "block" : "none",
        }}
      ></Box>
      <Box zIndex={9999} position={windowSize < "768" ? "fixed" : "static"}>
        <Drawer
          sx={{
            width: isOpen ? drawerWidth : "66px",
            flexShrink: 0,
            transition: "0.2s",
            // MuiDrawer-paper
            "& .MuiDrawer-paper": {
              width: isOpen ? drawerWidth : "66px",
              left: windowSize < "768" ? (isOpen ? 0 : "-100%") : "0",
              boxSizing: "border-box",
              // background: "rgb(85,80,134)",
              background:
                "linear-gradient(90deg, rgba(85,80,134,1) 19%, rgba(90,86,140,1) 66%)",
              color: "#cacaca",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Stack
            direction={"row"}
            p={isOpen ? 2.5 : 1.5}
            alignContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <Typography variant="body2" color="initial">
              <img width={"35px"} src={logo} alt="" />
            </Typography>
            <Typography variant="h5" color="white">
              {isOpen && "ElinaAdmin"}
            </Typography>
          </Stack>
          <Stack className="bgDrawer">
            <div className="shadow">
              <Stack
                direction={"row"}
                gap={isOpen && 1.5}
                alignItems={"center"}
              >
                <Avatar sx={{ color: deepPurple[500] }}>{name !== undefined && name.split('')[0].toUpperCase()}</Avatar>
                <Typography variant="body1" color="HighlightText">
                  {isOpen && user.name}
                </Typography>
              </Stack>
            </div>
          </Stack>

          <Divider />
          <List>
            {drawerItems.map((text, i) => (
                text.role.includes(user.role) && (
                  <NavLink to={text.path} key={i}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon
                          sx={{
                            color: "rgba(197, 196, 199, 0.603)",
                            minWidth: isOpen ? "55px" : "0",
                          }}
                        >
                          {text.icon}
                        </ListItemIcon>
                        <ListItemText
                          color="gray"
                          primary={isOpen && text.name}
                        />
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                )
            ) )}
          </List>
        </Drawer>
      </Box>
    </>
  );
}
