import React,{useState} from'react';
const Login=()=>{
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const handleSubmit=()=>{
    alert('Login functionality will be available soon!');};
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-1">Login</h2>
        <p className="text-gray-500 text-sm mb-9">Welcome~Please enter your details</p>
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
          placeholder="Enter your password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-6 mt-1 focus:outline-none focus:border-yellow-400"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-gray-900 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors duration-200">
          Login
        </button>



        <p className="text-sm text-center text-gray-500 mt-5">
          Don't have an account?{' '}
          <a href="/register" className="text-yellow-600 font-medium hover:underline">Register here</a>
        </p>
      </div>
    </div>);
};export default Login;