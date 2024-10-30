
interface productIdPopulateInterface{
    name:string,
    price:number,
    description:string,
    categories:string[],
    mainImage:string,
    images:string[]
}

export interface cartInterface{
    productId:productIdPopulateInterface | string[], //todo maybe needs to be changed, just in case this interface is used to handle the non populated version of productId which is just a string
    quantity: number
}