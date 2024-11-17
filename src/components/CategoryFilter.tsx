import { ChangeEvent, useEffect } from "react";
import useFetchCategories from "../hooks/useFetchCategories";
import { useDispatch, useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { toggleCategory } from "../redux/slices/productFilters";

const CategoryFilter: React.FC = () => {
  const { error, loading, categories } = useFetchCategories();
  const categoryFilter = useSelector(
    (state: reduxStoreInterface) => state.productFilters.categories
  );
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
   dispatch(toggleCategory(e.target.value));
  };

  return (
    <>
      {loading ? (
        <p className="text-gray-500 text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error loading categories</p>
      ) : (
        <div
          id="category-filter"
          className="flex flex-wrap gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
        >
          {categories.map((el) => (
            <div key={el._id} className="flex items-center space-x-2">
              <input
                checked={categoryFilter.includes(el.name)}
                onChange={handleChange}
                type="checkbox"
                value={el.name}
                name={`${el.name}-category`}
                id={`${el.name}-category`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={`${el.name}-category`}
                className="text-sm font-semibold text-gray-700"
              >
                {el.name}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryFilter;
