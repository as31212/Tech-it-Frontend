import { useEffect } from "react";
import useFetchCategories from "../hooks/useFetchCategories";
import PriceFilter from "./PriceFilter";

const ProductFilters: React.FC = () => {
  const { error, loading, categories, fetchCategories } = useFetchCategories();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col" id="product-filters">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading categories</p>
      ) : (
        <div id="category-filter">
          {categories.map((el) => (
            <p key={el._id} className="font-bold">
              {el.name}
            </p>
          ))}
        </div>
      )}
      <div id="price-filter">
        <PriceFilter />
      </div>
    </div>
  );
};

export default ProductFilters;
