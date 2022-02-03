import React from 'react';
import Item from './Item';

const ItemList = ({Products}) => {
  return <div>

      {
          Products.map((product)=>(
            <Item key={product.id} {...product} Initial={1}/>
    ))
      }

  </div>;
};

export default ItemList;
