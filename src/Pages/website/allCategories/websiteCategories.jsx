import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import AppBarr from "../../../Components/website/AppBarr&Hero/AppBarr";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import styled from "@emotion/styled";
import SkeletonShow from "../../../Components/website/Skeleton/SkeletonShow";
import { useGetCategoryDataQuery } from "../../../app/features/cart/cartApiSlice";

const WebsiteCategories = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: theme.spacing(2),
    textAlign: "center",
  }));

  const { isLoading, data } = useGetCategoryDataQuery();


  if (isLoading)
    return (
      <Box mt={4}>
        <SkeletonShow
          width={"210px"}
          height={"230px"}
          length={10}
          classess={"flex gap-4 flex-wrap"}
        />
      </Box>
    );

  const showData = data.map((item, key) => (
    <Grid key={key} xs={6} sm={4} md={3}>
      <Item>
        <Box sx={{ overflow: "hidden", maxHeight: "240px" }}>
          <img
            src={`${item.image}`}
            style={{ width: "150px", height: "100px", margin: "0 auto" }}
            alt="Description"
          />
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "1rem", lg: "1.25rem" } }}
            textAlign={"center"}
            color="initial"
          >
            {item.title.length > 15
              ? item.title.slice(0, 15) + ".."
              : item.title}
          </Typography>
        </Box>
      </Item>
    </Grid>
  ));

  return (
    <Box>
      <AppBarr />

      <Container>
        <Stack>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            color="initial"
            className="py-8"
          >
            All Categories
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          {showData}
        </Grid>
      </Container>
    </Box>
  );
};

export default WebsiteCategories;
