import React, { createContext,useState } from 'react'

export const CartContext=createContext();

export  const CartProvider = ({children}) => {
    const [items, setitems] = useState([]);
    console.log({items})


    const addItem=(itemExtra)=>{
        
        if(items.some(({item})=>item.id===itemExtra.item.id)) return;
        setitems([...items, itemExtra]);
        console.log(itemExtra)
        console.log(items)
    }
    
    const removeritem=(itemId)=>{
        console.log("Remover Item:")
        console.log(itemId)
        console.log(items)
        setitems(items.filter(({item})=>item.id!==itemId))
        console.log(items)
    };


  return (
      <CartContext.Provider value={{items,addItem,removeritem}} >
          {children}
      </CartContext.Provider>
  )
}
