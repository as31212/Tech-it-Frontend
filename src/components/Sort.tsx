import { useDispatch, useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { setSort } from "../redux/slices/productFilters";
import { ChangeEvent, useEffect } from "react";

const Sort: React.FC = () => {
    const filters = useSelector((state: reduxStoreInterface) => state.productFilters);
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSort(e.target.value));
    };

    useEffect(() => {
        console.log(filters.sort);
    }, [filters]);

    return (
        <div className="bg-gray-100 rounded-lg p-4 shadow-md flex items-center gap-2">
            <select
                onChange={handleChange}
                id="sort"
                className="block w-[90%] font-bold bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
            >
                <option value="">For You</option>
                <option value="-price">Price (High to Low)</option>
                <option value="price">Price (Low to High)</option>
            </select>
        </div>
    );
};

export default Sort;
