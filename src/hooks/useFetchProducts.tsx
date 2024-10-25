import { useState } from "react";
import { useDispatch } from "react-redux";
import { populate } from "../redux/slices/productDataSlice";

export const useFetchProducts = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const fetchData = async (url: string) => {
    try {
      setLoading(true);

      const request = await fetch(url);
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

  return {loading,error,fetchData};
};
