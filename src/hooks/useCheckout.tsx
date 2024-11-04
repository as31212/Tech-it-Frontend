import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useDispatch } from "react-redux";
import { changePrice } from "../redux/slices/priceDataSlice";

const useCheckout = () => {
  const cart = useSelector((state: reduxStoreInterface) => state.cart);
  const dispatch = useDispatch();

  const changePriceData = () => {
    const salesTaxPercentage = 0.065;
    const originalPrice = Number(cart
      .reduce((acc, el) => acc + Number(el.productId.price) * el.quantity, 0)
      .toFixed(2));
    const salesTax = Number((originalPrice * salesTaxPercentage).toFixed(2));
    const totalPrice = (originalPrice + salesTax).toFixed(2);

    dispatch(changePrice({
      originalPrice: originalPrice,
      salesTax: salesTax,
      totalPrice: totalPrice,
    }));
  };

 

  return { changePriceData };
};


export default useCheckout;
