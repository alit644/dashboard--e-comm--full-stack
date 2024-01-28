import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useContext } from "react";
import { Menu } from "../../Context/Menuu";
import { WindowSize } from "../../Context/WindowSize";
import { currentUser } from "../../Context/CurrentUser";

export default function AppBarr() {
  const menuContext = useContext(Menu);
  // @ts-ignore
  const setisOpen = menuContext.setIsOpen;

  //! window size context
  const windowNow = useContext(WindowSize);
  const windowSize = windowNow.windowSize;

  //! Cuurent User Now
  const userNow = useContext(currentUser);
  // @ts-ignore
  const user = userNow.userContext;
  const name = user.name;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          bgcolor: "#FFFFFF",
          // @ts-ignore
          width: menuContext.isOpen
            ? `calc(100% - ${240}px)`
            : windowSize < "768"
            ? "100%"
            : `calc(100% - 66px)`,
          // @ts-ignore
          ml: menuContext.isOpen
            ? `${240}px`
            : windowSize < "768"
            ? "0"
            : "66px",
          position: "static",
          color: "gray",
        }}
      >
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, border: "1px solid gray" }}
            onClick={() => setisOpen((prev) => !prev)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            search box
          </Typography>
          <Avatar sx={{ cursor: "pointer", color: deepPurple[500] }}>
            {name !== undefined && name.split("")[0].toUpperCase()}
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
