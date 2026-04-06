import React from 'react';
import Navbar from './Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <div className="p-5 text-center">
       <h2 className="text-2xl font-bold text-gray-700">Welcome to FOSSEE</h2>
       <p className="text-gray-900 mt-4">IIT Bombay's platform for open source workshops</p>
      </div>
    </div>);
}
export default App;