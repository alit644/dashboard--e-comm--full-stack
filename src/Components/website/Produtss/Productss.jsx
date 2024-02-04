import {
  Box,
  Button,
  Checkbox,
  Container,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Axios } from "../../../Api/axios";
import { useEffect, useState } from "react";
import { PRO } from "../../../Api/Api";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const Productss = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      Axios.get(`/${PRO}`).then((data) => {
        setData(data.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const showData = data.map((item, i) => {
    const imgsrc =
      item.images.length !== 0
        ? item.images[0].image
        : "This product has no pictures";
    return (
      item.About === "Featured" && (
        <Paper
          key={i}
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
            className="img-conatiner"
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
              <Checkbox
                className="fav"
                color="error"
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  transform: "translateX(60px)",
                  bgcolor: "#fff",
                  transition: "all",
                  transitionDuration: ".3s",
                }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
              <Typography
                className="px-3 py-1 rounded-md"
                sx={{
                  position: "absolute",
                  left: "10px",
                  top: "40px",
                  // @ts-ignore
                  bgcolor: item.discount !== "0" ? "#44cb8a" : false,
                  color: "#fff",
                }}
                variant="body2"
                color="initial"
              >
                {item.discount !== "0" ? `-${item.discount}%` : false}
              </Typography>
            </Stack>
            <img
              style={{ maxWidth: "100%", width: "100%", height: "300px" }}
              src={imgsrc}
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
                value={4}
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
                {item.description}
              </Typography>
              <Stack direction={"row"} alignItems={'center'} gap={2}>
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
                  $
                  {-(((+item.discount /100 ) * +item.price) - +item.price)}
                   
                </Typography>
                <span
                  style={{ padding: "10px" }}
                  className="text-[#999999] font-[700] line-through"
                >
                  {item.discount !== '0' && `$${item.price}`}
                </span>
              </Stack>
            </Box>
          </div>
        </Paper>
      )
    );
  });

  return (
    <Box>
      <Container>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          color="initial"
          className="py-8"
        >
          Featured
        </Typography>

        {/* show Data  */}
        <Box sx={{ width: "100%" }}>
          <Stack
            sx={{ overflowX: "auto" }}
            direction={"row"}
            gap={2}
            className="my-3"
          >
            {showData}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Productss;
