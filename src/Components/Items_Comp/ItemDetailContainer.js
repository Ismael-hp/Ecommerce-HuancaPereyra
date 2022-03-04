import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { getItem } from '../Helpers/Promises';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";




const ItemDetailContainer = () => {

  const { id } = useParams();

  const [dataItem, setDataItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const db = getFirestore();
    const Items = doc(db, "items", id);
    getDoc(Items).then((item) => {
      setDataItem({
        id: item.id,
        ...item.data()
      });
<<<<<<< HEAD
        });
        setLoading(false)
    }, [id]);
=======
    });
    setLoading(false)
  }, [id]);
>>>>>>> Entrega-Proyecto-Final

  return <div>

<<<<<<< HEAD
      return <div>
        <br/>
        {loading ? <Spinner animation="border" variant="light" /> : <div>
      <br /><ItemDetail {...dataItem} />
    </div>
    }
      </div>
=======
    {loading ? <Spinner animation="border" variant="light" /> : <div>
      <br /><ItemDetail {...dataItem} />
    </div>
    }
  </div>
>>>>>>> Entrega-Proyecto-Final
};
export default ItemDetailContainer;
