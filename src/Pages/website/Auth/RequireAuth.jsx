/* eslint-disable no-unused-vars */
// @ts-nocheck
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { useContext, useEffect, useState } from "react";
import { USER } from "../../../Api/Api";
import Loading from "../../../Components/Loading/Lodaing";
import { Axios } from "../../../Api/axios";
import Page403 from "../../../Components/Error/403/page403";
import { currentUser } from "../../../Context/CurrentUser";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ allowedRole }) => {
  const nav = useNavigate();
  const [user, setUser] = useState("");
  // console.log(user);

  // اليوسر الحالي
  useEffect(() => {
    Axios.get(`/${USER}`)
      .then((data) => setUser(data.data))
      .catch((err) => {
        console.log(err);
        nav("/login", { replace: true });
      });
  }, []);

  const userContext = useContext(currentUser);
  const ff = userContext.setUserContext(user);

  const cookie = Cookie();
  const token = cookie.get("dashboard");
  return token ? (
    user === "" ? (
      <Loading />
    // eslint-disable-next-line react/prop-types
    ) : allowedRole.includes(user.role) ? (
      <Outlet />
    ) : (
      <Page403 />
    )
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default RequireAuth;
