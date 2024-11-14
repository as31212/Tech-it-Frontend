import { ChangeEvent, useEffect } from "react";
import useFetchCategories from "../hooks/useFetchCategories";
import { useDispatch } from "react-redux";
import { addCategoryToFilter,removeCategoryFromFilter } from "../redux/slices/productFilterSlice";

const CategoryFilter: React.FC = () => {
  const { error, loading, categories, fetchCategories } = useFetchCategories();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    if(e?.target.checked){
      dispatch(addCategoryToFilter(e.target.value))
    }
    else{
      dispatch(removeCategoryFromFilter(e.target.value));
    }
  }


  return (
    <>
      {loading ? (
        <p className="text-gray-500 text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error loading categories</p>
      ) : (
        <div id="category-filter" className="flex flex-wrap gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
          {categories.map((el) => (
            <div key={el._id} className="flex items-center space-x-2">
              <input
                onChange={handleChange}
                type="checkbox"
                value={el.name}
                name={`${el.name}-category`}
                id={`${el.name}-category`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={`${el.name}-category`} className="text-sm font-semibold text-gray-700">
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