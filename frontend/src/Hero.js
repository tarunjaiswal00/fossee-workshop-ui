import React from 'react';
const Hero =()=>{
  return(
    <section className="bg-gray-800 text-white py-18 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-5 leading-snug">
          Learn Open Source Tools <br/>
          <span className="text-yellow-400">with IIT Bombay's FOSSEE Program</span>
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
          Attend free workshops on Scilab,Python,Django and many more.
          Organised by IIT Bombay for students all over the India.
        </p>
        <a href="/workshops"
          className="bg-yellow-400 text-gray-900 px-7 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200">
          Explore Workshops
        </a>
      </div>
    </section>);};export default Hero;