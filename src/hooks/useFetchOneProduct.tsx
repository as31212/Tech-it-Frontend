import { useState } from "react";
import { useDispatch } from "react-redux";
import {reset, populate } from "../redux/slices/productSlice";

const useFetchOneProduct = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const fetchProduct = async (url: string) => {
    try {
      setLoading(true);
      const request = await fetch(url);
      const result = await request.json();
      if (request.ok) {
        console.log("Product fetched");
        dispatch(reset());
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
    }
  };

  return {loading,error,fetchProduct};
};
export default useFetchOneProduct;
