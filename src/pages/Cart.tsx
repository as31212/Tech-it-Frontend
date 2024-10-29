import { useEffect } from "react";
import useFetchUserCart from "../hooks/useFetchUserCart";

export const Cart : React.FC = ()=>{
    const {loading,error,fetchUserCart} = useFetchUserCart();

    useEffect(()=>{
        fetchUserCart();
    },[]);

    return(
        <>
        <h2>Cart</h2>
        {error && (<><p className="text-red-400">{error}</p></>)}
        </>
    );
}