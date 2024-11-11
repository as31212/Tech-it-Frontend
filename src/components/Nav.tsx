import { PiShoppingCartThin } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useState } from "react";

export const Nav: React.FC = () => {
  const { logoutFunc } = useLogout();
  const location = useLocation();
  const userData = useSelector((state: reduxStoreInterface) => state.userData);
  const [hovering, setHovering] = useState<boolean>(false);

  return (
    <nav
      className={`flex justify-between items-center p-4 sticky top-0 z-10 bg-white  text-gray-500 font-bold shadow-md`}
    >
      <Link to="/">
        <img
          className="h-12 w-auto"
          src="tech-it-cropped-logo.png"
          alt="Tech-IT Logo"
        />
      </Link>
      <ul className="flex space-x-32">
        <li>
          <Link to="/About">ABOUT US</Link>
        </li>
        <li>
          <Link to="/Products">PRODUCTS</Link>
        </li>
        <li
          className="px-5 text-center"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <Link to="/Profile">PROFILE</Link>
          <ul
            className={`flex flex-col border-2 absolute bg-blue-500 text-black ${
              hovering ? "" : "hidden"
            }`}
          >
            {!userData.auth ? (
              <Link
                className="text-white hover:text-blue-500 hover:bg-white px-5 py-2 duration-300 ease-in-out"
                to="/Login"
              >
                LOGIN
              </Link>
            ) : (
              <li
                className="text-white hover:text-blue-500 hover:bg-white px-5 py-2 duration-300 ease-in-out"
                onClick={() => logoutFunc()}
              >
                LOGOUT
              </li>
            )}
            <Link
              to="/Settings"
              className="text-white hover:text-blue-500 hover:bg-white px-5 py-2 duration-300 ease-in-out"
            >
              SETTINGS
            </Link>
          </ul>
        </li>
        {userData.role === "admin" ? (
          <>
            <li>ADMIN</li>
          </>
        ) : (
          ""
        )}
      </ul>
      <Link to="/Cart">
        <PiShoppingCartThin className=" text-2xl text-blue-500" />
      </Link>
    </nav>
  );
};
