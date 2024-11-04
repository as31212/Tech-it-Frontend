import { useState } from "react"
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useNavigate } from "react-router-dom";

const useChangeQuantity = () =>{
    const token = useSelector((state:reduxStoreInterface)=>state.token);
    const [error,setError] = useState<string | null>(null);
    const [loading,setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const changeQuantity =async (url:string,productId:string,quantity:number)=>{
        try {
            setLoading(true);
            const request = await fetch(url,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":`bearer ${token}`
                },
                body:JSON.stringify({
                    productId:productId,
                    quantity: quantity
                })
            });
            const result = await request.json();

            if(request.ok){
                setError(null);
                console.log(result.message);
                navigate('/Cart') //! test for cart re fetch
            }
            else{
                setError(result.message);
                console.log(result.message);
            }

        } catch (error) {
            setError("Unexpected error occurred");
            console.error("Unexpected error occurred");
        }finally{
            setLoading(false)
        }
    }
    return{changeQuantity,error,loading};
}

export default useChangeQuantity;