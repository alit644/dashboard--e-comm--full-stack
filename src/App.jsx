// @ts-nocheck
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/website/Home";
import Register from "./Pages/website/Auth/Register";
import Login from "./Pages/website/Auth/Login";
import Dashboard from "./Pages/dashboard/Dashboard";
import Users from "./Pages/dashboard/Users/Users";
import AddUser from "./Pages/dashboard/Users/AddUser";
import RequireAuth from "./Pages/website/Auth/RequireAuth";
import Edituser from "./Pages/dashboard/Users/Edituser";
import Writer from "./Pages/dashboard/Writer";
import Page404 from "./Components/Error/404/Page404";
import RequireBack from "./Pages/website/Auth/RequireBack";
import Categories from "./Pages/dashboard/Categories/Categories";
import AddCategory from "./Pages/dashboard/Categories/AddCategory";
import EditCategory from "./Pages/dashboard/Categories/EditCategory";
import Products from "./Pages/dashboard/Products/Products";
import AddProduct from "./Pages/dashboard/Products/AddProduct";
import EditProduct from "./Pages/dashboard/Products/EditProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<RequireBack />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/*" element={<Page404 />} />

        <Route element={<RequireAuth allowedRole={["1995", "1996", "1999"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth allowedRole={["1995"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<Edituser />} />
              <Route path="user/add" element={<AddUser />} />
            </Route>
            <Route element={<RequireAuth allowedRole={["1995", "1999"]} />}>
              {/* categories */}
              <Route path="categories" element={<Categories />} />
              <Route path="categories/:id" element={<EditCategory />} />
              <Route path="category/add" element={<AddCategory />} />
              {/* Products */}
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<EditProduct />} />
              <Route path="product/add" element={<AddProduct />} />
            </Route>
            <Route element={<RequireAuth allowedRole={["1995", "1996"]} />}>
              <Route path="writer" element={<Writer />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
