import { useState } from "react";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useDispatch } from "react-redux";
import { populateCart } from "../redux/slices/cartDataSlice";

const useFetchUserCart = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const userData = useSelector((state: reduxStoreInterface) => state.userData);
  const token = useSelector((state:reduxStoreInterface)=>state.token);
  const dispatch = useDispatch();

  const fetchUserCart = async () => {
    try {
      setLoading(true);
      const request = await fetch(`http://localhost:4005/cart/all/${userData.id}`,
        {
          method:"GET",
          headers:{
            "authorization":`bearer ${token}`
          }
        }
      ); //todo change url with cloud deploy
      const result = await request.json();
      if(request.ok){
        setError(null);
        dispatch(populateCart(result.userCart));
        console.log("Cart has been fetched",result.userCart);
      }
      else{
        setError(result.message);
        console.log(result.message);
      }
    } catch (error) {
        setError('Unexpected error occurred')
        console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {loading,error,fetchUserCart}
};

export default useFetchUserCart;