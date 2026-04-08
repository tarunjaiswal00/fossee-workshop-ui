import React from'react';
const Footer=()=>{
  return(
    <footer className="bg-gray-900 text-gray-400 py-8 px-6 mt-10 border-t-4 border-yellow-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-white font-bold text-lg mb-3">FOSSEE Workshops</h2>
          <p className="text-yellow-400 text-xs mb-2">Open Source for Everyone</p>
          <p className="text-sm leading-relaxed">
                Promoting open source tools in education since 2009. <br/> 
             An IIT Bombay initiative funded by Ministry of Education.<br/>
                     Join us in empowering students and educators with free software workshops!
            </p>
        </div>
        <div>
          <h2 className="text-white font-bold text-lg mb-3">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/workshops" className="hover:text-yellow-400">Workshops</a></li>
            <li><a href="/propose" className="hover:text-yellow-400">Propose Workshop</a></li>
            <li><a href="/login" className="hover:text-yellow-400">Login</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold text-lg mb-3">Contact</h2>
          <p className="text-sm">IIT Bombay,Powai</p>
          <p className="text-sm">Mumbai-400076</p>
          <p className="text-sm mt-2"><a href="mailto:fossee@iitb.ac.in" className="hover:text-yellow-400">
  pythonsupport@fossee.in
</a></p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-5">
       Made with ❤️ by FOSSEE Team · IIT Bombay © 2026
      </div></footer>);};export default Footer;