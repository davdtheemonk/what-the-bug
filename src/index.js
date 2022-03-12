import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./Home"
import Template from "./Template"
import Talkpython from './Talkpython'
import Docs from "./Docs"
import PythonMore from "./PythonMore"
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/post' element={<Template />}/>
   <Route path='/community' element={<Talkpython></Talkpython>}/>
    <Route path='/documentation' element={<Docs />}/>
    <Route path='/python-info' element={<PythonMore />}/>

      </Routes>
  </BrowserRouter>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
