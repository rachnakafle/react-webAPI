import React from 'react';
import './App.css';
import Home from './components/Home';
import Department from './components/Department';
import Employee from './components/Employee';
import Navigation from './components/Navigation';

import { BrowserRouter, Routes ,Route  } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
      <div className="container">

        <h3 className="m-3 d-flex justify-content-center">Web API</h3>
        <Navigation />
       <Routes>
       <Route exact path='/' element={<Home />} />
       <Route exact path='/Department' element={<Department />} />      
       <Route exact path='/Employee' element={<Employee />} />
       {/* <Route exact path='/Navigation' element={<Navigation />} /> */}
      </Routes>
      </div>
      </BrowserRouter>
   
 
   
  );
}

export default App; 
