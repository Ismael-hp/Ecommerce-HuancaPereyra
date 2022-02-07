import React from 'react';
import Item from './Item';
import ItemDetail from './ItemDetail';
import ItemlistContainer from './ItemlistContainer';




const ItemDetailContainer = (selectItem) => {

    //const [listDetail, setlistDetail] = useState(false);
    if (selectItem.id == null) {
        return <div>
            <h1>Lista Vacia</h1>
        </div>;
    }
    else {
        return <ItemDetail {...selectItem}/>
    }

};

export default ItemDetailContainer;
