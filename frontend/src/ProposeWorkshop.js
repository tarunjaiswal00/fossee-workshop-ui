import React,{useState}from'react';
const ProposeWorkshop=()=>{
  const [title,setTitle] = useState('');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [college,setCollege] = useState('');
  const [description,setDescription] = useState('');
  const handleSubmit=()=>{
    alert('Proposal submitted successfully!');};
  return(
    <div className="min-h-screen bg-slate-50 bg-green-50 py-12 px-7">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-1 border-l-4 border-yellow-400 pl-3">
                 Propose a Workshop
</h2>
        <p className="text-gray-500 text-sm mb-6">Fill up the details to propose a new workshop to FOSSEE.</p>

        <label className="text-sm text-gray-600 font-medium">Workshop Title</label>
        <input type="text" placeholder="e.g. UI/UX Enhancement."
          value={title} onChange={e=>setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 mt-1 focus:outline-none focus:border-yellow-400"/>
        <label className="text-sm text-gray-600 font-medium">Your Name</label>
        <input type="text" placeholder="Full name"
          value={name} onChange={e=>setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 mt-1 focus:outline-none focus:border-yellow-400"/>

        <label className="text-sm text-gray-600 font-medium">Email</label>
        <input type="email" placeholder="Enter your email"
          value={email} onChange={e=>setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 mt-1 focus:outline-none focus:border-yellow-400"/>
        <label className="text-sm text-gray-600 font-medium">Phone Number</label>
        <input type="text" placeholder="Enter your phone number"
          value={phone} onChange={e=>setPhone(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 mt-1 focus:outline-none focus:border-yellow-400"/>
        <label className="text-sm text-gray-600 font-medium">College Name</label>
        <input type="text" placeholder="Your college"
          value={college} onChange={e=>setCollege(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 mt-1 focus:outline-none focus:border-yellow-400"/>
        <label className="text-sm text-gray-600 font-medium">Workshop Description</label>
        <textarea placeholder="Describe your workshop idea..."
          value={description} onChange={e=>setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-6 mt-1 focus:outline-none focus:border-yellow-400 h-28"/>
        <button onClick={handleSubmit}
          className="w-full bg-yellow-400 text-gray-900 py-4 rounded font-semibold hover:bg-yellow-300 transition-colors duration-300">
          Submit 
        </button>
        <p className="text-xs text-gray-600 mt-3 text-center">
              Our team will review your proposal within 5-7 working days.
        </p>
      </div>
    </div>
  );};export default ProposeWorkshop;