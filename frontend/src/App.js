import React from'react';
import Login from'./Login';
import Footer from './Footer';
import WorkshopDetail from'./WorkshopDetail';
import {BrowserRouter as Router,Routes,Route}from'react-router-dom';
import Home from './Home';
import Register from './Register';
import Navbar from './Navbar';
import WorkshopList from './WorkshopList';
function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/workshops" element={<WorkshopList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/workshops/:id" element={<WorkshopDetail/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>);}export default App;