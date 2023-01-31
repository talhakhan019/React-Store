import React from 'react'
import {Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products">
        <Route index element={<Products/>} />
        <Route path=":id" element={<ProductDetails/>} />
      </Route>
      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
