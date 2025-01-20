import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import Blogs from "./pages/blogs/BlogListing";
import SingleBlog from "./pages/blogs/SingleBlog";
import AddEditBlogs from "./pages/blogs/AddEditBlogs";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="single-blog" element={<SingleBlog />} />
          <Route path="add-blog" element={<AddEditBlogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
