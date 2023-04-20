import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footbar from './components/footbar'

import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footbar />
  </React.StrictMode>,
  document.getElementById('root')
);