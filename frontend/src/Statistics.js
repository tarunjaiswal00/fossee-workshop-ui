import React from'react';
const    stats=[
  {id:1,label:"Workshops Conducted",value:"600+"},
  {id:2,label:"Students Enrolled",value:"90,000+"},
  {id:3,label:"Colleges Reached",value:"1,500+"},
  {id:4,label:"States Covered",value:"30+"},
  {id:5,label:"Open Source Tools",value:"20+"},
  {id:6,label:"Expert Instructors",value:"150+"},];
const Statistics=()=>{
  return(
    <div className="min-h-screen bg-slate-50   bg-green-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">Workshop Statistics</h2>
        <p className="text-center text-gray-500 mb-10">Our impact   across India</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map(stat=>(
        <div key={stat.id} className="bg-white rounded-lg shadow p-6 text-center">
        <h3 className="text-4xl font-bold text-yellow-500 mb-2">{stat.value}</h3>
        <p className="text-gray-600   text-sm">{stat.label}</p>
        </div>))}
        </div>
      </div>
    </div>);};export default Statistics;