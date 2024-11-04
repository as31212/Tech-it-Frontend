import useCheckout from "../hooks/useCheckout";
import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { useEffect } from "react";


const OrderSummary: React.FC = () => {
  const cart = useSelector((state:reduxStoreInterface)=>state.cart);
  const priceData = useSelector((state:reduxStoreInterface)=>state.priceData);
  const {changePriceData} = useCheckout();
  useEffect(()=>{
    changePriceData();
  },[cart]); 
  return (
    <>
      {/* Order Summary Section  */}
      <div className="flex flex-col w-1/3 border p-6 shadow-md sticky top-24 h-fit">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Order Summary
        </h2>
        <hr className="my-4" />
        <div className="space-y-2">
          <p className="flex justify-between">
            <span>Original Price</span>
            <span>${priceData.originalPrice}</span>
          </p>
          <p className="flex justify-between">
            <span>Savings</span>
            <span className="text-red-600">- $0.00</span>
          </p>
          <p className="flex justify-between">
            <span>Store Pickup</span>
            <span className="text-green-600">FREE</span>
          </p>
          <p className="flex justify-between">
            <span>Delivery</span>
            <span className="text-green-600">FREE</span>
          </p>
          <p className="flex justify-between">
            <span>Estimated Sales Tax</span>
            <span>${priceData.salesTax}</span>
          </p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${priceData.totalPrice}</span>
        </div>
        <button className="mt-6 w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Checkout
        </button>
        <button className="mt-4 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center">
          PayPal Checkout
        </button>
      </div>
    </>
  );
};

export default OrderSummary;