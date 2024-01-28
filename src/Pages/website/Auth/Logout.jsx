/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { LOGOUT } from "../../../Api/Api";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../Api/axios";


const Logout = ({ setalertOpen }) => {
  const cookie = Cookie();
  const nav = useNavigate();

  async function handelLogout() {
    try {
      await Axios.get(`/${LOGOUT}`);
      setalertOpen(true);
      cookie.remove("dashboard");
      setTimeout(() => {
        setalertOpen(false);
        nav("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Button component="button" onClick={handelLogout}>
      Logout
    </Button>
  );
};

export default Logout;
