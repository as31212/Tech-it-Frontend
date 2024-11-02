import { useEffect } from "react";
import useFetchUserCart from "../hooks/useFetchUserCart";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useLocation } from "react-router-dom";
import useCheckout from "../hooks/useCheckout";

export const Cart: React.FC = () => {
  const { loading, error, fetchUserCart } = useFetchUserCart();
  const cart = useSelector((state: reduxStoreInterface) => state.cart);
  const userData = useSelector((state: reduxStoreInterface) => state.userData);
  const { salesTax, findOriginalPrice, findTotalPrice } = useCheckout();
  const location = useLocation();

  useEffect(() => {
    if (userData.auth) {
      fetchUserCart();
      console.log("fetch Cart");
    }
  }, [userData, location]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4">
      {/* Cart Items Section */}
      <div className="flex-1 lg:flex-[2]">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        {loading && <p>Loading...</p>}
        {cart.length > 0 ? (
          cart.map((el) => (
            <CartCard
              key={el.productId._id}
              productId={el.productId._id}
              price={el.productId.price}
              name={el.productId.name}
              mainImage={el.productId.mainImage}
              quantity={el.quantity}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        {error && <p className="text-red-400 mt-2">{error}</p>}
      </div>

      {/* Order Summary Section  */}
      <div className="flex-1 lg:flex-[1] border rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Order Summary</h2>
        <hr className="my-4" />
        <div className="space-y-2">
          <p className="flex justify-between">
            <span>Original Price</span>
            <span>${findOriginalPrice().toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Savings</span>
            <span className="text-red-600">- $585.00</span>
          </p>
          <p className="flex justify-between">
            <span>Store Pickup</span>
            <span className="text-green-600">FREE</span>
          </p>
          <p className="flex justify-between">
            <span>Delivery</span>
            <span>$29.99</span>
          </p>
          <p className="flex justify-between">
            <span>Estimated Sales Tax</span>
            <span>${salesTax}</span>
          </p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${findTotalPrice()}</span>
        </div>
        <button className="mt-6 w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Checkout
        </button>
        <button className="mt-4 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center">
          PayPal Checkout
        </button>
      </div>
    </div>
  );
};
