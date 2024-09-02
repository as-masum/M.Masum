// import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import {FaTwitter} from "react-icons/fa"
// import {FaLinkedin} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0">
        <a href="#">
          <h1 className=" text-3xl font-bold underline">M. Másum</h1>
        </a>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/as-masum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/as-masum"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaGithub />
        </a>
        <a
          // href="https://www.linkedin.com/in/as-masum"
          // target="_blank"
          // rel="noopener noreferrer"
        >
        <FaInstagram />
        </a>
        {/* <a
          href="https://www.linkedin.com/in/as-masum"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaTwitter />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
