import { environment } from "@/environments/environment";
import type { Product } from "@/types/Product";

export const getProducts = async (): Promise<Product[]> => {
  const url = `${environment.baseUrl}${environment.endpoints.products}`;
  
  try {
    const response = await fetch(url);

    if(!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }

    const data = await response.json();
    
    return data.products;
  } catch (error) {
    console.error('Erro na requisição: ', error);
    throw error;
  }
}