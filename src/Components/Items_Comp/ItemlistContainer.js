import { useEffect, useState } from 'react';
import Item from './Item';
import { productsAPI } from '../Helpers/Promises';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from 'react-router-dom';


const ItemlistContainer = () => {
  const [Products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectItem, setselectItem] = useState(null);

  const {id} =useParams();

  console.log(id);

  



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

  const filterProduct= Products.filter(({Category})=>Category===id);



  return <div>
     <br/>
    {!id ? <ItemList Products={Products} setselectItem={setselectItem} /> :<ItemList Products={filterProduct} setselectItem={setselectItem} />}
     
  </div>;
};

//<br/>
    //<ItemList Products={Products} setselectItem={setselectItem} />
    //<div className='DetailC'>
    //<ItemDetailContainer idItem={selectItem} />
    //</div>
export default ItemlistContainer;
