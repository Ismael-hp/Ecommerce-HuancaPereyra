import { products, } from "../ProductosDato/Product";

export const productsAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });

  export const getItem = (idItem) => {
    return new Promise((resolve, reject) => {
      const findProduct = products.find(product => product.id === idItem);
      setTimeout(() => {
        resolve(findProduct);
      }, 2000)
    })
  };
