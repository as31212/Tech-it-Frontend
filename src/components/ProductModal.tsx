import { useDispatch, useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { clearModal } from "../redux/slices/modalData";
import useFetchOneProduct from "../hooks/useFetchOneProduct";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

const ProductModal: React.FC = () => {
  const modalData = useSelector(
    (state: reduxStoreInterface) => state.modalData
  );
  const product = useSelector((state: reduxStoreInterface) => state.product);
  const { loading, error, fetchProduct } = useFetchOneProduct();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = () => {
    return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  };

  useEffect(() => {
    if (modalData.modalItem) {
      fetchProduct(`https://tech-it-backend.onrender.com/products/get/${modalData.modalItem}`);
    }
  }, [modalData.modalItem]);

  useEffect(() => {
    if (modalData.isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalData.isActive]);

  const modalVariants = {
    hidden: {
      x: "100%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      {/* Overlay with decreased brightness */}
      {modalData.isActive && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => dispatch(clearModal())}
        ></div>
      )}

      {/* Modal */}
      <motion.div
        className={`fixed top-0 right-0 z-30 bg-white shadow-lg h-full flex flex-col rounded-lg  ${isMobile() ? "w-[100vw]" : "min-w-[500px] w-[30vw]"}`}
        initial="hidden"
        animate={modalData.isActive ? "visible" : "hidden"}
        exit="hidden"
        variants={modalVariants}
      >
        {/* Sticky Top Section */}
        <div className="border-b-2 pb-2 mb-2 flex justify-between sticky top-0 bg-white z-10 p-2">
          <p
            className="hover:underline cursor-pointer text-blue-700 flex gap-2"
            onClick={() => dispatch(clearModal())}
          >
            <FaAngleLeft className="relative top-1" />
            Continue Shopping
          </p>
          <p
            className="hover:underline cursor-pointer text-blue-700 flex gap-2"
            onClick={() => {
              dispatch(clearModal());
              navigate("/Cart");
            }}
          >
            Go to cart
            <IoCartOutline className="relative top-1" />
          </p>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-sm text-gray-500">Added to cart</p>
          <div className="mt-4">
            {loading ? (
              <p>Loading product...</p>
            ) : error ? (
              <p>Error fetching product</p>
            ) : (
              <div>
                <img
                  src={product.mainImage}
                  alt={product.name || "Product"}
                  className="rounded-lg shadow-md w-[40%] mx-auto"
                />
                <p className="text-center mt-2 text-lg font-semibold">
                  ${product.price}
                </p>
              </div>
            )}
          </div>

          {/* Protection Plan Section */}
          <div className="mt-6 border-t-2 pt-4">
            <h3 className="text-lg font-semibold mb-2">Add a Protection Plan</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="plan1"
                  name="protectionPlan"
                  value="basic"
                />
                <label htmlFor="plan1" className="text-sm">
                  Basic Plan - 1 Year ($5.99)
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="plan2"
                  name="protectionPlan"
                  value="premium"
                />
                <label htmlFor="plan2" className="text-sm">
                  Premium Plan - 2 Years ($9.99)
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Button */}
        <div className="p-4 bg-white shadow-inner sticky bottom-0">
          <button
            onClick={() => {
              navigate("/Cart");
              dispatch(clearModal());
            }}
            className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:brightness-75 ease-in-out duration-150"
          >
            Go To Cart
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ProductModal;
