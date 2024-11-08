import { useState } from "react";
import { categoryDataInterface } from "../interfaces/categoryDataInterface";

const useFetchCategories = ()=>{
    const [categories,setCategories] = useState<categoryDataInterface[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);
    
    const fetchCategories = async ()=>{
        try {
            setLoading(true);
            const request = await fetch("http://localhost:4005/categories/all");
            const result = await request.json();

            if(request.ok){
                setError(null);
                console.log(result);
                setCategories(result.categories);
            }

            
        } catch (error) {
            setError("An unexpected error has occurred");
            console.error(error);
            
        }finally{
            setLoading(false);
        }
    }

    return {error,loading,categories,fetchCategories}; 
}

export default useFetchCategories;