import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./Home"
import Template from "./Template"
import { store } from './app/store';
import { Provider } from 'react-redux';
import {Toaster} from "react-hot-toast"




ReactDOM.render(
  <Provider store={store}>
  <Toaster position="top-right"
  toastOption={{
    success:{
      theme:{
        primary:'#0d0e13'
      },
    },
  }}>
  </Toaster>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/blogs/:id'element={<Template />} />
      </Routes>
  </BrowserRouter>
  </Provider>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
