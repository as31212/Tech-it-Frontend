import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../redux/slices/productFilters";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";

const PriceFilter: React.FC = () => {
    const priceRanges = [
        { string: "All", filter: null }, // 'All' should have a null value
        { string: "Under $20", filter: 20 },
        { string: "Under $50", filter: 50 },
        { string: "Under $100", filter: 100 },
        { string: "Under $200", filter: 200 },
        { string: "Under $500", filter: 500 },
        { string: "Under $1000", filter: 1000 },
        { string: "Under $2000", filter: 2000 },
        { string: "Under $3000", filter: 3000 },
    ];

    const dispatch = useDispatch();
    const priceFilter = useSelector((state: reduxStoreInterface) => state.productFilters.price);

    const changePrice = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedPrice = e.target.value === 'null' ? null : Number(e.target.value);
        
        // Dispatching the new price value, even if it is null (resetting)
        dispatch(setPrice(selectedPrice));
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Price Range</h3>
            {priceRanges.map((el) => (
                <div key={el.filter} className="flex items-center space-x-2">
                    <input
                        checked={priceFilter === el.filter}
                        type="radio"
                        onChange={changePrice}
                        value={el.filter === null ? "null" : el.filter} // Set the value as 'null' for the 'All' option
                        name="price-filter-group"
                        id={el.string}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={el.string} className="text-sm text-gray-700 font-medium">
                        {el.string}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default PriceFilter;
