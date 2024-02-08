import { Box, Container, Stack, Typography } from "@mui/material";
import { Axios } from "../../../Api/axios";
import { useEffect, useState } from "react";
import { latestSale } from "../../../Api/Api";
import Productss from "./Productss";

const LatestSaleProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get(`/${latestSale}`).then((data) => setProducts(data.data));
  }, []);

  //TODO error in edit products (category not found }
  const showProducts = products.map((product, k) => (
    <Productss
      key={k}
      discount={product.discount}
      description={product.description}
      price={product.price}
      rating={product.rating}
      image={product.images[0].image}
    />
  ));
  return (
    <Container>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        color="initial"
        className="py-8"
      >
        Latest Sale
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Stack
          sx={{ overflowX: "auto" }}
          direction={"row"}
          gap={2}
          className="my-3"
        >
          {showProducts}
        </Stack>
      </Box>
    </Container>
  );
};

export default LatestSaleProducts;
