import { useDispatch, useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useEffect } from "react";
import { incrementPage, decrementPage, setPage } from "../redux/slices/productFilters";

const Pagination: React.FC = () => {
    const productData = useSelector((state: reduxStoreInterface) => state.productData);
    const totalPages = productData.meta.totalPages;
    const filters = useSelector((state: reduxStoreInterface) => state.productFilters);
    const currentPage = filters.page;
    const dispatch = useDispatch();

    // todo figure out a way to reset the page state to 1 when a filter is chnaged

    useEffect(() => {
        window.scrollTo({
            top: 0 
        });
    }, [currentPage]);

   
    const renderPageNumbers = () => {
        return Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
                <div
                    key={index}
                    onClick={() => dispatch(setPage(pageNumber))} // Update current page
                    className={`rounded-full w-8 h-8 flex items-center justify-center font-medium text-xs cursor-pointer transition-all duration-300 ${
                        currentPage === pageNumber
                            ? "bg-blue-700 text-white scale-105"
                            : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
                    }`}
                >
                    {pageNumber}
                </div>
            );
        });
    };

    return (
        <div className="flex items-center justify-center gap-3 mt-5">
            {/* Decrement Button */}
            <button
                onClick={() => dispatch(decrementPage())}
                className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-500 text-white font-medium text-sm hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
                disabled={currentPage === 1}
            >
                &lt;
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">{renderPageNumbers()}</div>

            {/* Increment Button */}
            <button
                onClick={() => dispatch(incrementPage(totalPages))} // Prevent exceeding total pages
                className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-500 text-white font-medium text-sm hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
