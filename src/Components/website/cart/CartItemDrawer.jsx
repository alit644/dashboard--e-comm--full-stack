import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import test from "../../../assets/Image/Image Placeholder.png";
import { Add, DeleteForeverOutlined, Remove } from "@mui/icons-material";
import Alertt from "../Alert/Alertt";
const CartItemDrawer = () => {
  return (
    <Container>
      <Typography mb={2} variant="h5" color="initial">
        My Cart (1 Item)
      </Typography>
      <Alertt
        icon={""}
        severity={`warning`}
        title={"Login to complete your shopping faster"}
      />
      <Stack direction={{ sm: "column", md: "row" }} gap={2}>
        <Box sx={{ width: { sm: "95%", md: "70%" } }}>
          <Paper sx={{ mb: 2 }}>
            <Box p={2}>
              <Stack
                direction={{ sm: "column", md: "row" }}
                alignItems={{ sm: "start", md: "center" }}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} alignItems={"center"} gap={2}>
                  <img className="img-cart" src={test} alt="img-cart" />
                  <Box className="crat-info">
                    <Typography variant="body2" color="initial">
                      BGK Unisex 8 Çift Pamuklu Basic Derbili Çorap
                    </Typography>
                    <Typography variant="caption" color="initial">
                      <span style={{ fontWeight: "bold" }}>Beden</span>: 36-42
                    </Typography>
                    <br />
                    <Typography variant="caption" color="initial">
                      Tahmini Kargoya Teslim: 2 gün içinde
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  sx={{ mt: { xs: 2, md: 0 } }}
                  direction={"row"}
                  alignItems={"center"}
                  gap={6}
                >
                  <Box className="counter">
                    <Stack
                      direction={"row"}
                      border={"1px solid #E6E6E6"}
                      sx={{ borderRadius: "4px" }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#E6E6E6",
                          borderRadius: "4px",
                          textAlign: "center",
                          height: "28px",
                          width: "22px",
                          cursor: "pointer",
                        }}
                      >
                        <Remove fontSize="small" />
                      </Box>
                      <Stack sx={{ width: "40px" }}>
                        <Typography
                          margin={"auto"}
                          variant="caption"
                          color="initial"
                        >
                          1
                        </Typography>
                      </Stack>
                      <Box
                        sx={{
                          bgcolor: "#E6E6E6",
                          borderRadius: "4px",
                          textAlign: "center",
                          height: "28px",
                          width: "22px",
                          cursor: "pointer",
                        }}
                      >
                        <Add fontSize="small" sx={{ color: "#31D3BE" }} />
                      </Box>
                    </Stack>
                  </Box>
                  <Box className="price" color={"#31D3BE"}>
                    900$
                  </Box>
                  <Box sx={{ cursor: "pointer" }} className="delete-icon">
                    <DeleteForeverOutlined />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ width: { sm: "95%", md: "25%" } }}>
          <Paper>
            <Box p={2}>
              <Typography variant="h5" color="initial">
                Order Summary
              </Typography>
              <Box mb={1}>
                <Typography variant="caption" color="initial">
                  Total of Product : 89 $
                </Typography>
                <br />
                <Typography variant="caption" color="initial">
                  Shipping Total : 2 $
                </Typography>
              </Box>
              <Divider />
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={1}
              >
                <Typography variant="body1" color="initial">
                  Total :{" "}
                </Typography>
                <Box color={"#31D3BE"}>222 $</Box>
              </Stack>
            </Box>
          </Paper>
          <Button
            variant="contained"
            sx={{
              my: 2,
              width: "100%",
              bgcolor: "#31D3BE",
              "&:hover": { bgcolor: "#31D3BE" },
            }}
          >
            Confirm Cart
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default CartItemDrawer;
