import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/SH-logo.png";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false); // Function to close the menu

  const mobileMenu = (
    <div className="lg:hidden block absolute top-16 w-full left-0 bg-slate-900 transition ease-in-out duration-300">
      <ul className="text-center text-xl p-10">
        {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
          <Link
            key={item}
            spy={true}
            smooth={true}
            to={item}
            onClick={closeMenu} // Close menu on item click
          >
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between items-center z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <span className="cursor-pointer text-3xl font-bold">
            <img className="responsive-img" src={logo} alt="SH logo" />
          </span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <ul className="flex gap-8 mr-16 text-[18px]">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <Link key={item} spy={true} smooth={true} to={item}>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    {item}
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes size={30} /> : <CiMenuFries size={30} />}
        </button>
        {click && mobileMenu}
      </div>
    </nav>
  );
};

export default Nav;
