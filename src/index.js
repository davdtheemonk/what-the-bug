import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./Home"
import Template from "./Template"

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/post' element={<Template />}/>
      </Routes>
  </BrowserRouter>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
