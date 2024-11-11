import { useSelector } from "react-redux"
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface"
import { useState } from "react";
import { productDataInterface } from "../interfaces/productDataInterface";

const useChangePriceFilter = () =>{
    const productFilter = useSelector((state:reduxStoreInterface)=>state.priceFilter);
    const productData = useSelector((state:reduxStoreInterface)=>state.productData);
    const [filteredProductData,SetFilteredProductData] = useState<productDataInterface[]>(productData);

    const changeFilteredProducts = (filter)=>{

    }
}
//todo i have decided to create a seperate state from the products state called filtered products, i am unsure if i want to make this state global or local.