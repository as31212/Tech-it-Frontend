import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetchOneProduct from "../hooks/useFetchOneProduct";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import useAddToCart from "../hooks/useAddToCart";
import { updateModalItem, toggleModal } from "../redux/slices/modalData";
import Loading from "../components/Loading";
import ProductImgCarousel from "../components/ProductImgCarousel";
import useStringMutation from "../hooks/useStringMutation";
import { Stars } from "../components/Stars";
import { IoCart } from "react-icons/io5";





export const ProductDetails: React.FC = () => {
  const { id: paramId } = useParams();
  const [id, setId] = useState<string>(paramId ?? "");
  const { loading, error, fetchProduct } = useFetchOneProduct();
  const product = useSelector((state: reduxStoreInterface) => state.product);
  const { addToLocalCart, addToUserCart } = useAddToCart();
  const dispatch = useDispatch();
  const userData = useSelector((state: reduxStoreInterface) => state.userData);
  const token = useSelector((state: reduxStoreInterface) => state.token);

  const {upperCaseFirstCharAll} = useStringMutation();

  useEffect(() => {
    fetchProduct(`http://localhost:4005/products/get/${id}`);
  }, [id]);

  if (loading) return <Loading />;
  if (error)
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen w-screen flex justify-center p-5">
      <div className="mx-auto mt-28">
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
          <div className="flex flex-col gap-5 mx-auto">
            <h2 className="text-3xl font-bold mb-4">{product.name ? upperCaseFirstCharAll(product.name) : ""}</h2> 
            <p className="text-gray-700">Model: 64795 SKU: 6396205</p>
            <div className="flex gap-2" id="stars">
              <Stars amount={4}/>
              <p className="text-blue-600 font-bold relative bottom-1">4.7</p>
            </div>
            <div id="product-detail-price" className="flex gap-3">
              <p className="text-2xl font-bold text-gray-800 mb-4">
                ${product.price.toFixed(2)}
              </p>
            {/* Or Section */}
              <div>
                <div className="border-[1px] h-[30px] w-0 mx-auto border-gray-400"></div>
                <p>Or</p>
                <div className="border-[1px] h-[30px] w-0 mx-auto border-gray-400"></div>
              </div>
              
              <div>
              <p className="text-[12px]">4 payments starting at</p>
                <p className="text-2xl font-bold text-gray-800 mb-4">
                  ${(product.price / 4).toFixed(2)}
                </p>
                <p className="text-blue-700 hover:underline cursor-not-allowed font-semibold">Learn More &gt; </p>
              </div>
              
            </div>
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
              className="p-5 bg-blue-500 text-xl text-white font-bold rounded-2xl hover:brightness-75 duration-150 ease-in-out flex justify-center"
            >
              <IoCart className="relative top-1 text-2xl"/>
              Add To Cart
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
