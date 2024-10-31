import { ChangeEvent, useState } from "react";
import { cartCardInterface } from "../interfaces/cartCardInterface";
import { Link } from "react-router-dom";
import useChangeQuantity from "../hooks/useChangeQuantity";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";

const CartCard: React.FC<cartCardInterface> = ({
  name,
  productId,
  price,
  mainImage,
  quantity,
}) => {
  const [localQuantity, setLocalQuantity] = useState<number>(quantity);
  const userData = useSelector((state: reduxStoreInterface) => state.userData);
  const { changeQuantity, error, loading } = useChangeQuantity();

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
    <div className="flex items-center justify-between border rounded-md p-4 shadow-md w-full max-w-lg">
      <img
        className="w-16 h-16 object-cover rounded-md"
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
        <p className="text-sm text-gray-600">${price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <select
          name="quantity"
          value={localQuantity}
          onChange={handleQuantityChange}
          className="border rounded-md px-2 py-1 text-sm"
        >
          {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>
    </div>
  );
};

export default CartCard;
