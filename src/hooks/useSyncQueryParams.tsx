import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { productFilterInterface } from "../interfaces/productFiltersInterface";

export const useSyncQueryParams = (filters:productFilterInterface) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
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

    setSearchParams(params);
  }, [filters]);
};
