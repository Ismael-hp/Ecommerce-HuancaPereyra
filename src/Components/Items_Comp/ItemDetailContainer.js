import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { getItem} from '../Helpers/Promises';
import { Spinner} from 'react-bootstrap';



const ItemDetailContainer = ({idItem}) => {

    const [dataItem, setDataItem] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
        getItem(idItem).then(result => {
            setDataItem(result);
            setLoading(false);
        })
    }, [idItem]);


    if (loading) {
        return <Spinner animation="border" variant="light" />;
      }

      return <div>
        {dataItem ? <ItemDetail {...dataItem} /> :<div><h1>Lista Vacia</h1></div>}
      </div>



 

};
//<ItemDetail id={id} Producto={Producto} />
export default ItemDetailContainer;
