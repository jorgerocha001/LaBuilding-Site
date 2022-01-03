import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar'

ReactDOM.render(
  <React.StrictMode>
      <Navbar/>
      <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
