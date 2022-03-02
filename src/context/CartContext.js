import React, { createContext,useState } from 'react'

export const CartContext=createContext();

export  const CartProvider = ({children}) => {
    const [items, setitems] = useState([]); 
    const [totalPrice, settotalPrice] = useState(null)
    

    const cleanCarrito=()=>{
        setitems([])
    }

    const addItem=(itemExtra)=>{
        
        if(items.some(({item})=>item.id===itemExtra.item.id)) return;
        setitems([...items, itemExtra]);
        console.log(itemExtra)
        console.log(items)
    }
    
    const removerItem=(itemId)=>{
        setitems(items.filter(({item})=>item.id!==itemId))
        console.log(items)
    };

    const changeCart=(id,cantidad)=>{
        if(cantidad===0)
        removerItem(id)
        items.find(({item})=>
            item.id===id
        ).quantity=cantidad;
        console.log(items)
    }


  return (
      <CartContext.Provider value={{items,addItem,removerItem,changeCart,settotalPrice,totalPrice,cleanCarrito}} >
          {children}
      </CartContext.Provider>
  )
}
