import React from'react';
import {BrowserRouter as Router,Routes,Route}from'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import WorkshopList from './WorkshopList';
function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/workshops" element={<WorkshopList/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>);}export default App;