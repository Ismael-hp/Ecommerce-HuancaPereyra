import { products } from "../ProductosDato/Product";

export const productsAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });