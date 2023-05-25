import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainContent from './MainContent';

function renderLetter() {
  return (
    <div className='hbd-jhnvi'>
      <iframe src="/jhnvi.html" title="happppppy birthday" width="100%" height="100%" frameBorder="0"></iframe>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="" element={<MainContent />} />
        <Route exact path="/jhnvi" element={<>{renderLetter()}</>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();