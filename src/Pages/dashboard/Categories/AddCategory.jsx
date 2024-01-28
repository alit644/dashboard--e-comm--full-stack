import {
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MyButton from "../../../Components/website/Button/MyButton";
import { useState } from "react";
import { Axios } from "../../../Api/axios";
import { cat } from "../../../Api/Api";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {

  const nav = useNavigate()

  // state
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  

  // handel submit
  async function handeSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData()
    form.append('title', title)
    form.append('image', image)
    try {
      await Axios.post(`/${cat}/add`, form );
      setLoading(false);
      nav('/dashboard/categories')
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <Box sx={{ width: "90%" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5" color="initial">
          Add New category
        </Typography>
      </Stack>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "95%" },
          mt: 4,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handeSubmit}
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id="name"
          label="title"
          variant="outlined"
        />
        <TextField
          // @ts-ignore
          onChange={(e) => setImage(e.target.files.item(0))}
          id="Image"
          type="file"
          label="Image"
          variant="outlined"
        />
    

        <MyButton loading={loading} text={"Add Category"} />
      </Box>
    </Box>
  );
};

export default AddCategory;
