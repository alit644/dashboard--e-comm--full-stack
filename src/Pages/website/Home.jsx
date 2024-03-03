// @ts-nocheck
import Box from "@mui/material/Box";
import AppBarr from "../../Components/website/AppBarr&Hero/AppBarr";
import "./Home.css";
import Hero from "../../Components/website/AppBarr&Hero/Hero";
import ShopByCat from "./allCategories/shopByCat";
import LatestSaleProducts from "../../Components/website/Produtss/LatestSale/LatestSaleProducts";
import Banner from "../../Components/website/AppBarr&Hero/Banner";
import ShowTopReted from "../../Components/website/Produtss/TopRated/ShowTopReted";
import BannerTwo from "../../Components/website/AppBarr&Hero/BannerTwo";
import CartDrawer from "../../Components/website/Drawer/CartDrawer";
import CartItemDrawer from "../../Components/website/cart/CartItemDrawer";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarr />
      <Hero />
      <LatestSaleProducts />
      <ShopByCat />
      <Banner />
      <ShowTopReted />
      <BannerTwo />
      <CartDrawer>
        <CartItemDrawer />
      </CartDrawer>
    </Box>
  );
};

export default Home;
