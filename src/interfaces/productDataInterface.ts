interface meta{
  currentPage: number,
  totalPages: number,
  totalDocuments: number
}



  export interface productData {
    categories: string[];
    createdAt?: string;  // Make optional if not always needed
    description: string;
    images?: string[];  // Make optional if not always needed
    mainImage: string;
    name: string;
    price: number;
    updatedAt?: string;  // Make optional if not always needed
    __v?: number;  // Make optional if not always needed
    _id: string;
  }

  export interface productDataInterface{
    data: productData[]
    meta: meta
  }