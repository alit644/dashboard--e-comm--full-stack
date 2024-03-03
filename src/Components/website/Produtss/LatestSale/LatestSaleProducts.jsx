import { Box, Container, Stack, Typography } from "@mui/material";
import Productss from "./Productss";
import SkeletonShow from "../../Skeleton/SkeletonShow";
import { useGetProductsDataQuery } from "../../../../app/features/cart/cartApiSlice";

const LatestSaleProducts = () => {
  const { isLoading, data } = useGetProductsDataQuery();

  if (isLoading)
    return (
      <Box mt={4}>
        <SkeletonShow
          width={210}
          height={260}
          length={5}
          classess={"flex gap-4"}
        />
      </Box>
    );

  const showProducts = data.map((product, k) => (
    <Productss
      key={k}
      id={product.id}
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
