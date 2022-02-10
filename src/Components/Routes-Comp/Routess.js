import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        </Routes>
      </div>
    </BrowserRouter>
  </div>
};

export default Routess;
