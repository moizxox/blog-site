import { TfiClose } from "react-icons/tfi";
import navigation from "./navigation";
import { useNavigate } from "react-router-dom";

const Menu = ({ openMenu, handleMenu }) => {
  const navigate = useNavigate();
  const handleNavigate = (href) => {
    navigate(href);
    handleMenu();
  };
  return (
    <section
      className={`fixed top-0 right-0 bg-primary w-[40%] min-w-[320px] transition-all duration-300 transform ${
        openMenu ? "block" : "hidden"
      } h-screen text-primaryLight`}
    >
      <div className="flex flex-col gap-10 relative pt-12  px-6">
        <h3
          className="text-xl md:text-3xl text-center font-pacifico cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          Bloggy
        </h3>
        <ul className="flex flex-col gap-8 items-center text-2xl uppercase">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer group"
              onClick={() => handleNavigate(item.href)}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryLight group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
        <button onClick={handleMenu}>
          <TfiClose size={30} className="absolute top-5 right-5" />
        </button>
      </div>
    </section>
  );
};

export default Menu;
