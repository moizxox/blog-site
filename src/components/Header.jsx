import { TbMenuDeep } from "react-icons/tb";
import Menu from "./Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const navigate = useNavigate();
  return (
    <header className="p-5 sticky top-0 backdrop-blur-[8px] z-20">
      <section className="max-w-[1280px] p-5 mx-auto shadow-md rounded-lg bg-primary text-primaryLight flex items-center justify-between">
        <h3
          className="text-lg md:text-xl font-pacifico cursor-pointer"
          onClick={() => navigate("/")}
        >
          Bloggy
        </h3>
        <button onClick={handleMenu}>
          <TbMenuDeep size={30} />
        </button>
      </section>
      <Menu openMenu={openMenu} handleMenu={handleMenu} />
    </header>
  );
};

export default Header;
