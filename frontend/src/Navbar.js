import React,{useState}from'react';
const Navbar=()=>{
const[isOpen,setIsOpen]=useState(false);
  return(
    <nav  className="bg-gray-900 border-b-2 border-yellow-500 text-white px-7 py-3 shadow-md">
      <div   className="flex justify-between items-center">
      {/* Yellow Logo And Title */}
        <div className="flex items-center gap-4">
          {/* tried w-16 first but h-20 looked better on big screens
           keeping yellow as accent - matches FOSSEE's vibe */}
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-gray-700 font-bold text-xs">
            FOSSEE
          </div>
          <h1 className="text-lg font-bold tracking-wide">
            IIT Bombay's FOSSEE <span className="text-yellow-400">Workshops</span>
          </h1>
        </div>
        {/* Hamburger Button */}
        <button  className="md:hidden text-white text-2xl focus:outline-none px-1" onClick={()=>setIsOpen(!isOpen)}>
          {isOpen?'✕':'☰'}
        </button>
        {/* I will add active link highlight later if i get enough time */}
        {/*Desktop Menu*/}
        <ul  className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="/" className="hover:text-yellow-400 transition-colors duration-300">Home</a></li>
          <li><a href="/workshops" className="hover:text-yellow-400 transition-colors duration-300">Workshops</a></li>
                    <li><a href="/propose" className="hover:text-yellow-400 transition-colors duration-300">Proposed Workshops</a></li>
          <li><a href="/statistics" className="hover:text-yellow-400 transition-colors duration-300">Statistics</a></li>
          <li><a href="/login" className="hover:text-yellow-400 transition-colors duration-300">Login</a></li>
          <li><a href="/register" className="hover:text-yellow-400 transition-colors duration-300">Register</a></li>
          <li><a href="/profile" className="hover:text-yellow-400 transition-colors duration-300">Profile</a></li>
        </ul>
      </div>
      {/*Mobile Menu*/}
      {isOpen&&(
        <ul className="md:hidden mt-3 flex flex-col gap-3 text-sm font-medium">
          <li><a href="/" className="hover:text-yellow-400 transition-colors duration-300">Home</a></li>
          <li><a href="/workshops" className="hover:text-yellow-400 transition-colors duration-300">Workshops</a></li>
                    <li><a href="/propose" className="hover:text-yellow-400 transition-colors duration-300">Proposed Workshops</a></li>
                              <li><a href="/statistics" className="hover:text-yellow-400 transition-colors duration-300">Statistics</a></li>
          <li><a href="/login" className="hover:text-yellow-400 transition-colors duration-300">Login</a></li>
          <li><a href="/register" className="hover:text-yellow-400 transition-colors duration-300">Register</a></li>
          <li><a href="/profile" className="hover:text-yellow-400 transition-colors duration-300">Profile</a></li>
        </ul>
      )}
    </nav>);};
export default Navbar;