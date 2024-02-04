import { Box, Button, Stack, Typography } from "@mui/material";
import "./appBar.css";

const Hero = () => {
  return (
    <Stack justifyContent={'center'} sx={{ bgcolor: "#000" }} className="hero-section">
      <Box className="md:w-2/5 sm-w-full mx-5 z-50">
        <Typography variant="h3" className="text-white shadow-lg shadow-[#000]">
          More than just a game. It’s a lifestyle.
        </Typography>
        <Typography variant="body2" className="text-slate-200 ">
          Whether you’re just starting out, have played your whole life or you
          re a Tour pro, your swing is like a fingerprint.
        </Typography>
        <Button variant="contained" sx={{bgcolor:'#38CBB9', '&:hover' : {bgcolor:'#20d3be'} , mt:4}} >
          shoppimg Now
        </Button>
      </Box>
    </Stack>
  );
};

export default Hero;
