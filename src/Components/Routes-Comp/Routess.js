import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../cart-Comp/cart';
import FormmC from '../Form-Comp/FormmC';
import ItemDetail from '../Items_Comp/ItemDetail';
import ItemDetailContainer from '../Items_Comp/ItemDetailContainer';
import ItemlistContainer from '../Items_Comp/ItemlistContainer';
import NavBar from '../NavBar-Comp/NavBar';

const Routess = () => {
  return <div>
    <BrowserRouter>
      <NavBar />
      <div className='App-header'>
        <Routes>
          <Route path="/" element={<ItemlistContainer />} />
          <Route path="/category/:id" element={<ItemlistContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/item/:id/carrito" element={<h1>Lista de productos en el Carrito</h1>} />
          <Route path='/cartList' element={<Cart/>}/>
          <Route path='/checkout' element={<FormmC/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </div>
};

export default Routess;
