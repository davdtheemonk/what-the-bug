import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./Home"
import Template from "./Template"
import Talkpython from './Talkpython'
import Docs from "./Docs"
import Dashboard  from './Dashboard';
import Signup from "./Signup"
import Login from "./Login"
import Course from "./Course"
import PythonMore from "./PythonMore"
import { store } from './app/store';
import { Provider } from 'react-redux';
import Hire from "./Hire"




ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
   <Route path='/community' element={<Talkpython></Talkpython>}/>
    <Route path='/documentation' element={<Docs />}/>
    <Route path='/python-info' element={<PythonMore />}/>
    <Route path='/portal' element={<Dashboard />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/sign-up' element={<Signup/>} />
    <Route path='/portal/course-info' element={<Course/>} />
    <Route path='/hire' element={<Hire/>} />
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
