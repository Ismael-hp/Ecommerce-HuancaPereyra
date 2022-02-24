import { useEffect, useState } from 'react';
import { productsAPI } from '../Helpers/Promises';
import ItemList from './ItemList';
import { useParams} from 'react-router-dom';
import {getFirestore,collection,getDocs} from "firebase/firestore";


const ItemlistContainer = () => {
  const [Products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectItem, setselectItem] = useState(null);

  const {id} =useParams();

  useEffect(() => {
    const db = getFirestore();
    const ItemsCollection= collection(db,"items");
    getDocs(ItemsCollection).then((items)=>{
    setproducts(items.docs.map((doc)=>({
      id:doc.id,
      ...doc.data()
    })));
    });
    setLoading(false);
  }, []);
  console.log(Products);


  // const getProducts = async () => {
  //   try {
  //     const result = await productsAPI;
  //     setproducts(result);
  //   } catch (error) {
  //     console.log({ error });
  //   } finally {
  //     setLoading(false);
  //     console.log("Se termina de consumir a la API");
  //   }
  // };


  if (loading) {
    return <h1>loadingDATA.....</h1>;
  }

  const filterProduct= Products.filter(({Category})=>Category===id);

  return <div>
     <br/>
    {!id ? <ItemList Products={Products} setselectItem={setselectItem} /> :<ItemList Products={filterProduct} setselectItem={setselectItem} />}
     
  </div>;
};
export default ItemlistContainer;
