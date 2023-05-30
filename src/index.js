import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Navbar from './components/navbar/navbar.js';
import LandingPage from './landingPage/landingPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar/> */}
    <LandingPage/>
  </React.StrictMode>
);
