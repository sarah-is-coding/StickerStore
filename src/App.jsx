import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop'; // Import the Shop component
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/themes' element={<ShopCategory category="themes"/>} />
          <Route path='/styles' element={<ShopCategory category="styles"/>} />
          <Route path='/activities' element={<ShopCategory category="activities"/>} />
          <Route path='/home-workspace' element={<ShopCategory category="home-workspace"/>} />
          <Route path='/body' element={<ShopCategory category="body"/>} />
          <Route path='/product' element={<Product />}> 
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
