import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import MainContent from './MainContent.js';
import Anas from './Anas/Anas.js';
import './Anas/Anas.css';
import Jhnvi from './Jhnvi/Jhnvi.js';
import './Jhnvi/Jhnvi.css';
import Lily from './Lily/Lily.js';
import './Lily/Lily.css';




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="" element={<MainContent />} />
        {/* <Route exact path="/jasmine" element={<Jhnvi />} />
        <Route exact path="/anas" element={<Anas />} />
        <Route exact path="/lily" element={<Lily />} /> */}
        <Route exact path="/jasmine" element={<MainContent />} />
        <Route exact path="/anas" element={<MainContent />} />
        <Route exact path="/lily" element={<MainContent />} />


      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();