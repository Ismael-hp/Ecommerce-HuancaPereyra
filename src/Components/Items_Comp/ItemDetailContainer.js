import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { getItem} from '../Helpers/Promises';
import { Spinner} from 'react-bootstrap';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {

  const {id} = useParams();

  console.log(id);

    const [dataItem, setDataItem] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
        getItem(id).then(result => {
            setDataItem(result);
            setLoading(false);
        })
    }, [id]);

    if (loading) {
        return <Spinner animation="border" variant="light"/>;
      }

      return <div>
        {dataItem ? <ItemDetail {...dataItem} /> :<div><h1>Lista Vacia</h1></div>}
      </div>
};
export default ItemDetailContainer;
