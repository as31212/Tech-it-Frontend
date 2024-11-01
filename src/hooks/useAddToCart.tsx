import { useState } from "react";

const useAddToCart = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const addToUserCart = async (
    url: string,
    token: string,
    _id: string,
    quantity: number
  ) => {
    try {
      setLoading(true);
      const request = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          productId: _id,
          quantity: quantity,
        }),
      });

      const result = await request.json();

      if (request.ok) {
        console.log("Added item to user cart successfully", result.message);
        setError(null);
      } else {
        setError(result.message);
        console.log(result.message);
      }
    } catch (error) {
      setError("An unexpected error occurred"); // Handle general errors
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addToLocalCart = (_id: string , quantity:number) => { //todo alter this function
    const existingLocalCart = localStorage.getItem("cart");
    if (existingLocalCart) {
      // Parse the existing cart array from local storage
      const cartArray = JSON.parse(existingLocalCart);

      // Push the new item (_id) into the parsed array
      cartArray.push(_id); //! this is wrong. The cart is not an array of strings but an array of objects with the properties of productId:string | product document and quantity:number fix later

      // Store the updated array back into local storage as a string
      localStorage.setItem("cart", JSON.stringify(cartArray));
    } else {
      // If no cart exists, initialize a new cart with the given _id
      localStorage.setItem("cart", JSON.stringify([_id]));
    }
    console.log("Item Added to local cart");
  };

  return { error, loading, addToUserCart, addToLocalCart };
};

export default useAddToCart
// todo here is what needs to be done 1.you need to create the endpoint to handle fetching local cart data !number 1 DONE! 2.you need to add a merge local cart function to handle login and registration seamlessly 
