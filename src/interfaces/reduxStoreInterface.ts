import { productDataInterface, productData } from "./productDataInterface";
import { userDataInterface } from "./userDataInterface";
import { cartInterface } from "./cartInterface";
import { priceDataInterface } from "./priceDataInterface";
import { productFilterInterface } from "./productFiltersInterface";

export interface reduxStoreInterface{
    "userData":userDataInterface,
    "token":string,
    "productData": productDataInterface,
    "product":productData,
    "cart": cartInterface[];
    "priceData": priceDataInterface;
    "productFilters": productFilterInterface; 
}