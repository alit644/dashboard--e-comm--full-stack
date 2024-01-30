import { Button, Box, Stack, Typography } from "@mui/material";
import Tablee from "../../../Components/dashboard/Tablee";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { USER, USERS } from "../../../Api/Api";
import { Axios } from "../../../Api/axios";

const Users = () => {
  // state
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

    // paginations
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [lodaing, setLodaing] = useState(false);
    const [total, settotal] = useState(0);
  

  const header = [
    {
      key: "name",
      name: "Name",
    },
    {
      key: "email",
      name: "Email",
    },
    {
      key: "role",
      name: "Role",
    },
  ];

  // get all users
  useEffect(() => {
    try {
      setLodaing(true)
      Axios.get(`/${USERS}?limit=${limit}&page=${page}`).then((data) => {setUsers(data.data.data)
        settotal(data.data.total)
      }).finally(() => setLodaing(false))
    } catch (error) {
      console.log(error);
    } 
  }, [limit,page]);

  // get currentUser now
  useEffect(() => {
    try {
      Axios.get(`/${USER}`).then((data) => setCurrentUser(data.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const nav = useNavigate();

  // handel delete function
  async function handelDelete(id) {
      try {
        await Axios.delete(`/${USER}/${id}`);
        setUsers((prev) => prev.filter((item) => item.id !== id));
      } catch (error) {
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
          Users Pages
        </Typography>
        <Button
          className="outlinedBtn"
          onClick={() => nav("/dashboard/user/add")}
          variant="outlined"
          sx={{
            color: "#7453A6",
            borderColor: "#7453A6",
            transition: ".3s",
          }}
        >
          Add User
        </Button>
      </Stack>

      <Box>
        <Tablee
          header={header}
          data={users}
          delete={handelDelete}
          currentUser={currentUser}
          limit={limit}
          page={page}
          setPage={setPage}
          setLimit={setLimit}
          lodaing={lodaing}
          total={total}
          searchBy='name'

        />
      </Box>
    </Box>
  );
};

export default Users;
