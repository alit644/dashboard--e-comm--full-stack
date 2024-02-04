// @ts-nocheck
import Box from "@mui/material/Box";
import AppBarr from "../../Components/website/AppBarr&Hero/AppBarr";
import "./Home.css";
import Hero from "../../Components/website/AppBarr&Hero/Hero";
import Productss from "../../Components/website/Produtss/Productss";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarr />
      <Hero />
      <Productss />
    </Box>
  );
};

export default Home;
