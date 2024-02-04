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
import { CAT, pro } from "../../../Api/Api";
import { useNavigate } from "react-router-dom";
import cloudUploadImage from "../../../assets/Image/cloud-upload.png";

const AddProduct = () => {
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
  const [dummyData, setDummyData] = useState({
    category: null,
    title: "dummy",
    description: "dummy",
    price: 222,
    discount: 0,
    About: "dummy",
  });

  // inputs لاغلاق جميع
  const [sent, setSent] = useState(false);

  const [id, setId] = useState("");

  // ref
  const progress = useRef([]);
  const openImage = useRef(null);
  //* الصورة بداخله لسنتخدمه عند الحذف لاحقا id يتم تخزين
  const ids = useRef([]);

  //! 1 => handel change func
  function handelChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });

    //* inpute نقوم بفتح جميع , select عند عمل تغير داخل
    setSent(1);
    if (sent !== 1) {
      handelSumbitDummyData();
    }
  }

  //! 2 => get all Categories
  useEffect(() => {
    try {
      Axios.get(`/${CAT}`).then((data) => {
        setCategories(data.data)
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
        <Stack direction={"row"} gap={3} alignItems={"center"}>
          <img src={URL.createObjectURL(img)} width={"130px"} height={"90px"} />
          <Stack direction={"column"} alignItems={"start"} gap={2}>
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

  //! 6 => المنتج id ارسال داتا عشوائية الى الباك ايند لجلب
  //! select عند عمل اول تغيير (onChange) على حقل func نقوم بتشغيل
  async function handelSumbitDummyData() {
    try {
      const res = await Axios.post(`/${pro}/add`, dummyData);
      setId(res.data.id);
    } catch (error) {
      console.log(error);
    }
  }

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
      const res = await Axios.delete(`/product-img/${findId}`)
      setImage((prev) => prev.filter((image) => image !== img))
      ids.current = ids.current.filter((ids) => ids !== findId)
      --j.current
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{width: {xs: '100%' , md: "90%"}}}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5" color="initial">
          Add New Product
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
          disabled={!sent}
        />

        <TextField
          onChange={handelChange}
          value={form.description}
          name="description"
          id="description"
          label="Description"
          variant="outlined"
          disabled={!sent}
        />

        <TextField
          onChange={handelChange}
          value={form.price}
          name="price"
          id="price"
          label="Price"
          type="number"
          variant="outlined"
          disabled={!sent}
        />

        <TextField
          onChange={handelChange}
          value={form.discount}
          name="discount"
          id="discount"
          label="Discount"
          type="number"
          variant="outlined"
          disabled={!sent}
        />

        <TextField
          onChange={handelChange}
          value={form.About}
          name="About"
          id="About"
          label="About"
          variant="outlined"
          disabled={!sent}
        />
      
        <input
          hidden
          ref={openImage}
          type="file"
          multiple
          onChange={handelImagesChanges}
          disabled={!sent}
        />

        <Stack
          onClick={() => openImage.current.click()}
          alignItems={"center"}
          justifyContent={"center"}
          py={3}
          borderRadius={"8px"}
          sx={{
            cursor: "pointer",
            border: !sent ? "2px dashed gray" : "2px dashed #796EE5",
          }}
        >
          <img
            width={"90px"}
            src={cloudUploadImage}
            alt="Upload Images"
            style={{ filter: !sent && "grayscale(0.8)" }}
          />
          <Typography
            fontWeight={"bold"}
            variant="body1"
            color={!sent ? "gray" : "#796EE5"}
          >
            Upload Image
          </Typography>
        </Stack>

        {imagesShow}

        <MyButton loading={loading} text={"Add Product"} />
      </Box>
    </Box>
  );
};

export default AddProduct;
