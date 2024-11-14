import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useFetchProducts } from "../hooks/useFetchAllProducts";
import ProductFilters from "../components/ProductFilters";
import ProductCard from "../components/ProductCard";
import { productDataInterface } from "../interfaces/productDataInterface";
import Loading from "../components/Loading";
import { Outlet } from "react-router-dom";

export const Products: React.FC = () => {
  const productData: productDataInterface[] = useSelector(
    (state: reduxStoreInterface) => state.productData
  );
  const query = useSelector((state: reduxStoreInterface) => state.productQuery);
  const { loading, error, fetchData } = useFetchProducts();
  const navigate = useNavigate();
  const location = useLocation();
  const isProductDetail = location.pathname !== "/Products";

  useEffect(() => {
    // Update the URL to include the query parameters
    navigate(`/Products${query}`, { replace: true });
  }, [query, navigate]);

  useEffect(() => {
    // Fetch data whenever the query changes
    fetchData(query);
  }, [query]);

  return (
    <div className="p-5">
      {!isProductDetail && (
        <div className="flex">
          <div id="filter-&-sort-container">
            <ProductFilters />
          </div>
          <div id="products-container" className="flex flex-wrap justify-center gap-5">
            {loading && <Loading />}
            {error && <p className="text-red-600">{error}</p>}
            {productData.map((el: productDataInterface) => (
              <ProductCard
                key={el._id}
                _id={el._id}
                name={el.name}
                description={el.description}
                price={el.price}
                mainImage={el.mainImage}
                categories={el.categories}
              />
            ))}
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

// todo you need to ensure figure out how to seamlessly allow for the use to use query strings to filter from there search
// !the comment above must be handled immediately
