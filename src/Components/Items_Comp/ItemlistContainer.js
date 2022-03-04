import { useEffect, useState,useContext} from 'react';
import ItemList from './ItemList';
import { useParams} from 'react-router-dom';
import {getFirestore,collection,getDocs} from "firebase/firestore";
import { CartContext } from '../../context/CartContext';


const ItemlistContainer = () => {
  const [Products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectItem, setselectItem] = useState(null);
  const {items} = useContext(CartContext)
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
