import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useFetchProducts } from "../hooks/useFetchAllProducts";
import ProductFilters from "../components/ProductFilters";
import ProductCard from "../components/ProductCard";
import { productDataInterface } from "../interfaces/productDataInterface";
import Loading from "../components/Loading";
import { Outlet, useParams } from "react-router-dom";
import { useSyncQueryParams } from "../hooks/useSyncQueryParams";
import { useInitializeFilter } from "../hooks/useInitializeFilter";
import Pagination from "../components/Pagination";
import { FourOFour,NoItemFound } from "../components/Error";

export const Products: React.FC = () => {
  const { id } = useParams(); // Check if the route has an :id parameter
  const productData: productDataInterface = useSelector(
    (state: reduxStoreInterface) => state.productData
  );
  const filter = useSelector((state: reduxStoreInterface) => state.productFilters);

  // Initialize filters from query strings
  useInitializeFilter();

  // Sync query strings with the filter state
  useSyncQueryParams(filter);

  // Fetch products based on current filters
  const { loading, error } = useFetchProducts();

  // Render only the Outlet if the route contains an :id parameter
  if (id) {
    return <Outlet />;
  }

  return (
    <div className="p-5">
      <div className="flex">
        {/* Filters and Sorting */}

          <ProductFilters />


        {/* Products */}
        <div id="pagination-products">
          <div
            id="products-container"
            className=" flex flex-wrap justify-center gap-5 w-3/4"
          >
            {loading && <Loading />}
            {error && <p className="text-red-600">{error}</p>}
            {productData.data.length > 1 ? productData.data.map((el) => (
              <ProductCard
                key={el._id}
                _id={el._id}
                name={el.name}
                description={el.description}
                price={el.price}
                mainImage={el.mainImage}
                categories={el.categories}
              />
            )): <NoItemFound/>}
          </div>
          <Pagination/>
        </div>
        
      </div>
    </div>
  );
};
