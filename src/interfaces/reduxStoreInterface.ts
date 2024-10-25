import { productDataInterface } from "./productDataInterface";
import { userDataInterface } from "./userDataInterface";

export interface reduxStoreInterface{
    "userData":userDataInterface,
    "token":string,
    "productData": productDataInterface[],
}