import { Button, Box, Stack, Typography } from "@mui/material";
import Tablee from "../../../Components/dashboard/Tablee";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CAT, cat} from "../../../Api/Api";
import { Axios } from "../../../Api/axios";

const Categories = () => {
  // state
  const [categories, setCategories] = useState([]);

  const header = [
    {
      key: "title",
      name: "Title",
    },
    {
      key: "image",
      name: "Image",
    },
  
  ];

  // get all Categories
  useEffect(() => {
    try {
      Axios.get(`/${CAT}`).then((data) => setCategories(data.data));
    } catch (error) {
      console.log(error);
    }
  }, []);



  const nav = useNavigate();

  // handel delete function
  async function handelDelete(id) {
      try {
        await Axios.delete(`/${cat}/${id}`);
        setCategories((prev) => prev.filter((item) => item.id !== id));
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
        Categories Pages
        </Typography>
        <Button
          className="outlinedBtn"
          onClick={() => nav("/dashboard/category/add")}
          variant="outlined"
          sx={{
            color: "#7453A6",
            borderColor: "#7453A6",
            transition: ".3s",
          }}
        >
          Add Category
        </Button>
      </Stack>

      <Box>
        <Tablee
          header={header}
          data={categories}
          delete={handelDelete}
          // currentUser={currentUser}
        />
      </Box>
    </Box>
  );
};

export default Categories;
