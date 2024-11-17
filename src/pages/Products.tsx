import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useFetchProducts } from "../hooks/useFetchAllProducts";
import ProductFilters from "../components/ProductFilters";
import ProductCard from "../components/ProductCard";
import { productDataInterface } from "../interfaces/productDataInterface";
import Loading from "../components/Loading";
import { Outlet } from "react-router-dom";
import { useSyncQueryParams } from "../hooks/useSyncQueryParams";
import { useInitializeFilter } from "../hooks/useInitializeFilter";


export const Products: React.FC = () => {
  const productData: productDataInterface[] = useSelector(
    (state: reduxStoreInterface) => state.productData
  );
  const filter = useSelector((state:reduxStoreInterface)=>state.productFilters);
  useInitializeFilter();
  const { loading, error } = useFetchProducts();
  useSyncQueryParams(filter);



  return (
    <div className="p-5">
      {
        <div className="flex">
          <div id="filter-&-sort-container">
            <ProductFilters />
          </div>
          <div
            id="products-container"
            className="flex flex-wrap justify-center gap-5"
          >
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
      }
      <Outlet />
    </div>
  );
};
