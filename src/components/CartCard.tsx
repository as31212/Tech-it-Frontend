import { ChangeEvent, useEffect, useState } from "react";
import { cartCardInterface } from "../interfaces/cartCardInterface";
import { Link } from "react-router-dom";
import useChangeQuantity from "../hooks/useChangeQuantity";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import useFetchUserCart from "../hooks/useFetchUserCart";
import useRemoveCartItem from "../hooks/useRemoveCartItem";
import { FaRegTrashAlt } from "react-icons/fa";

const CartCard: React.FC<cartCardInterface> = ({
  name,
  productId,
  price,
  mainImage,
  quantity,
}) => {
  const [localQuantity, setLocalQuantity] = useState<number>(quantity);
  const userData = useSelector((state: reduxStoreInterface) => state.userData);
  const { changeQuantity, error, loading } = useChangeQuantity(); //todo figure out how you want to display quantity change loads
  const {removeItem} = useRemoveCartItem();

  // Function to handle quantity change
  const handleQuantityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLocalQuantity(Number(e.target.value));
    changeQuantity(
      `http://localhost:4005/cart/quantity/${userData.id}`,
      productId,
      Number(e.target.value)
    );
  };




  return (
    <div className="flex items-center justify-between border p-4 shadow-md w-full">
      <img
        className="h-44 object-cover rounded-md"
        src={mainImage}
        alt={`${name} image`}
      />
      <div className="flex-1 ml-4">
        <Link
          to={`/Products/${productId}`}
          className="text-lg font-semibold hover:underline"
        >
          {name}
        </Link>
        <p className="text-sm text-green-400 font-bold">${price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <select
          name="quantity"
          value={localQuantity}
          onChange={handleQuantityChange}
          className="border rounded-md px-4 py-2 text-md focus:outline"
        >
          {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <FaRegTrashAlt className="text-red-500 text-xl hover:opacity-80" onClick={()=>{removeItem(productId)}} />
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>
    </div>
  );
};

export default CartCard;
