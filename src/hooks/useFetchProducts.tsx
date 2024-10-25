import { useState } from "react"

const useFetchProducts = () =>{

    const [error,setError] = useState<string | null >(null);
    const [loading,setLoading] = useState<boolean>(false);

    const fetchData = async (url:string) =>{
        try {
            setLoading(true);

            const request = await fetch(url);
            const result = await request.json();

            if(request.ok){
                console.log("data fetched");
                //todo start here
            }
            
        } catch (error) {
            
        }finally{

        }
    }


}