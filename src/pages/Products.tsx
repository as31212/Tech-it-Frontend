import { useEffect } from "react";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useFetchProducts } from "../hooks/useFetchAllProducts";
import ProductCard from "../components/ProductCard";
import { productDataInterface } from "../interfaces/productDataInterface";
import Loading from "../components/Loading";
import { Outlet, useLocation } from "react-router-dom";

export const Products: React.FC = () => {
  const productData = useSelector(
    (state: reduxStoreInterface) => state.productData
  );
  const { loading, error, fetchData } = useFetchProducts();
  const location = useLocation();
  const isProductDetail = location.pathname !== "/Products";

  useEffect(() => {
    fetchData("http://localhost:4005/products/all"); // TODO: Replace with your actual URL
  }, []);

  return (
    <>
      {!isProductDetail && (
        <>
          <h2 className="text-center font-bold text-2xl my-5">Products</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {loading && <Loading />}
            {error && <p className="text-red-600">{error}</p>}
            {productData.map((el: productDataInterface) => (
              <ProductCard
                key={el._id} // Key should be unique, using _id instead of name
                _id={el._id}
                name={el.name}
                description={el.description}
                price={el.price}
                mainImage={el.mainImage}
                categories={el.categories}
              />
            ))}
          </div>
        </>
      )}
      <Outlet />
    </>
  );
};
