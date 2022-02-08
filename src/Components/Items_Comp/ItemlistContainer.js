import { useEffect, useState } from 'react';
import Item from './Item';
import { productsAPI } from '../Helpers/Promises';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';


const ItemlistContainer = () => {
  const [Products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectItem, setselectItem] = useState(null);


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
  return <div className='FlexStyle'>
    <ItemList Products={Products} setselectItem={setselectItem} />
    <ItemDetailContainer idItem={selectItem}  />
  
  </div>;
};
export default ItemlistContainer;
