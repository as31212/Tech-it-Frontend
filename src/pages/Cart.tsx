import { useEffect } from "react";
import useFetchUserCart from "../hooks/useFetchUserCart";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";


export const Cart : React.FC = ()=>{
    const {loading,error,fetchUserCart} = useFetchUserCart();
    const cart = useSelector((state:reduxStoreInterface)=>state.cart);

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