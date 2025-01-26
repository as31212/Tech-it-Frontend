import { useState, useEffect } from "react";
import { categoryDataInterface } from "../interfaces/categoryDataInterface";

const useFetchCategories = () => {
  const [categories, setCategories] = useState<categoryDataInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const request = await fetch("https://tech-it-backend.onrender.com/categories/all");
      const result = await request.json();

      if (request.ok) {
        setError(null);
        console.log(result);
        setCategories(result.categories);
      }
    } catch (error) {
      setError("An unexpected error has occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { error, loading, categories };
};

export default useFetchCategories;
