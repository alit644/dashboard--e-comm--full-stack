// @ts-nocheck
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import Logout from "./Auth/Logout";
import Alertt from "../../Components/website/Alert/Alertt";
import { CheckCircleOutline } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Axios } from "../../Api/axios";
import { USER } from "../../Api/Api";

const Home = () => {
  const cookie = Cookie();
  const token = cookie.get("dashboard");

  //! current user
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    try {
      Axios.get(`/${USER}`).then((data) => setCurrentUser(data.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [alertOpen, setalertOpen] = useState(false);

  const nav = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#272727" }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ElinaShop
          </Typography>
          {token ? (
            <>
              {currentUser.role !== "2001" && (
                <Button onClick={() => nav("/dashboard")} color="inherit">
                  Dashboard
                </Button>
              )}

              <Logout setalertOpen={setalertOpen} />
            </>
          ) : (
            <>
              <Button onClick={() => nav("/login")} color="inherit">
                LogIn
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {alertOpen && (
        <Alertt
          title="Successfully logged out"
          severity={"success"}
          icon={<CheckCircleOutline fontSize="inherit" />}
        />
      )}
    </Box>
  );
};

export default Home;
