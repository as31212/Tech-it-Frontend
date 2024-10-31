import { useEffect } from "react";
import useFetchUserCart from "../hooks/useFetchUserCart";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";

export const Cart: React.FC = () => {
  const { loading, error, fetchUserCart } = useFetchUserCart();
  const cart = useSelector((state: reduxStoreInterface) => state.cart);
  const userData = useSelector((state: reduxStoreInterface) => state.userData);

  useEffect(() => {
    if (userData.auth) {
      fetchUserCart();
      console.log("fetch Cart");
      
    }
  }, [userData.auth]);

  return (
    <>
      <h2>Cart</h2>
      {loading && <p>Loading...</p>}
      {cart.length > 0 ? (
        cart.map((el) => (
          <CartCard
            key={el.productId._id} // Ensure a unique key
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
      {error && <p className="text-red-400">{error}</p>}
    </>
  );
};
