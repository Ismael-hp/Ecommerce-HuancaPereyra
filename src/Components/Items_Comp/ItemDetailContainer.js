import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { getItem} from '../Helpers/Promises';
import { Spinner} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {getFirestore,doc,getDoc} from "firebase/firestore";




const ItemDetailContainer = () => {

  const {id} = useParams();

  console.log(id);

    const [dataItem, setDataItem] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        console.log(id)
        const Items= doc(db,"items",id);
        getDoc(Items).then((item)=>{
        setDataItem({
        id: item.id,
        ...item.data()
      });
        });
        setLoading(false)
        // getItem(id).then(result => {
        //     setDataItem(result);
        //     setLoading(false);
        // })
    }, [id]);

    console.log(dataItem)

    if (loading) {
        return <Spinner animation="border" variant="light"/>;
      }

      return <div>
        <br/>
        {dataItem ? <ItemDetail {...dataItem} /> :<div><h1>Lista Vacia</h1></div>}
      </div>
};
export default ItemDetailContainer;
