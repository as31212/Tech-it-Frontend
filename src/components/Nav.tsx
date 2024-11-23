import { PiShoppingCartThin } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Nav: React.FC = () => {
  return (
    <>
      <NormalNav />
      <HamburgerNav />
    </>
  );
};

const NormalNav: React.FC = () => {
  const { logoutFunc } = useLogout();
  const location = useLocation();
  const userData = useSelector((state: reduxStoreInterface) => state.userData);
  const [hovering, setHovering] = useState<boolean>(false);

  return (
    <nav
      id="nav"
      className={`flex justify-between items-center p-4 sticky top-0 z-10 bg-white  text-gray-500 font-bold shadow-md nav-norm `}
    >
      <Link className="" to="/">
        <img
          className="h-12 w-auto"
          src="tech-it-cropped-logo.png"
          alt="Tech-IT Logo"
        />
      </Link>
      <ul className="flex space-x-32">
        <li>
          <Link className="" to="/About">ABOUT US</Link>
        </li>
        <li>
          <Link className="" to="/Products">PRODUCTS</Link>
        </li>
        <li
          className="px-5 text-center"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {userData.auth ? (
            <div>
              <Link className="" to="/Profile">
                PROFILE
                <FaChevronDown
                  className={`inline relative bottom-[1px] ml-1 ${
                    hovering ? "rotate-arrow-true" : "rotate-arrow-false"
                  }`}
                />
              </Link>
              <ul
                className={`flex flex-col border-2 absolute bg-blue-500 text-black ${
                  hovering ? "" : "hidden"
                }`}
              >
                <li
                  className="text-gray-200 hover:text-blue-500 hover:bg-white px-5 py-2 duration-300 ease-in-out"
                  onClick={() => logoutFunc()}
                >
                  LOGOUT
                </li>

                <Link
                  to="/Settings"
                  className="text-white hover:text-blue-500 hover:bg-white px-5 py-2 duration-300 ease-in-out"
                >
                  SETTINGS
                </Link>
              </ul>
            </div>
          ) : (
            <Link className="" to="/Login">LOGIN</Link>
          )}
        </li>
      </ul>
      <Link className="" to="/Cart">
        <PiShoppingCartThin className=" text-2xl text-blue-500" />
      </Link>
    </nav>
  );
};

const HamburgerNav: React.FC = () => {
  const { logoutFunc } = useLogout();
  const location = useLocation();
  const userData = useSelector((state: reduxStoreInterface) => state.userData);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // State for hamburger menu

  return (
    <nav
      id="nav"
      className={`flex justify-between items-center p-4 sticky top-0 z-10 bg-white text-gray-500 font-bold shadow-md nav-ham`}
    >
      {/* Logo */}
      <Link className="" to="/" onClick={()=> setMenuOpen(false)}>
        <img
          className="h-12 w-auto"
          src="tech-it-cropped-logo.png"
          alt="Tech-IT Logo"
        />
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Full Menu */}
      <motion.ul
        className={`flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-32 md:flex h-screen ${
          menuOpen
            ? "absolute top-full left-0 w-full bg-white p-4 shadow-md"
            : "hidden md:flex"
        }`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: menuOpen ? 1 : 1, x: menuOpen ? 0 : 1000 }}
        transition={{ duration: 0.5 }}
      >
        <li>
          <Link className="" to="/About" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link className="" to="/Products" onClick={() => setMenuOpen(false)}>
            PRODUCTS
          </Link>
        </li>
        {userData.auth ? (
          <>
            <li>
              <Link className="" to="/Profile" onClick={() => setMenuOpen(false)}>
                PROFILE
              </Link>
            </li>
            <li>
              <button
                className="text-left px-5 py-2 duration-300 ease-in-out"
                onClick={() => {
                  logoutFunc();
                  setMenuOpen(false);
                }}
              >
                LOGOUT
              </button>
            </li>
            <li>
              <Link
                to="/Settings"
                className="px-5 py-2 duration-300 ease-in-out"
                onClick={() => setMenuOpen(false)}
              >
                SETTINGS
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link className="" to="/Login" onClick={() => setMenuOpen(false)}>
              LOGIN
            </Link>
          </li>
        )}
        <li>
              <Link className="" to="/Cart" onClick={() => setMenuOpen(false)}>
                CART
              </Link>
            </li>
      </motion.ul>

      {/* Cart Icon */}
      
    </nav>
  );
};

export default Nav;
