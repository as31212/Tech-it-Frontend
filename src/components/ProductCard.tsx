import { productCardInterface } from "../interfaces/productCardInterace";
import { Link } from "react-router-dom";

const ProductCard: React.FC<productCardInterface> = ({
  _id,
  name,
  price,
  description,
  categories,
  mainImage,
}) => {
  return (
    <Link
      to={_id}
      className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform m-4 w-80 h-[500px] flex flex-col justify-between"
    >
      <div className="flex flex-col">
        <img
          src={mainImage}
          alt={name}
          className="w-full h-52 object-cover"
        />

        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold mb-2 min-h-[48px]">{name}</h2>
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
      <button className="p-2 border-2 border-blue-500 rounded-md w-2/3 font-bold my-2 mx-auto hover:text-white hover:bg-blue-500 ease-in-out duration-300">
        Add To Cart
      </button>
    </Link>
  );
};

export default ProductCard;
