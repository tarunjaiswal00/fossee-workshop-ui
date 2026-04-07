import React from 'react';
const workshops=[
  {id:1,title:"Scilab",description:"Learn Scilab for numerical computing and simulations", level:"Beginner"},
  {id:2,title:"Python",description:"Python programming language for scientific computing and data analysis", level:"Beginner"},
  {id:3, title:"Django", description:"Build web applications using Django framework", level:"Intermediate"},
  {id:4,title:"OpenFOAM",description:"Computational fluid dynamics simulations using OpenFOAM", level:"Advanced"},
  {id:5,title:"Arduino",  description:"Learn embedded systems and hardware programming", level:"Beginner"},
  {id:6, title:"R", description:"Statistical computing and data visualization using R Language", level:"Intermediate"},
  {id:7,  title:"Many More",  description:"Explore our full catalog of specialized technical courses and workshops", level:"All Levels"},
];
const WorkshopList=()=>{
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Available Workshops</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {workshops.map(workshop => (
          <div key={workshop.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{workshop.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{workshop.description}</p>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">{workshop.level}</span>
            <br/><br/>
            <a href={`/workshops/${workshop.id}`}
              className="text-sm text-blue-600 hover:underline">View More Details... →</a>
          </div>))}
      </div>
    </div>
  );};export default WorkshopList;