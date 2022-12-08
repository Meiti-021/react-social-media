import { RiHome2Fill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import "./nav.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/" className="nav-btn">
          <RiHome2Fill />
        </Link>
        <Link to="/post" className="nav-btn nav-btn__middle">
          <IoMdAddCircle />
        </Link>
        <Link to="/profile" className="nav-btn ">
          <MdAccountCircle />
        </Link>
      </nav>
    </>
  );
};
