import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";

const CartEmpty: React.FC = () => {
    const cartData = useSelector((state:reduxStoreInterface)=>state.cart);
    const userData = useSelector((state: reduxStoreInterface) => state.userData);

  return (
    <div className={`flex flex-col items-center justify-center h-screen w-full  text-center p-4 ${cartData.length >= 1 || !userData.auth ? "hidden" : ""}`}>
      <img src="cart.png" alt="Empty Cart Icon" className="w-40 mb-6" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Your cart is empty
      </h2>
      <p className="text-lg text-gray-600">
        <Link
          to="/products"
          className="text-blue-500 font-semibold hover:underline"
        >
          Browse products
        </Link>{" "}
        to add items to your cart.
      </p>
    </div>
  );
};

export default CartEmpty;
