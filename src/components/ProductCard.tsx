import { productCardInterface } from "../interfaces/productCardInterace";


const ProductCard: React.FC<productCardInterface> = ({
  name,
  price,
  description,
  categories,
  mainImage,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-4 w-80">
      {/* Image Section */}
      <img
        src={mainImage}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Details Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-lg font-bold text-green-600 mb-2">${price.toFixed(2)}</p>
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Displaying categories */}
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
    </div>
  );
};

export default ProductCard;
