// @ts-nocheck
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import SkeletonShow from "../../../Components/website/Skeleton/SkeletonShow";
import { useGetCategoryDataQuery } from "../../../app/features/cart/cartApiSlice";

const ShopByCat = () => {

  const { isLoading, data } = useGetCategoryDataQuery();
  
  
  

  if (isLoading)
    return (
      <Box mt={4}>
        <SkeletonShow
          width={"230px"}
          height={"240px"}
          length={6}
          classess={"grid grid-cols-2 md:grid-cols-3 gap-2"}
        />
      </Box>
    );
  // show category in website
  const Item = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    height: { sm: "200px", md: "220px" },
    textAlign: "center",
    marginBottom: 3,
    padding: theme.spacing(1),
  }));
  const showCategory = data.slice(-6).map((item, key) => (
    <Grid key={key} xs={6} md={4}>
      <Item>
        <Box
          sx={{
            width: { md: "250px", lg: "300px" },
            height: "250px",
          }}
          className="hover:shadow-md"
          mb={3}
        >
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              bgcolor: "#F3F5F7",
              width: { md: "250px", lg: "300px" },
              height: { md: "250px", lg: "250px" },
            }}
            className="rounded-md cursor-pointer"
          >
            <img
              className="sm:w-[120px] w-[200px] sm:h-[140px] h-[200px]"
              src={item.image}
              alt="image-category"
            />
          </Stack>
          <Typography variant="h5" textAlign={"center"} color="initial">
            {item.title.length > 15
              ? item.title.slice(0, 15) + ".."
              : item.title}
          </Typography>
        </Box>
      </Item>
    </Grid>
  ));
  return (
    <Container>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="h5"
          fontWeight={"bold"}
          color="initial"
          className="py-8 "
        >
          Shop by Categories
        </Typography>
        <Link to="/all-categories">
          <Button
            variant="outlined"
            sx={{
              borderColor: "#000000",
              color: "#000000",
              transition: "all",
              transitionDuration: ".3s",
              "&:hover": {
                bgcolor: "#000000",
                borderColor: "#000000",
                color: "#fff",
              },
            }}
          >
            show all
          </Button>
        </Link>
      </Stack>
      <Grid container>{showCategory}</Grid>
    </Container>
  );
};

export default ShopByCat;
