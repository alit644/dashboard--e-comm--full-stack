import { Box, Container, Stack, Typography } from "@mui/material";
import { topReted } from "../../../../Api/Api";
import Productss from "../LatestSale/Productss";
import SkeletonShow from "../../Skeleton/SkeletonShow";
import { useCaching } from "../../../../Hooks/useCaching";

const ShowTopReted = () => {



  const { isLoading, data } = useCaching({
    queryKey: ["productTopReted"],
    url: topReted,
  });

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
        Top Rated
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

export default ShowTopReted;
