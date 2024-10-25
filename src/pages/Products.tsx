import { useEffect } from "react";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import { productDataInterface } from "../interfaces/productDataInterface";
import Loading from "../components/Loading";




export const Products: React.FC = () => {
  const productData = useSelector(
    (state: reduxStoreInterface) => state.productData
  );
  const { loading, error, fetchData } = useFetchProducts();

  // Fetch the product data when the component mounts
  useEffect(() => {
    fetchData("http://localhost:4005/products/all "); // todo Replace with your actual URL
  }, []);

  return (
    <>
      <h2 className="text-center font-bold text-2xl my-5">Products</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {loading && <Loading/>}
        {error && <p className="text-red-600">{error}</p>}
        {productData.map((el: productDataInterface) => (
          <ProductCard
            key={el.name} 
            name={el.name}
            description={el.description}
            price={el.price}
            mainImage={el.mainImage}
            categories={el.categories}
          />
        ))}
      </div>
    </>
  );
};
