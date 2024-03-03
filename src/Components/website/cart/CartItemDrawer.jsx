// @ts-nocheck
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Add, DeleteForeverOutlined, Remove } from "@mui/icons-material";
import Alertt from "../Alert/Alertt";
import { useDispatch, useSelector } from "react-redux";
import { onCloseCartDrawerAction } from "../../../app/features/global";
const CartItemDrawer = () => {
  const { cartItem } = useSelector((state) => state.cart);
  let total = 0;
  // show data
  const showItems = cartItem.map((item) => {
    total += +item.price * item.qty;
    return (
      <Paper key={item.id} sx={{ mb: 2 }}>
        <Box p={2} id={item.id}>
          <Stack
            direction={{ sm: "column", md: "row" }}
            alignItems={{ sm: "start", md: "center" }}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <img className="img-cart" src={item.image} alt="img-cart" />
              <Box className="crat-info">
                <Typography variant="body2" color="initial">
                  {item.description}
                </Typography>
                <Typography variant="caption" color="initial">
                  <span style={{ fontWeight: "bold" }}>discount</span>:{" "}
                  {item.discount !== "0" ? `${item.discount} %` : "no discount"}
                </Typography>
                <br />
                <Typography variant="caption" color="initial">
                  <Rating name="read-only" value={item.rating} readOnly />
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
                      {item.qty}
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
                {item.price * item.qty} $
              </Box>
              <Box sx={{ cursor: "pointer" }} className="delete-icon">
                <DeleteForeverOutlined />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    );
  });

  const dispatch = useDispatch();
  const onClose = () => dispatch(onCloseCartDrawerAction());

  return (
    <Container>
      {cartItem.length !== 0 && (
        <Typography mb={2} variant="h5" color="initial">
          My Cart ({cartItem.length} Item)
        </Typography>
      )}

      {cartItem.length !== 0 ? (
        <>
          <Alertt
            icon={""}
            severity={`warning`}
            title={"Login to complete your shopping faster"}
          />
          <Stack direction={{ sm: "column", md: "row" }} gap={2}>
            <Box sx={{ width: { sm: "95%", md: "70%" } }}>{showItems}</Box>
            <Box sx={{ width: { sm: "95%", md: "25%" } }}>
              <Paper>
                <Box p={3}>
                  <Typography variant="h5" color="initial">
                    Order Summary
                  </Typography>
                  <Box mb={1}>
                    <Typography variant="caption" color="initial">
                      Total of Product : {total} $
                    </Typography>
                    <br />
                    <Typography variant="caption" color="initial">
                      Shipping Total : 00
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
                    <Box color={"#31D3BE"}>{total} $</Box>
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
        </>
      ) : (
        <Paper sx={{ p: 3, border: "1px solid #FEFEFE" }}>
          <Stack
            direction={{xs:'column', md:'row'}}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            There are no products in your cart.
            <Button
              onClick={onClose}
              sx={{
                color: "#31d3be",
                borderColor: "#31d3be",
                "&:hover": { borderColor: "#31d3be" },
              }}
              variant="outlined"
            >
              Start shopping
            </Button>
          </Stack>
        </Paper>
      )}
    </Container>
  );
};

export default CartItemDrawer;
