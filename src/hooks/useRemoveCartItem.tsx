import { useState } from "react"
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useNavigate } from "react-router-dom";

const useRemoveCartItem= ()=>{
    const [itemRemovalError,setItemRemovalError] = useState<string | null>(null);
    const token = useSelector((state:reduxStoreInterface)=>state.token);
    const userData = useSelector((state:reduxStoreInterface)=>state.userData);
    const navigate = useNavigate();

    const removeItem = async (productId:string)=>{
        try {
            const request =  await fetch(`https://tech-it-backend.onrender.com/cart/delete/${userData.id}`,{ //todo add url
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":`bearer ${token}`
                },
                body:JSON.stringify({
                    productId:productId
                })
            });

            const result = await request.json();

            if(request.ok){
                setItemRemovalError(null);
                console.log(result.message);
                navigate('/Cart') // ensures that the new cart data is refreshed displaying the cart with the removed item
            }
            else{
                setItemRemovalError(result.message);
                console.error(result.message); 
            }
            
        } catch (error) {
            setItemRemovalError("Unexpected error occurred");
            console.error(error);
        }
    }

    return {removeItem,itemRemovalError}
}
export default useRemoveCartItem;