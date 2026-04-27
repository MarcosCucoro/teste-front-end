export interface Product {
  id: number | string;
  productName: string;
  photo: string;
  price: number;
  description: string;
  rating?: number;
  capsule?: string;
  [key: string]: unknown;
}

export interface ProductsResponse {
  produtos?: Product[];
  [key: string]: unknown;
}
