import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetchOneProduct from "../hooks/useFetchOneProduct";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import useAddToCart from "../hooks/useAddToCart";
import { updateModalItem, toggleModal } from "../redux/slices/modalData";
import Loading from "../components/Loading";
import ProductImgCarousel from "../components/ProductImgCarousel";

export const ProductDetails: React.FC = () => {
  const { id: paramId } = useParams();
  const [id, setId] = useState<string>(paramId ?? "");
  const { loading, error, fetchProduct } = useFetchOneProduct();
  const product = useSelector((state: reduxStoreInterface) => state.product);
  const { addToLocalCart, addToUserCart } = useAddToCart();
  const dispatch = useDispatch();
  const userData = useSelector((state: reduxStoreInterface) => state.userData);
  const token = useSelector((state: reduxStoreInterface) => state.token);

  useEffect(() => {
    fetchProduct(`http://localhost:4005/products/get/${id}`);
  }, [id]);

  if (loading) return <Loading />;
  if (error)
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen w-screen flex justify-center p-5">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Sidebar Images */}
          <ProductImgCarousel
            images={[
              product.mainImage,
              product.mainImage,
              product.mainImage,
              product.mainImage,
            ]}
          />
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
            <button
              onClick={() => {
                addToUserCart(
                  `http://localhost:4005/cart/add/${userData.id}`,
                  token,
                  id,
                  1
                );
                if (userData.auth) {
                  dispatch(updateModalItem(id));
                  dispatch(toggleModal());
                }
              }}
              className="p-5 bg-blue-500 text-white font-bold rounded-2xl hover:brightness-75 duration-150 ease-in-out"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
