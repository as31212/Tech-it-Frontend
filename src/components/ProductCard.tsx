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
    <Link to={_id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-4 w-80">

      <img
        src={mainImage}
        alt={name}
        className="w-full h-48 object-cover"
      />

 
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-lg font-bold text-green-600 mb-2">${price.toFixed(2)}</p>
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
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
    </Link>
  );
};

export default ProductCard;
