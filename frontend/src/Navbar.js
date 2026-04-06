import React, {useState} from 'react';

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-7 py-5 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">IIT Bombay's FOSSEE <span  className=" text-yellow-400">Workshops</span>
        </h1>
        {/*hamburger button*/}
        <button className="md:hidden text-white text-2xl focus:outline-none px-1" onClick={() =>setIsOpen(!isOpen)}>
        {isOpen?'✕':'☰'}
        </button>
        

        {/*desktop menu*/}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="/" className="hover:text-yellow-400 transition-colors duration-200">Home</a></li>
          <li><a href="/workshops" className="hover:text-yellow-400 transition-colors duration-200">Workshops</a></li>
          <li><a href="/login" className="hover:text-yellow-400 transition-colors duration-200">Login</a></li>
          <li><a href="/register" className="hover:text-yellow-400 transition-colors duration-200">Register</a></li>
          <li><a href="/propose" className="hover:text-yellow-400 transition-colors duration-200">Proposed Workshops</a></li>
          <li><a href="/statistics" className="hover:text-yellow-400 transition-colors duration-200">Statistics</a></li>
        </ul>
      </div>

      {/*mobile menu*/}
      {isOpen && (
        <ul className="md:hidden mt-3 flex flex-col gap-3 text-sm font-medium">
          <li><a href="/" className="hover:text-yellow-400 transition-colors duration-200">Home</a></li>
          <li><a href="/workshops" className="hover:text-yellow-400 transition-colors duration-200">Workshops</a></li>
          <li><a href="/login" className="hover:text-yellow-400 transition-colors duration-200">Login</a></li>
          <li><a href="/register" className="hover:text-yellow-400 transition-colors duration-200">Register</a></li>
          <li><a href="/propose" className="hover:text-yellow-400 transition-colors duration-200">Proposed Workshops</a></li>
          <li><a href="/statistics" className="hover:text-yellow-400 transition-colors duration-200">Statistics</a></li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;