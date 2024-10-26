import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetchOneProduct from "../hooks/useFetchOneProduct";
import { productDataInterface } from "../interfaces/productDataInterface";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import Loading from "../components/Loading";

export const ProductDetails: React.FC = () => {
  const { id: paramId } = useParams();
  const [id, setId] = useState<string>(paramId ?? "");
  const { loading, error, fetchProduct } = useFetchOneProduct();
  const product = useSelector((state: reduxStoreInterface) => state.product);

  useEffect(() => {
    fetchProduct(`http://localhost:4005/products/get/${id}`);
  }, [id]);

  if (loading) return <Loading/>
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img
          src={product.mainImage}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold mb-2">Additional Images</h3>
          <div className="flex gap-4 flex-wrap">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-24 h-24 object-cover rounded-md shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
