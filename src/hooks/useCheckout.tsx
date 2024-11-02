import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";

const useCheckout = () => {

  const cart = useSelector((state: reduxStoreInterface) => state.cart);

  
  const findOriginalPrice = (): number => {
    return cart.reduce((acc, el) => acc + Number(el.productId.price) * el.quantity, 0);
  };

  
  const originalPrice = findOriginalPrice();


  const salesTaxPercentage = 0.065;
  const salesTax = Number((originalPrice * salesTaxPercentage).toFixed(2)); // Convert to number

 
  const findTotalPrice = (): number => {
    const totalPrice = originalPrice + salesTax;
    return Number(totalPrice.toFixed(2)); // Format to 2 decimal places
  };

  return { salesTax, findOriginalPrice, findTotalPrice };
};

export default useCheckout;
