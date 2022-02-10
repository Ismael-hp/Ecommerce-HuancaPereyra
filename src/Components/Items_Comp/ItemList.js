import React from 'react';
import Item from './Item';

const ItemList = ({ Products, setselectItem }) => {
  return <div className='FlexStyle'>
    {
      Products.map((product) => (
        <Item key={product.id} {...product} Initial={1} setselectItem={setselectItem} />
      ))
    }

  </div>;
};

export default ItemList;
