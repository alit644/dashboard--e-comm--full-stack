import { Button, Box, Stack, Typography } from "@mui/material";
import Tablee from "../../../Components/dashboard/Tablee";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PRO,  pro } from "../../../Api/Api";
import { Axios } from "../../../Api/axios";

const Products = () => {
  // state
  const [products, setProducts] = useState([]);

  const header = [
    {
      key: "images",
      name: "Images",
    },
    {
      key: "title",
      name: "Title",
    },
    {
      key: "description",
      name: "Description",
    },
    {
      key: "price",
      name: "Price",
    },
    {
      key: "rating",
      name: "Rating",
    },
  ];

  // get all Categories
  useEffect(() => {
    try {
      Axios.get(`/${PRO}`).then((data) => setProducts(data.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const nav = useNavigate();

  // handel delete function
  async function handelDelete(id) {
    try {
      await Axios.delete(`/${pro}/${id}`);
      setProducts((prev) => prev.filter((item) => item.id !== id));
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
          Products Pages
        </Typography>
        <Button
          className="outlinedBtn"
          onClick={() => nav("/dashboard/product/add")}
          variant="outlined"
          sx={{
            color: "#7453A6",
            borderColor: "#7453A6",
            transition: ".3s",
          }}
        >
          Add Product
        </Button>
      </Stack>

      <Box>
        <Tablee header={header} data={products} delete={handelDelete} />
      </Box>
    </Box>
  );
};

export default Products;
