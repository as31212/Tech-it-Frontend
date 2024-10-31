
interface productIdPopulateInterface{
    _id:string;
    name:string,
    price:number,
    description:string,
    categories:string[],
    mainImage:string,
    images:string[]
}

export interface cartInterface{
    productId:productIdPopulateInterface,
    quantity: number
}