import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { populate } from "../redux/slices/productDataSlice";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { productFilterInterface } from "../interfaces/productFiltersInterface";

export const useFetchProducts = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const filters = useSelector(
    (state: reduxStoreInterface) => state.productFilters
  );

  // Helper function to create a query string from the filters
  const createQueryString = (filters: productFilterInterface) => {
    const params = new URLSearchParams();

    if (filters.price !== null) {
      params.append("price", filters.price.toString());
    }
    if (filters.categories.length > 0) {
      filters.categories.forEach((cat) => params.append("categories", cat));
    }
    if (filters.sort) {
      params.append("sort", filters.sort);
    }
    if(filters.page){
      params.append("page",filters.page.toString());
    }

    return params.toString();
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      // Generate the query string based on filters
      const queryString = createQueryString(filters);
      const url = `http://localhost:4005/products/all${
        queryString ? `?${queryString}` : ""
      }`;

      const request = await fetch(url);
      const result = await request.json();

      if (request.ok) {
        console.log("data fetched", queryString);
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

  // Fetch data whenever filters change
  useEffect(() => {
    if (filters.isInitialized) { // THIS IS WHAT ENSURES THAT THE FILTER IS INITIALIZED BEFORE THE DATA IS FETCHED WHICH ENSURES THAT THE DATA WILL BE UPDATED
      fetchData();
    }
  }, [filters]);

  return { loading, error };
};
