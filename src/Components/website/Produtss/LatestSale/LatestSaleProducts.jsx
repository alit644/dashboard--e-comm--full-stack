import { Box, Container, Stack, Typography } from "@mui/material";
import { Axios } from "../../../../Api/axios";
import { useEffect, useState } from "react";
import { latestSale } from "../../../../Api/Api";
import Productss from "./Productss";
import SkeletonShow from "../../Skeleton/SkeletonShow";

const LatestSaleProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`/${latestSale}`)
      .then((data) => setProducts(data.data))
      .finally(() => setLoading(false));
  }, []);

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
          {loading ? (
            <SkeletonShow
              width={210}
              height={260}
              length={5}
              classess={"flex gap-4"}
            />
          ) : (
            showProducts
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default LatestSaleProducts;
