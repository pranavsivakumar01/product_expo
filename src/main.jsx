import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage'; 
import Signup from './Signup';
import PricingCards from './Page3'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
       
        <Route path="/signup" element={<Signup />} />

        
        <Route path="/pricing" element={<PricingCards />} />

        
        <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<LoginPage/>} />
      </Routes>
    </Router>
  </StrictMode>
);
