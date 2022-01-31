import React from 'react';
import Item from './Item';
import ItemCount from './ItemCount';

const Itemsbackground = [
    {id:"1",bg:'dark',Producto:"Celular"},
    {id:"2",bg:'warning',Producto:"Notebook"},
    {id:"3",bg:'success',Producto:"Tablet"},
    {id:"4",bg:'secondary',Producto:"SmartTV"}, 
]

const ItemlistContainer = () => {
  return <div>
      {
          Itemsbackground.map(({id,bg,Producto})=>(
                  <Item key={id} bg={bg} Producto={Producto} Stock={13} Initial={1}/>
          ))
      }
  </div>;
};

export default ItemlistContainer;
