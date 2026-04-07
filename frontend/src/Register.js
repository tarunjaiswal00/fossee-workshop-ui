import React, {useState} from'react';
const Register=()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [collegeName, setCollegeName] = useState('');

  const handleSubmit=()=>{
    alert('Registration will be starting soon!');};
  return(
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Create Account</h2>
        <p className="text-gray-500 text-sm mb-9">Join FOSSEE and start your learning today</p>
        <label className="text-sm text-gray-900 font-medium">Full Name</label>
        <input
          type="text"
          placeholder= "Your full name"
          value={name}
          onChange={e=>setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 mt-1 focus:outline-none focus:border-yellow-400"
        />
        <label className="text-sm text-gray-600 font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 mt-1 focus:outline-none focus:border-yellow-400"
        />
        <label className="text-sm text-gray-600 font-medium">Password</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-6 mt-1 focus:outline-none focus:border-yellow-400"
        />
        
        <label className="text-sm text-gray-600 font-medium">College Name</label>
        <input
          type="text"
          placeholder="Enter your college name"
          value={collegeName}
          onChange={e=>setCollegeName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-6 mt-1 focus:outline-none focus:border-yellow-400"
        />


        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-gray-900 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200">
          Create Account
        </button>

        <p className="text-sm text-center text-gray-500 mt-5">
          Already have an account?{' '}
          <a href="/login" className="text-yellow-600 font-medium hover:underline">Login here</a>
        </p>
      </div>
    </div>);};export default Register;