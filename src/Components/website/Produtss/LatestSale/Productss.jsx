/* eslint-disable react/prop-types */
import { Box, Button, Paper, Rating, Stack, Typography } from "@mui/material";

import { FavoriteBorder } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addFav, addToCart } from "../../../../app/features/cart/cartSlice";
import { useCallback, useContext, useState } from "react";
import { ToastContext } from "../../../../Context/Toast";
const Productss = (props) => {
  const { image, rating, description, discount, price, id } = props;
  const [changeColor, setChangeColor] = useState("white");
  // @ts-ignore
  const { showHideAlert } = useContext(ToastContext);
  const dispatch = useDispatch();

  //handel add fav function
  const addFavFunc = useCallback(() => {
    dispatch(addFav(props));
    setChangeColor((prev) =>
      prev === "white" ? "rgb(254 202 202 / 0.5)" : "white"
    );
    showHideAlert("Successfully added to favorites");
  }, []);

  //handel add to cart
  const addToCard = useCallback(() => {
    dispatch(addToCart(props));
    showHideAlert("The product has been added successfully");
  }, []);


  
  return (
    <>
      <Box>
        {/* show Data  */}
        <Box sx={{ width: "100%" }}>
          <Stack
            sx={{ overflowX: "auto" }}
            direction={"row"}
            gap={2}
            className="my-3"
          >
            <Paper
              id={id}
              sx={{
                transition: "all 0.1s",
                "&:hover .img-conatiner": { border: "1.4px solid black" },
                "&:hover .fav, &:hover .btn": { transform: "translateX(0)" },
                mb: 3,
                width: "250px",
                minWidth: "250px",
                height: "440px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                }}
                className="img-conatiner "
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography
                    className="rounded-lg px-2"
                    variant="body1"
                    sx={{
                      bgcolor: "#fff",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                    fontWeight={"bold"}
                    color="initial"
                  >
                    HOT
                  </Typography>

                  <Box>
                    <Box
                      className="fav"
                      sx={{
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        transform: "translateX(60px)",
                        bgcolor: `${changeColor}`,
                        transition: "all",
                        transitionDuration: ".3s",
                        padding: "10px",
                        borderRadius: "50%",
                      }}
                      onClick={addFavFunc}
                    >
                      {/* <Favorite color="error" /> */}

                      <FavoriteBorder />
                      {/* < */}
                    </Box>
                  </Box>

                  <Typography
                    className="px-3 py-1 rounded-md"
                    sx={{
                      position: "absolute",
                      left: "10px",
                      top: "40px",
                      // @ts-ignore
                      bgcolor: discount !== "0" ? "#44cb8a" : false,
                      color: "#fff",
                    }}
                    variant="body2"
                    color="initial"
                  >
                    {discount !== "0" ? `-${discount}%` : false}
                  </Typography>
                </Stack>
                <img
                  style={{ maxWidth: "100%", width: "100%", height: "300px" }}
                  src={image}
                  alt="product"
                />
                <Box>
                  <Stack justifyContent={"center"} alignItems={"center"}>
                    <Button
                      className="btn"
                      variant="contained"
                      sx={{
                        width: "80%",
                        position: "absolute",
                        bottom: "14px",
                        transform: "translateX(250px)",
                        bgcolor: "#000000",
                        "&:hover": { bgcolor: "#232627" },
                      }}
                      onClick={addToCard}
                    >
                      Add to cart
                    </Button>
                  </Stack>
                </Box>
              </Box>

              <div className="pro-info mt-3 pl-3">
                <Box>
                  <Rating
                    name="read-only"
                    size="small"
                    sx={{ color: "black" }}
                    value={rating}
                    readOnly
                  />

                  <Typography
                    variant="body1"
                    className="line-clamp-2"
                    color="initial"
                    height="45px"
                    mb={1}
                    fontWeight={"600"}
                  >
                    {description}
                  </Typography>
                  <Stack direction={"row"} alignItems={"center"} gap={2}>
                    <Typography
                      sx={{
                        bgcolor: "#f6f6f6",
                        fontWeight: "700",
                        p: 0.7,
                        width: "fit-content",
                      }}
                      className="rounded-md"
                      variant="body1"
                      color="initeial"
                    >
                      ${-((+discount / 100) * +price - +price)}
                    </Typography>
                    <span
                      style={{ padding: "10px" }}
                      className="text-[#999999] font-[700] line-through"
                    >
                      {discount !== "0" && `$${price}`}
                    </span>
                  </Stack>
                </Box>
              </div>
            </Paper>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Productss;
