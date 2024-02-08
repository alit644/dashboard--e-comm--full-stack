/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// @ts-nocheck
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MyButton from "../../../Components/website/Button/MyButton";
import { useEffect, useRef, useState } from "react";
import { Axios } from "../../../Api/axios";
import { CAT, PRO, pro } from "../../../Api/Api";
import { useNavigate, useParams } from "react-router-dom";
import cloudUploadImage from "../../../assets/Image/cloud-upload.png";

const EditProduct = () => {
  const nav = useNavigate();

  // state
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
  });
  const [images, setImage] = useState([]);
  const [imageFromServer, setImageFromServer] = useState([]);

  const { id } = useParams();

  // ref
  const progress = useRef([]);
  const openImage = useRef(null);
  //* الصورة بداخله لسنتخدمه عند الحذف لاحقا id يتم تخزين
  const ids = useRef([]);

  //! 1 => handel change func
  function handelChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  //! 2 => get all Categories
  useEffect(() => {
    try {
      Axios.get(`/${CAT}`).then((data) => {
        setCategories(data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //! 2 => get all Products
  useEffect(() => {
    try {
      Axios.get(`/${pro}/${id}`).then((data) => {
        setForm(data.data[0]);
        setImageFromServer(data.data[0].images);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //! 3 => show categories item
  const showCategoriesItem = categories.map((item, key) => (
    <MenuItem key={key} value={item.id}>
      {item.title}
    </MenuItem>
  ));

  // handel submit
  //! 4 => (تعديل الداتا) ارسال الداتا
  async function handeEdit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await Axios.post(`/${pro}/edit/${id}`, form);
      setLoading(false);
      nav("/dashboard/products");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  //! 5 => Images show in page
  const imagesShow = images.map((img, key) => (
    <Paper key={key}>
      <Box sx={{ p: 1.5 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 1, md: 3 }}
          alignItems={{ xs: "start", md: "center" }}
        >
          <img src={URL.createObjectURL(img)} width={"130px"} height={"90px"} />
          <Stack
            direction={"column"}
            alignItems={"start"}
            gap={{ xs: 0.8, md: 2 }}
          >
            <p>{img.name}</p>
            <p>
              {img.size / 1024 < 900
                ? (img.size / 1024).toFixed(2) + "KB"
                : (img.size / (1024 * 1024)).toFixed(2) + "MB"}{" "}
            </p>
          </Stack>
          <div style={{ flexGrow: 1 }}></div>
          <Box>
            <Button
              onClick={() => handelDeleteImg(key, img)}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Box>
        </Stack>
      </Box>
      {/* Progress */}
      <div className="custom-progress">
        <span
          // واحد useRef  من خلال  spans ربطنا جميع
          ref={(e) => (progress.current[key] = e)}
          className="inner-progress"
        ></span>
      </div>
    </Paper>
  ));
  //! 5 => Images show in page from serve
  const showImageFromServer = imageFromServer.map((img, key) => (
    <Box
      width={{ xs: "160px", md: "220px" }}
      key={key}
      sx={{ mb: 1.5, position: "relative", bgcolor: "#fff" }}
    >
      <Box sx={{ p: 1.5 }}>
        <img
          className="imagesFromServe"
          src={img.image}
          style={{ width: "180px", height: "110px" }}
        />

        <Box position={"absolute"} top={0} right={"5px"}>
          <Button
            onClick={() => handelDeleteImgFromServe(img.id)}
            variant="contained"
            color="error"
            sx={{ minWidth: "0", p: "2px 8px" }}
          >
            x
          </Button>
        </Box>
      </Box>
    </Box>
  ));

  //! 7 => لهذه الصور id product رفع الصور قبل المنتج و اضافة
  //! 8 => progtess  انشاء شريط
  const j = useRef(-1);
  async function handelImagesChanges(e) {
    setImage((prev) => [...prev, ...e.target.files]);
    const imageIsFile = e.target.files;
    const data2 = new FormData();
    for (let i = 0; i < imageIsFile.length; i++) {
      j.current++;
      data2.append("image", imageIsFile[i]);
      data2.append("product_id", id);
      try {
        const res = await Axios.post(`/product-img/add`, data2, {
          // progtess انشاء شريط
          onUploadProgress: (progtessEvent) => {
            const { loaded, total } = progtessEvent;
            const person = Math.floor((loaded * 100) / total);
            if (person % 10 === 0) {
              progress.current[j.current].style.width = `${person}%`;
              progress.current[j.current].setAttribute("percent", `${person}%`);
            }
          },
        });
        ids.current[j.current] = res.data.id;
      } catch (error) {
        console.log(error);
      }
    }
  }

  //! 9 => delete imag
  async function handelDeleteImg(id, img) {
    const findId = ids.current[id];
    try {
      const res = await Axios.delete(`/product-img/${findId}`);
      setImage((prev) => prev.filter((image) => image !== img));
      ids.current = ids.current.filter((ids) => ids !== findId);
      --j.current;
    } catch (error) {
      console.log(error);
    }
  }
  //! 9 => delete imag from server
  async function handelDeleteImgFromServe(id) {
    try {
      const res = await Axios.delete(`/product-img/${id}`);
      setImageFromServer((prev) => prev.filter((image) => image.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ width: { xs: "100%", md: "90%" } }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5" color="initial">
          Edit Product
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
        onSubmit={handeEdit}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select"
            label="Select Category"
            value={form.category}
            name="category"
            onChange={handelChange}
          >
            {showCategoriesItem}
          </Select>
        </FormControl>

        <TextField
          onChange={handelChange}
          value={form.title}
          name="title"
          id="name"
          label="title"
          variant="outlined"
        />

        <TextField
          onChange={handelChange}
          value={form.description}
          name="description"
          id="description"
          label="Description"
          variant="outlined"
        />

        <TextField
          onChange={handelChange}
          value={form.price}
          name="price"
          id="price"
          label="Price"
          type="number"
          variant="outlined"
        />

        <TextField
          onChange={handelChange}
          value={form.discount}
          name="discount"
          id="discount"
          label="Discount"
          type="number"
          variant="outlined"
        />

        <TextField
          onChange={handelChange}
          value={form.About}
          name="About"
          id="About"
          label="About"
          variant="outlined"
        />

        <input
          hidden
          ref={openImage}
          type="file"
          multiple
          onChange={handelImagesChanges}
        />

        <Stack
          onClick={() => openImage.current.click()}
          alignItems={"center"}
          justifyContent={"center"}
          py={{ xs: 0.8, md: 3 }}
          borderRadius={"8px"}
          sx={{
            cursor: "pointer",
            border: "2px dashed #796EE5",
          }}
        >
          <img width={"90px"} src={cloudUploadImage} alt="Upload Images" />
          <Typography fontWeight={"bold"} variant="body1" color={"#796EE5"}>
            Upload Image
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={1.5} flexWrap={"wrap"} width={"220px"}>
          {showImageFromServer}
        </Stack>

        {imagesShow}

        <MyButton loading={loading} text={"save"} />
      </Box>
    </Box>
  );
};

export default EditProduct;
