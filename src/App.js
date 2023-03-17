import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productform' element={<ProductForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App