import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeFilter } from "../redux/slices/productFilters";

export const useInitializeFilter = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const filters = {
      price: searchParams.get("price") ? Number(searchParams.get("price")) : null,
      categories: searchParams.getAll("categories"), // Handles multiple categories
      page: searchParams.get("page") || 1,
      sort: searchParams.get("sort") || "",
    };

    dispatch(initializeFilter(filters));
  }, [searchParams]);
};


