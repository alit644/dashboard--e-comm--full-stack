import { Box, Button, Stack, Typography } from "@mui/material";
// @ts-ignore
import imgBanner from "../../../assets/Image/bannerImage.png";
const Banner = () => {

    
  return (
    <Box>
      <Stack
        direction={{ sm: "column-reverse", md: "row" }}
        flexWrap={"wrap"}
        sx={{ my: 4 }}
      >
        <Box className="image-box" sx={{ width: { sm: "100%", md: "50%" } }}>
          <img
            style={{ height: "420px", width: "100%" }}
            src={imgBanner}
            alt=""
          />
        </Box>
        <Stack
          justifyContent={"center"}
          sx={{ width: { sm: "100%", md: "50%" }, p: 3 }}
          className="info-box bg-black"
        >
          <Box className="text-info">
            <Typography variant="body1" sx={{ color: "#38CBB9" }}>
              Limited Edition
            </Typography>
            <Typography variant="h3" color="white">
              Hurry up! 30% OFF
            </Typography>
            <Typography variant="caption" color="#E8ECEF">
              Find clubs that are right for your game
            </Typography>
            {/* Offer expires in: */}
            <Box className="offer-time" sx={{ my: 2 }}>
              <Typography variant="caption" color="#E8ECEF">
                Offer expires in:
              </Typography>
              <Stack direction={"row"} gap={2} mt={2}>
                <div className="bg-white size-12 font-bold text-center leading-[3rem] text-lg hover:rounded-md transition-all duration-300">
                  02
                </div>
                <div className="bg-white size-12 font-bold text-center leading-[3rem] text-lg hover:rounded-md transition-all duration-300">
                  12
                </div>
                <div className="bg-white size-12 font-bold text-center leading-[3rem] text-lg hover:rounded-md transition-all duration-300">
                  45
                </div>
              </Stack>
            </Box>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#38CBB9",
                mt: 2,
                width: "fit-content",
                "&:hover": { bgcolor: "#38CBa9" },
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Banner;
