import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetchOneProduct from "../hooks/useFetchOneProduct";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import useAddToCart from "../hooks/useAddToCart";
import { updateModalItem,toggleModal } from "../redux/slices/modalData";
import Loading from "../components/Loading";

export const ProductDetails: React.FC = () => {
  const { id: paramId } = useParams();
  const [id, setId] = useState<string>(paramId ?? "");
  const { loading, error, fetchProduct } = useFetchOneProduct();
  const product = useSelector((state: reduxStoreInterface) => state.product);
  const {addToLocalCart, addToUserCart } = useAddToCart();
  const dispatch = useDispatch();
  const userData = useSelector((state:reduxStoreInterface)=>state.userData);
  const token = useSelector((state:reduxStoreInterface)=>state.token);


  useEffect(() => {
    fetchProduct(`http://localhost:4005/products/get/${id}`);
  }, [id]);

  if (loading) return <Loading />;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">Error: {error}</div>
    );

  const renderStaticStars = () => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-yellow-500"
          >
            <path d="M12 17.27l5.18 3.73-1.64-6.91 5.18-4.29-6.9-.59L12 2 9.18 9.21l-6.9.59 5.18 4.29L6.82 21z" />
          </svg>
        ))}
        <span className="text-sm font-medium text-gray-600 ml-2">(5,000 Reviews)</span>
      </div>
    );
  };

  return (
    <div className="mx-auto p-6 h-screen">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Sidebar Images */}
        <div className="flex flex-col gap-4">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={product.mainImage}
              alt={`${product.name} ${index + 1}`}
              className="w-20 h-20 object-cover rounded-md shadow-md cursor-pointer"
            />
          ))}
        </div>

        {/* Main Image and Details */}
        <div className="flex-1 ">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          {renderStaticStars()}
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-2xl font-semibold text-gray-700 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {product.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
            <button onClick={()=>{
              addToUserCart(
                `http://localhost:4005/cart/add/${userData.id}`,
                token,
                id,
                1
              );
              dispatch(updateModalItem(id));
              dispatch(toggleModal());
            }} className="p-5 bg-blue-500 text-white font-bold rounded-2xl hover:brightness-75 duration-150 ease-in-out">Add To Cart</button>
          
        </div>
      </div>
    </div>
  );
};
