import React from'react';
const Profile=()=>{
  return(
    <div className="min-h-screen bg-slate-50 bg-green-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Profile */}
        <div className="bg-white rounded-lg shadow p-6 mb-6 flex items-center gap-5">
          <div className="bg-yellow-400 text-gray-900 rounded-full w-14  h-14 flex items-center justify-center text-2xl font-bold">  👤</div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Tarun Jaiswal</h2>
            <p className="text-gray-500 text-sm">tarunjaiswal2020@gmail.com</p>
            <p className="text-gray-400 text-xs mt-1">Student at VIT Bhopal University</p>
          </div>
        </div>
        {/* Workshops   */}
        <div className="bg-white rounded-lg   shadow p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">My Enrolled Workshops</h3>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded p-4">
              <h4 className="font-semibold text-gray-700">Scilab    Workshop</h4>
              <p className="text-xs text-gray-500 mt-2">Status: <span className="text-xs text-green-500 mt-2"> Completed </span>  </p>
            </div>
            <div className="border border-gray-100 rounded p-4">
              <h4 className="font-semibold text-gray-700">Python Workshop</h4>
              <p className="text-xs text-gray-500 mt-2">Status: <span className="text-xs text-yellow-500 mt-2"> Ongoing </span> </p>
            </div>
            <div className="border border-gray-100 rounded p-4">
              <h4 className="font-semibold text-gray-700">Django  Workshop</h4>
              <p className="text-xs text-gray-500 mt-2">Status: <span className="text-xs text-blue-500 mt-2"> Upcoming </span> </p>
            </div>
          </div>
        </div>
      </div> </div>);};export   default    Profile;