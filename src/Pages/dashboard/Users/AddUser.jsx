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
import { useState } from "react";
import { Axios } from "../../../Api/axios";
import { USER } from "../../../Api/Api";
import { useNavigate } from "react-router-dom";

const AddUser = () => {

  const nav = useNavigate()

  // state
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  // handel submit
  async function handeSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await Axios.post(`/${USER}/add`, {
        name: name,
        email: email,
        password: password,
        role: role,
      });
      setLoading(false);
      nav('/dashboard/users')
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <Box sx={{ width: "90%" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5" color="initial">
          Add New User
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
        onSubmit={handeSubmit}
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
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          type="Password"
          label="Password"

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

        <MyButton loading={loading} text={"Add User"} />
      </Box>
    </Box>
  );
};

export default AddUser;
