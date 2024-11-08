export interface productDataInterface {
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