import { productDataInterface } from "./productDataInterface";
import { userDataInterface } from "./userDataInterface";
import { cartInterface } from "./cartInterface";
import { priceDataInterface } from "./priceDataInterface";

export interface reduxStoreInterface{
    "userData":userDataInterface,
    "token":string,
    "productData": productDataInterface[] | string[],
    "product":productDataInterface,
    "cart": cartInterface[];
    "priceData": priceDataInterface;
    "priceFilter": number;
}