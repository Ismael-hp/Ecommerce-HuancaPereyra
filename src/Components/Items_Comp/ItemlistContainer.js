import { useEffect, useState } from 'react';
import Item from './Item';
import { productsAPI } from '../Helpers/Promises';
import ItemList from './ItemList';


const ItemlistContainer = () => {

    const [Products, setproducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        getProducts();
      }, []);
      
    const getProducts = async () => {
        try {
          const result = await productsAPI;
          setproducts(result);
        } catch (error) {
          console.log({ error });
        } finally {
          setLoading(false);
          console.log("Se termina de consumir a la API");
        }
      };
      if (loading) {
        return <h1>loadingDATA.....</h1>;
      }

  return <div>
      <ItemList Products={Products}/>
  </div>;
};

export default ItemlistContainer;
