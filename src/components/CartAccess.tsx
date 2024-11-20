import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";

const CartAccess: React.FC = () => {
    const userData = useSelector((state:reduxStoreInterface)=>state.userData);

  return (
    <div className={`flex flex-col items-center justify-center h-screen w-[100vw]  text-center p-4 ${userData.auth ? "hidden":""}`}>
      <img src="cart.png" alt="Cart Icon" className="w-40 mb-6" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Please log in to access your cart
      </h2>
      <p className="text-lg text-gray-600">
        <Link
          to="/login"
          className="text-blue-500 font-semibold hover:underline"
        >
          Click here to log in
        </Link>{" "}
        or{" "}
        <Link
          to="/Register"
          className="text-blue-500 font-semibold hover:underline"
        >
          create an account
        </Link>
      </p>
    </div>
  );
};

export default CartAccess;
