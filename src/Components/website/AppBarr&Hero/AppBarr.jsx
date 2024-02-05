import {
  AccountCircleOutlined,
  ArrowForward,
  LocalMallOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Stack,
  Badge,
  Drawer,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const AppBarr = () => {
  const navBarItem = [
    {
      name: "Home",
      icom: "",
      path: "/",
    },
    {
      name: "Shop",
      icom: "",
      path: "/hop",
    },
    {
      name: "Product",
      icom: "",
      path: "/product",
    },
    {
      name: "Categories",
      icom: "",
      path: "/all-categories",
    },
    {
      name: "Contact Us",
      icom: "",
      path: "/contact",
    },
  ];

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box >
      {/* Notification Bar */}
      <Box className="bg-secGreen py-1 text-center ">
        <Typography variant="body1" color="initial">
          30% off storewide — Limited time!
          <Link to="#" className="mx-4 underline text-black sm:hidden">
            Shop Now <ArrowForward sx={{ fontSize: "1.4rem" }} />{" "}
          </Link>
        </Typography>
      </Box>
      

      {/* app Bar */}
      <AppBar position="static" component="nav" sx={{ bgcolor: "#ffffff" }} color="inherit">
        <Toolbar className="justify-between">
          <Box className="flex items-center">
            <IconButton
              // className="sm:hidden md:flex"
              onClick={toggleDrawer("left", true)}
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0.3, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="div" className="cursor-pointer">
              3legant.
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navBarItem.map((item, i) => (
              <NavLink
                className="text-primary px-2 lg:px-7    font-[500] hover:text-secGreen transition-all"
                to={item.path}
                key={i}
              >
                <button >{item.name}</button>
              </NavLink>
            ))}
          </Box>

          <Stack direction={"row"} gap={2} className="text-text-primary ">
            <SearchOutlined
              sx={{ display: { xs: "none", sm: "block" } }}
              className="cursor-pointer hover:text-secGreen  "
            />
            <AccountCircleOutlined
              sx={{ display: { xs: "none", sm: "block" } }}
              className="cursor-pointer hover:text-secGreen  "
            />
            <Badge badgeContent={4} color="error">
              <LocalMallOutlined className="cursor-pointer hover:text-secGreen" />
            </Badge>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* phone screen */}
      <Drawer
        sx={{ "& .MuiDrawer-paper": { width: "60%", py:2 } }}
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Box className='px-4'>
          <Typography
            sx={{ mb: 2 }}
            variant="h6"
            component="div"
            className="cursor-pointer"
          >
            3legant.
          </Typography>

              <input type="text" placeholder="Search" className="mb-5 w-full focus:outline-none focus:shadow-lg shadow-md border h-8 pl-3 border-black rounded-md"  />

          <Stack className="divide-y divide-slate-300">
            {navBarItem.map((item, i) => (
              <NavLink
                className="text-primary font-[500] hover:text-secGreen transition-all"
                to={item.path}
                key={i}
              >
                <button className='mb-3'>{item.name}</button>
              </NavLink>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AppBarr;
5;
