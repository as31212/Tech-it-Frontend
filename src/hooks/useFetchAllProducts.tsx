import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { populate } from "../redux/slices/productDataSlice";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { createQuery } from "../redux/slices/productQuerySlice";

export const useFetchProducts = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const query = useSelector((state:reduxStoreInterface)=>state.productQuery);
  const priceFilter = useSelector((state:reduxStoreInterface)=>state.priceFilter);
  const categoryFilter = useSelector((state:reduxStoreInterface)=>state.productFilter);
  const dispatch = useDispatch();


  

  const fetchData = async () => {
    try {
      setLoading(true);

      const request = await fetch(`http://localhost:4005/products/all${query}`);
      const result = await request.json();

      if (request.ok) {
        console.log("data fetched");
        dispatch(populate(result));
        setError(null);
      } else {
        setError(result.message);
        console.log(result.message);
      }
    } catch (error) {
      setError("An unexpected error occurred");
      console.error(error);
    } finally {
      setLoading(false);
      console.log(loading);
    }
  };

  useEffect(()=>{
    dispatch(createQuery({
      categories:categoryFilter,
      price:priceFilter
    }))
  })



  
  

  return {loading,error,fetchData};
};
