import { useDispatch, useSelector } from "react-redux";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import Sort from "./Sort";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { toggleMobile } from "../redux/slices/productFilters";
import { motion } from "framer-motion";

const ProductFilters: React.FC = () => {
  return (
    <>
      <DesktopProductFilter />
      <MobileProductFilters />
    </>
  );
};

const DesktopProductFilter: React.FC = () => {
  return (
      <div
        className="flex flex-col gap-5 p-6 bg-white rounded-lg shadow-lg sticky top-24 h-[85vh] w-fit overflow-y-scroll desktop-filter "
        id="product-filters"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Filters
        </h2>
        <Sort />
        <CategoryFilter />
        <PriceFilter />
      </div>
  );
};

const MobileProductFilters: React.FC = () => {
  const mobileFilterToggle = useSelector(
    (state: reduxStoreInterface) => state.productFilters.mobileToggle
  );

  const dispatch = useDispatch();

  const variants = {
    hidden: {
      x: "-100%",
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
      {mobileFilterToggle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => dispatch(toggleMobile())}
        ></div>
      )}
      <div>
        <button
        id="mobile-filter-toggle"
          onClick={() => dispatch(toggleMobile())}
          className="border-2 hidden p-2 rounded-xl text-gray-500 hover:text-blue-500 hover:border-blue-400 duration-150 ease-in-out"
        >
          Sort & Filters
        </button>
        <motion.div
          className={` p-6 bg-white rounded-lg shadow-lg absolute z-30 top-0 left-0 h-screen w-[450px] overflow-y-scroll ${
            mobileFilterToggle ? "flex flex-col gap-5" : "hidden"
          }`}
          id="product-filters"
          initial="hidden"
          animate={mobileFilterToggle ? "visible" : "hidden"}
          exit="hidden"
          variants={variants}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Filters
          </h2>
          <Sort />
          <CategoryFilter />
          <PriceFilter />
        </motion.div>
      </div>
    </>
  );
};

export default ProductFilters;
