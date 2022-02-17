import React, { createContext,useState } from 'react'

export const CartContext=createContext();

export  const CartProvider = ({children}) => {
    const [items, setitems] = useState([]);
    console.log({items})
    const addItem=(itemExtra)=>{
        if(items.some(({item})=>item.id===itemExtra.item.id)) return;
        setitems([...items, itemExtra]);
    }
  return (
      <CartContext.Provider value={{items,addItem,}} >
          {children}
      </CartContext.Provider>
  )
}
