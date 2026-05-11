import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Thesis from './pages/Thesis';
import Products from './pages/Products';
import Architecture from './pages/Architecture';
import Capital from './pages/Capital';
import Roadmap from './pages/Roadmap';
import Founders from './pages/Founders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="thesis" element={<Thesis />} />
          <Route path="products" element={<Products />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="capital" element={<Capital />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="founders" element={<Founders />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;