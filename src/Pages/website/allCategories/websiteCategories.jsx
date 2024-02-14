import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import AppBarr from "../../../Components/website/AppBarr&Hero/AppBarr";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Axios } from "../../../Api/axios";
import { CAT } from "../../../Api/Api";
import axios from "axios";


let cancelAxios = null

const WebsiteCategories = () => {
  const [category, setCategory] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  }));

  // show all categories
  useEffect(() => {
    Axios.get(`/${CAT}` , {
      cancelToken: new axios.CancelToken((c) => {
        cancelAxios = c
      })
    }).then((data) => setCategory(data.data))

    return () => {
      console.log('cancel Axios')
      cancelAxios()
    }
  }, []);
  const showData = category.map((item,key) => (
    <Grid  key={key} xs={6} sm={4} md={3}>
      <Item>
        <Box sx={{overflow:'hidden' , maxHeight:"240px"}}>
            <img  src={`${item.image}`} style={{width:'150px',height:'100px',margin:'0 auto'}} alt="Description" />
            <Typography variant="h6" sx={{fontSize: {xs:'1rem', lg:'1.25rem'}}} textAlign={"center"} color="initial">
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
