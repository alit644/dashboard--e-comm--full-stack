/* eslint-disable react/no-unescaped-entities */
import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import "./auth.css";
import { Link } from "react-router-dom";
// @ts-ignore
import logo from "../../../assets/Image/sale.png";
import { useState } from "react";
import axios from "axios";
import { LOGIN, baseUrl } from "../../../Api/Api";
import Cookie from "cookie-universal";
import Alertt from "../../../Components/website/Alert/Alertt";
import { CheckCircleOutline } from "@mui/icons-material";
import MyButton from "../../../Components/website/Button/MyButton";

const Login = () => {
  // state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [accept, setaccept] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // cookies
  const cookie = Cookie();

  // handel change form
  function handelChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // handel onSubmit
  async function handelSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setaccept(true);
    try {
      const res = await axios.post(`${baseUrl}/${LOGIN}`, form);
      console.log(res.data);
      cookie.set("dashboard", res.data.token);
      setAlertOpen(true);
      setTimeout(() => {
        window.location.pathname = "/";
      }, 1000);
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.response.status === 422) {
        // @ts-ignore
        setError("Email is already been token");
      } else {
        // @ts-ignore
        setError("Internal server ERR");
      }
    }
  }

  return (
    <Box className="register">
      <Paper sx={{ width: { xs: "80%", md: "50%" } }}>
        <Stack direction={"row"} gap={2}>
          <Box
            sx={{ display: { xs: "none", lg: "block" } }}
            className="bgImage"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="shadow"
            >
              <img width={"80px"} height={"80px"} src={logo} alt="sale" />
            </div>
          </Box>
          <Box
            component="form"
            p={1}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
              m: "auto",
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
            onSubmit={handelSubmit}
          >
            <TextField
              required
              id="outlined-required2"
              label="Email"
              variant="standard"
              type="email"
              name="email"
              value={form.email}
              onChange={handelChange}
              error={
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email) &&
                accept
                  ? true
                  : false
              }
              helperText={
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email) &&
                accept &&
                "sorry, email not valid"
              }
            />
            <TextField
              required
              id="outlined-required2"
              label="Password"
              variant="standard"
              type="password"
              name="password"
              value={form.password}
              onChange={handelChange}
              error={form.password.length < 8 && accept ? true : false}
              helperText={
                form.password.length < 8 &&
                accept &&
                "Must be 8 characters or more"
              }
            />

            <MyButton loading={loading} text={'Loging'}/>

            <Typography variant="body1">
              You don't have an account <Link to="/register">Sign Up</Link>
            </Typography>

            <Typography variant="body2" color="error">
              {error}
            </Typography>
          </Box>
        </Stack>
      </Paper>
      {alertOpen && (
        <Alertt
          title={"Welcome To Back"}
          severity={"success"}
          icon={<CheckCircleOutline fontSize="inherit" />}
        />
      )}
    </Box>
  );
};

export default Login;
