import {
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MyButton from "../../../Components/website/Button/MyButton";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../../Api/axios";
import { cat } from "../../../Api/Api";

const EditCategory = () => {
  const nav = useNavigate();

  // state
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  // id from params
  const id = useParams();

  // id حلب مستخدم واحد عن طريق
  useEffect(() => {
    setLoading(true);
    Axios.get(`/${cat}/${id.id}`)
      .then((data) => {
        setTitle(data.data.title);
        setImage(data.data.image);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        nav("/dashboard/404", { replace: true });
      });
  }, []);

  // hande submit dara
  async function handelSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData();
    form.append("title", title);
    form.append("image", image);
    try {
      await Axios.post(`/${cat}/edit/${id.id}`, form);
      setLoading(false);

      nav("/dashboard/categories");
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  }

  return (
    <>
      <Box sx={{ width: "90%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5" color="initial">
            Edit category
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
          onSubmit={handelSubmit}
        >
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="name"
            label="Title"
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

          <MyButton loading={loading} text={"Save"} />
        </Box>
      </Box>
    </>
  );
};

export default EditCategory;
