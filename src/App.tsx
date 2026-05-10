import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Ecosystem from './pages/Ecosystem';
import RoadmapTeam from './pages/RoadmapTeam';
import ArchitectureCapital from './pages/ArchitectureCapital';
import InvestmentProspectus from './pages/InvestmentProspectus';
import Placeholder from './pages/Placeholder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Ecosystem />} />
          <Route path="roadmap" element={<RoadmapTeam />} />
          <Route path="architecture" element={<ArchitectureCapital />} />
          <Route path="prospectus" element={<InvestmentProspectus />} />

          {/* Placeholders for links */}
          <Route path="thesis" element={<Placeholder title="Thesis" />} />
          <Route path="products" element={<Placeholder title="Products" />} />
          <Route path="capital" element={<Placeholder title="Capital" />} />
          <Route path="founders" element={<Placeholder title="Founders" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;