import { productCardInterface } from "../interfaces/productCardInterace";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import SmallLoading from "./SmallLoading";

const ProductCard: React.FC<productCardInterface> = ({
  _id,
  name,
  price,
  description,
  categories,
  mainImage,
}) => {
  const {loading,error,addToLocalCart,addToUserCart} = useAddToCart();
  const userData = useSelector((state:reduxStoreInterface)=>state.userData);
  const token = useSelector((state:reduxStoreInterface)=>state.token);
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform m-4 w-80 h-[500px] flex flex-col justify-between"
    >
      <div className="flex flex-col group">
        <img
        onClick={()=>{navigate(_id)}}
          src={mainImage}
          alt={name}
          className="w-full h-52 object-cover"
        />

        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold mb-2 min-h-[48px] group-hover:underline">
            {name}
          </h2>
          <p className="text-lg font-bold text-green-600 mb-2">${price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4 flex-grow">{description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-2">
        <button onClick={userData.auth ? ()=>{addToUserCart(`http://localhost:4005/cart/add/${userData.id}`,token,_id,1)} : ()=>{addToLocalCart(_id)}} className={`p-2 border-2 border-blue-500 rounded-md w-full font-bold my-2 mx-auto hover:text-white hover:bg-blue-500 ease-in-out duration-300 ${loading ? "opacity-50" : ""}`}>
          {loading ? (<SmallLoading/>) : ""}Add To Cart
        </button>
        {error && (<><p className="text-red-500">{error}</p></>)}
      </div>
    </div>
  );
};

export default ProductCard;

//todo a lot must be done here, 1.resolve the issue with the small loading animation 2.ensure some way of the user being made aware that an item ha been added to the cart potentially a side bar for user cart is displayed after item is added to cart. 3.fix way navigate works ensure that when you click on the name, img or white space in the div, that it navigates you to the product details page
