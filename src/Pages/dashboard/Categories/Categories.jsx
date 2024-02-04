import {
  Button,
  Box,
  Stack,
  Typography,
  
} from "@mui/material";
import Tablee from "../../../Components/dashboard/Tablee";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CAT, cat } from "../../../Api/Api";
import { Axios } from "../../../Api/axios";

const Categories = () => {
  // state
  const [categories, setCategories] = useState([]);

  // paginations
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const [total, settotal] = useState(0);
  const [lodaing, setLodaing] = useState(false);


  const header = [
    {
      key: "title",
      name: "Title",
    },
    {
      key: "image",
      name: "Image",
    },
    {
      key: "created_at",
      name: "Created",
    },
    {
      key: "updated_at",
      name: "Updated",
    },
  ];

  // get all Categories
  useEffect(() => {
    try {
      setLodaing(true);
      Axios.get(`/${CAT}?limit=${limit}&page=${page}`)
        .then((data) => {
          setCategories(data.data.data);
          settotal(data.data.total);
        })
        .finally(() => setLodaing(false));
    } catch (error) {
      console.log(error);
    }
  }, [limit, page]);

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

  // serach func =>


  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5" sx={{fontSize: {xs:'1rem' , md:'1.25rem'}}} color="initial">
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
            fontSize: {xs:'0.9rem' , md:'1.25rem'},
            p:{xs:'3px 10px' , md:'5px 15px'}
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
          limit={limit}
          page={page}
          setPage={setPage}
          setLimit={setLimit}
          lodaing={lodaing}
          total={total}
          serachLink={cat}
        />
      </Box>
    </Box>
  );
};

export default Categories;
