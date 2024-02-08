// @ts-nocheck
import Box from "@mui/material/Box";
import AppBarr from "../../Components/website/AppBarr&Hero/AppBarr";
import "./Home.css";
import Hero from "../../Components/website/AppBarr&Hero/Hero";
import ShopByCat from "./allCategories/shopByCat";
import LatestSaleProducts from "../../Components/website/Produtss/LatestSaleProducts";
import Banner from "../../Components/website/AppBarr&Hero/Banner";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarr />
      <Hero />
      <LatestSaleProducts />
      <ShopByCat />
      <Banner/>
    </Box>
  );
};

export default Home;
