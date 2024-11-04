import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allcategories from './Components/All categories/Allcategories';


import Mainpage from './Components/Mainpage';
import Tv from './Components/categories/Tv';
import Motors from './Components/categories/Motors';
import Accessories from './Components/categories/Accessories';
import Cart from './Components/add to cart/Cart';

import LoginPage from './Components/Login/Login';
import Mensclothing from './Components/categories/mens clothing';
import Checkout from './Components/add to cart/Checkout';







function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/Allcategories" element={<Allcategories />} />
      <Route path='Accessories' element={<Accessories/>} />
      
      <Route path='tv' element={<Tv/>} />
      <Route path='parts' element={<Motors/>} />
      
      
      <Route path='mensclothing' element={<Mensclothing/>} />
      <Route path='add to cart' element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} /> 
      <Route path='Login' element={<LoginPage/>} />
   
      
      
      
      </Routes>
      
      </BrowserRouter>

     

      
      
      
    </div>
  );
}

export default App;
