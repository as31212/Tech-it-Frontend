import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useState } from "react";

export const Nav: React.FC = () => {
  const {logout} = useLogout();
  return (
    <nav className="flex justify-between items-center p-4">
      <Link to="/">
        <img
          className="h-12 w-auto"
          src="tech-it-cropped-logo.png"
          alt="Tech-IT Logo"
        />
      </Link>
      <ul className="flex space-x-32">
        <li><Link to="/About">ABOUT US</Link></li>
        <li><Link to="/Products">PRODUCTS</Link></li>
        {localStorage.getItem("userData") ? <li className="hover:text-blue-400 hover:cursor-pointer" onClick={()=>logout()}>LOGOUT</li> : <li><Link to="/Login">LOGIN</Link></li>}
      </ul>
      <Link to="/Cart">
        <PiShoppingCartThin className="text-blue-400 text-2xl" />
      </Link>
    </nav>
  );
};
