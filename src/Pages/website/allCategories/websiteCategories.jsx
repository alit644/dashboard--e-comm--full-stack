import { Box, Container, Stack, Typography } from "@mui/material";
import AppBarr from "../../../Components/website/AppBarr&Hero/AppBarr";
// import Grid from "@mui/material/Unstable_Grid2";
const WebsiteCategories = () => {
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
        
      
      </Container>
    </Box>
  );
};

export default WebsiteCategories;
