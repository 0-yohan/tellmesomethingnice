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


// function renderLetterJhnvi() {
//   return (
//     <div id="hbd-jhnvi">
//       <iframe src={process.env.PUBLIC_URL + '/jhnvi.html'} title="happppppy birthday" width="100%" height="100%" frameBorder="0"></iframe>
//     </div>
//   );
// }

// function renderLetterAnas() {
//   return (
// <div id="hbd-anas">
//       <iframe src={process.env.PUBLIC_URL + '/anas.html'} title="HBD Bro" width="100%" height="100%" frameBorder="0"></iframe>
//     </div>
//   );
// }


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="" element={<MainContent />} />
        <Route exact path="/jhnvi" element={<Jhnvi />} />
        <Route exact path="/anas" element={<Anas />} />
        <Route exact path="/lily" element={<Lily />} />


      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();