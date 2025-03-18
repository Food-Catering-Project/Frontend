import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from '../src/pages/auth/Login';
import NotFound from '../src/pages/NotFound';
import Home from './pages/Home';
import React from 'react';
import Help from './pages/Help';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
   
   
    </>
  );
}

export default App;






