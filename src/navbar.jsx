import { RiHome2Fill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import "./nav.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <button className="nav-btn">
          <RiHome2Fill />
        </button>
        <button className="nav-btn nav-btn__middle">
          <IoMdAddCircle />
        </button>
        <button className="nav-btn ">
          <MdAccountCircle />
        </button>
      </nav>
    </>
  );
};
