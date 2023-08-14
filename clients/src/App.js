import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/pages/Header';
import About from './components/pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
