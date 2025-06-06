import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout'; // Import the Layout component

// Import placeholder components for each section (will create these next)
// import FinancialModels from './pages/FinancialModels.tsx';
import FinancialModels2Page from './pages/FinancialModels2.tsx';
import MutualFundsAnalysis from './pages/MutualFundsAnalysis.tsx';
import Calculators from './pages/Calculators.tsx';
import SectoralAnalysis from './pages/SectoralAnalysis.tsx';
import Newsletters from './pages/Newsletters.tsx';
import VideoExplanations from './pages/VideoExplanations.tsx';
import KnowledgeBase from './pages/KnowledgeBase.tsx';
import HomePage from './pages/HomePage.tsx'; // Trigger re-check

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> {/* Use Layout as the parent route */}
        {/* Define nested routes for each section */}
        <Route index element={<HomePage />} /> {/* Default route */}
        <Route path= "financial-models" element={<FinancialModels2Page />} /> 
        <Route path="mutual-funds" element={<MutualFundsAnalysis />} />
        <Route path="calculators" element={<Calculators />} />
        <Route path="sectoral-analysis" element={<SectoralAnalysis />} />
        <Route path="newsletters" element={<Newsletters />} />
        <Route path="videos" element={<VideoExplanations />} />
        <Route path="knowledge-base" element={<KnowledgeBase />} />
      </Route>
    </Routes>
  );
}

export default App;
