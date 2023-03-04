import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './components/Register/Register'
import AfterRegister from './components/Register/AfterRegister/AfterRegister'
import Event from './components/Event/Event'
import AboutUs from './components/AboutUs/AboutUs';
import About from './components/Home/About';

import {Route,Routes,BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/registrationSuccessful' element={<AfterRegister/>}/>
        <Route path='/Aboutus' element={<AboutUs/>}/>
        <Route path='/Event' element={<Event/>}/>
      </Routes>
   </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
