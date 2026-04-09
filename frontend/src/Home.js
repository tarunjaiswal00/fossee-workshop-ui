import React from 'react';
import Hero from './Hero';
const Home=()=>{
  return(
    <div>
      <Hero/>
      <div className="py-14 px-6 text-center bg-slate-50 bg-green-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Why FOSSEE?</h2>
        <p className="text-gray-900 max-w-2xl mx-auto text-base leading-relaxed">
        FOSSEE (Free/Libre and Open Source Software for Education) promotes open-source tools to improve educational quality and reduce dependence on expensive proprietary software in Indian academia. 
        It offers free, industry-relevant training, workshops, and internships to students and faculty, funded by the Ministry of Education, Government of India.
        </p>
       </div>
    </div>);};export default Home;