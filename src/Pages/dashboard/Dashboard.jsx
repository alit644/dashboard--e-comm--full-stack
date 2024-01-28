import { Box, Stack } from "@mui/material";
import AppBarr from "../../Components/dashboard/AppBarr";
import Drawerr from "../../Components/dashboard/Drawerr";
import { Outlet } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <Box height={"100vh"} sx={{overflowY:'auto'}} bgcolor={"#FAF8FB"}>
      <AppBarr />

      <Stack direction={'row'} p={3}>
        <Drawerr />
        <Outlet />
      </Stack>
    </Box>
  );
};

export default Dashboard;
