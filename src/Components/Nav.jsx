import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const menuItems = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-slate-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-20">
        <div className="flex items-center">
          <span className="text-3xl font-bold cursor-pointer">
            <img
              className="h-12 w-12 object-contain"
              src="/images/logo.png"
              alt="SH logo"
            />
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden font-sans lg:flex items-center gap-8 text-[18px]">
          {menuItems.map((item) => (
            <Link
              key={item}
              spy={true}
              smooth={true}
              to={item}
              offset={-70}
              className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden transition focus:outline-none"
          onClick={handleClick}
          aria-label="Toggle menu"
        >
          {click ? <FaTimes size={30} /> : <CiMenuFries size={30} />}
        </button>

        {/* Mobile Menu */}
        {click && (
          <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col items-center justify-center z-10 transition ease-in-out duration-300">
            <ul className="text-center font-sans text-xl space-y-10">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  spy={true}
                  smooth={true}
                  to={item}
                  offset={-70}
                  className="block py-2 cursor-pointer hover:text-fuchsia-600"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
