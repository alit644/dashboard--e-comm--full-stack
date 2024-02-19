import { Box, Button, Typography } from "@mui/material";
import "./appBar.css";
const BannerTwo = () => {
  return (
    <Box sx={{display:'flex' , justifyContent:'center', alignItems:'center'}} className="banner-two my-4 overflow-hidden">
      <Box sx={{width:{sm:'90%', md:'50%'}, mx:2 ,textAlign:'center',zIndex:999}}>
        <Typography variant="h4" color="white">
        Join Our Newsletter
        </Typography>
        <Typography variant="caption" color="#E8ECEF">
        Sign up for deals, new products and promotions
        </Typography>
        <Button>Signup</Button>
      </Box>
    </Box>
  );
};

export default BannerTwo;
