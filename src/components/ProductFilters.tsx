import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import Sort from "./Sort";

const ProductFilters: React.FC = () => {
  return (
    <div
      className="flex flex-col gap-5 p-6 bg-white rounded-lg shadow-lg sticky top-24 h-[85vh] w-[450px] overflow-y-scroll "
      id="product-filters"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Filters</h2>
      <Sort/>
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
};

export default ProductFilters;
