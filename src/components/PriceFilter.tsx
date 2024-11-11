import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { changeFilterNumber } from "../redux/slices/priceFilterSlice";

const PriceFilter: React.FC = () => {
    const priceRanges = [
        { string: "Under $20", filter: 20 },
        { string: "Under $50", filter: 50 },
        { string: "Under $100", filter: 100 },
        { string: "Under $200", filter: 200 },
        { string: "Under $500", filter: 500 },
        { string: "Under $1000", filter: 1000 },
        { string: "Under $2000", filter: 2000 },
        { string: "Under $3000", filter: 3000 },
        { string: "All", filter: 1000000 }
    ];

    const dispatch = useDispatch();

    const changePrice = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFilterNumber(Number(e.target.value)));
    };


    return (
        <div>
            {priceRanges.map((el) => (
                <div key={el.filter}>
                    <input
                        type="radio"
                        onChange={changePrice}
                        value={el.filter}
                        name="price-filter-group"
                        id={el.string}
                    />
                    <label htmlFor={el.string}>{el.string}</label>
                </div>
            ))}
        </div>
    );
};

export default PriceFilter;
