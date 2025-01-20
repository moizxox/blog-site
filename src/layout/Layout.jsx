import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="px-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
