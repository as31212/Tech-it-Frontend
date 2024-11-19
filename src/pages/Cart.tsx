import { useEffect } from "react";
import useFetchUserCart from "../hooks/useFetchUserCart";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useLocation } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";

export const Cart: React.FC = () => {
  const { loading, error, fetchUserCart } = useFetchUserCart();
  const cart = useSelector((state: reduxStoreInterface) => state.cart);
  const userData = useSelector((state: reduxStoreInterface) => state.userData);
  const location = useLocation();

  useEffect(() => {
    if (userData.auth) {
      fetchUserCart();
      console.log("cart fetched",cart);
    }
  }, [userData, location, ]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 min-h-screen">
      {/* Cart Items Section */}
      <div className="flex flex-col w-2/3">
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
      <OrderSummary />
    </div>
  );
};
