import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AmiraSalmaNafisa from './pages/AmiraSalmaNafisa';
import FarahNaylulFauzia from './pages/FarahNaylulFauzia';
import YasmineShaviraAhmad from './pages/YasmineShaviraAhmad';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amira-salma-nafisa" element={<AmiraSalmaNafisa />} />
        <Route path="/farah-naylul-fauzia" element={<FarahNaylulFauzia />} />
        <Route path="/yasmine-shavira-ahmad" element={<YasmineShaviraAhmad />} />
      </Routes>
    </Router>
  );
}

export default App;