import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/About/AboutPage';
import ProductPage from './landing_page/Products/ProductPage';
import PricingPage from './landing_page/Pricing/PricingPage';
import SupportPage from './landing_page/Support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/signup/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <BrowserRouter> 
<Navbar/> 
   <Routes>

    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup'  element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/about'   element={<AboutPage/>}></Route>
    <Route path='/product' element={<ProductPage/>}></Route>
    <Route path='/pricing' element={<PricingPage/>}></Route>
    <Route path='/support' element={<SupportPage/>}></Route>
    <Route path='/*' element={<NotFound/>}></Route>
    
    

   </Routes>
   <Footer/>
  </BrowserRouter> 
  </CookiesProvider>

   
);





