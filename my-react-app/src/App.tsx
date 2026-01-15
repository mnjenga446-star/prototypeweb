import React from 'react';
import './index.css'
import './test.css'
import Products from './components/products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LimuruDairyHomepage from './components/LimuruDairyHomepage';
import LimuruDairyAbout from './components/about';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LimuruDairyHomepage />} />
          <Route path="/products" element={<Products />} />
          <Route path ="/about" element={<LimuruDairyAbout />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
