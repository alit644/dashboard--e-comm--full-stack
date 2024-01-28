import { Button, Box, Stack, Typography } from "@mui/material";
import Tablee from "../../../Components/dashboard/Tablee";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PRO, pro } from "../../../Api/Api";
import { Axios } from "../../../Api/axios";

const Products = () => {
  // state
  const [products, setProducts] = useState([]);

  // paginations
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const [lodaing, setLodaing] = useState(false);
  const [total, settotal] = useState(0);

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

  // get all products
  useEffect(() => {
    try {
      setLodaing(true);

      Axios.get(`/${PRO}?limit=${limit}&page=${page}`).then((data) => {
        setProducts(data.data.data);
        settotal(data.data.total);
      }).finally(() => setLodaing(false))
    } catch (error) {
      console.log(error);
    } 
  }, [limit, page]);

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
        <Tablee
          header={header}
          data={products}
          delete={handelDelete}
          limit={limit}
          page={page}
          setPage={setPage}
          setLimit={setLimit}
          lodaing={lodaing}
          total={total}
        />
      </Box>
    </Box>
  );
};

export default Products;
