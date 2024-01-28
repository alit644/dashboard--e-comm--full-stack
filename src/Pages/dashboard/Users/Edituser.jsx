import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MyButton from "../../../Components/website/Button/MyButton";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../../Api/axios";
import { USER } from "../../../Api/Api";

const Edituser = () => {
  const nav = useNavigate();

  // state
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  // id from params
  const id = useParams();

  // id حلب مستخدم واحد عن طريق
  useEffect(() => {
    setLoading(true);
    Axios.get(`/${USER}/${id.id}`)
      .then((data) => {
        setName(data.data.name);
        setEmail(data.data.email);
        setRole(data.data.role);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        nav('/dashboard/404' , {replace:true})
      });
  }, []);

  // hande submit dara
  async function handelSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await Axios.post(`/${USER}/edit/${id.id}`, {
        name: name,
        email: email,
        role: role,
      });
      setLoading(false);

      nav("/dashboard/users");
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  }

  return (
    <>
      <Box sx={{ width: "90%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5" color="initial">
            Edit User
          </Typography>
        </Stack>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "95%" },
            mt: 4,
          }}
          noValidate
          autoComplete="off"
          onSubmit={handelSubmit}
        >
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="email"
            label="Email"
            variant="outlined"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <MenuItem value={`1995`}>Admin</MenuItem>
              <MenuItem value={`2001`}>User</MenuItem>
              <MenuItem value={`1996`}>Writer</MenuItem>
              <MenuItem value={`1999`}>Product Manger</MenuItem>
            </Select>
          </FormControl>

          <MyButton loading={loading} text={"Save"} />
        </Box>
      </Box>
    </>
  );
};

export default Edituser;
