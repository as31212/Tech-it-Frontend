import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import Sort from "./Sort";

const variants = {
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

export const ProductFilters: React.FC = () => {
  return (
    <div>
      <button className="border-2 p-2 rounded-xl text-gray-500 hover:text-blue-500 hover:border-blue-400 duration-150 ease-in-out">Sort & Filters</button>
      <div
        className="flex flex-col gap-5 p-6 bg-white rounded-lg shadow-lg sticky top-24 h-[85vh] w-[450px] overflow-y-scroll "
        id="product-filters"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Filters</h2>
        <Sort/>
        <CategoryFilter />
        <PriceFilter />
      </div>
    </div>
  );
};

export const MobileProductFilters: React.FC = () =>{
  return(
    <div>
    <button className="border-2 p-2 rounded-xl text-gray-500 hover:text-blue-500 hover:border-blue-400 duration-150 ease-in-out">Sort & Filters</button>
    <div
      className="flex flex-col gap-5 p-6 bg-white rounded-lg shadow-lg sticky top-24 h-[85vh] w-[450px] overflow-y-scroll "
      id="product-filters"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Filters</h2>
      <Sort/>
      <CategoryFilter />
      <PriceFilter />
    </div>
  </div>
  );
}


