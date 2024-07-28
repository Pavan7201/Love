import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import No1 from './No1';
import No2 from './No2';
import No3 from './No3';
import Yes from './Yes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/no1" element={<No1/>}></Route>
        <Route path="/no2" element={<No2/>}></Route>
        <Route path="/no3" element={<No3/>}></Route>
        <Route path="/yes" element={<Yes/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
