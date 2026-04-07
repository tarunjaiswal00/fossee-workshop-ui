import React from'react';
import { useParams, Link } from'react-router-dom';
const workshops=[
  { id: 1,title: "Scilab",description: "Learn Scilab for numerical computing and simulations",level: "Beginner", duration: "7 days", instructor: "Team IIT Bombay", venue: "LH-101", preRequisites:"Basic Mathematics" },
  { id: 2,title: "Python", description:"Python programming language for scientific computing and data analysis", level: "Beginner", duration: "14 days", instructor: "Team IIT Bombay", venue:"Main Auditorium-02", preRequisites: "None" },
  { id: 3, title: "Django",description:"Build web applications using Django framework",level: "Intermediate", duration: "21 days", instructor: "Team IIT Bombay", venue: "CS Lab 420", preRequisites: "Basic Python" },
  { id: 4,title: "OpenFOAM",description:"Computational fluid dynamics simulations using OpenFOAM", level:"Advanced", duration: "7 days", instructor: "Team IIT Bombay", venue: "Mechanical Seminar Room", preRequisites: "Fluid Mechanics" },
  { id: 5,title: "Arduino",description:"Learn embedded systems and hardware programming",level:"Beginner", duration: "7 days", instructor: "Team IIT Bombay", venue:"Electronics Lab 69", preRequisites: "Physics at Intermediate Level" },
  { id: 6,title: "R", description:"Statistical computing and data visualization using R Language",level: "Intermediate", duration: "21 days", instructor: "Team IIT Bombay", venue: "Online ",preRequisites:"Basic Statistics" },];
const WorkshopDetail=()=>{
  const { id } = useParams();
  console.log("Current Workshop ID:",id);
  const workshop = workshops.find(w=>w.id ==id);
  if (!workshop) {
    return (
      <div className="p-10 text-center">
        <p className="text-gray-400">Coming soon...</p>
        <Link to="/" className="text-blue-900 bold text-sm">← Back to HOME</Link>
      </div>
    );
  }
  return(
    <div className="min-h-screen bg-gray-50 py-12 px-6" style={{ fontFamily: 'sans-serif' }}>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="mb-4">
           <Link to="/workshops" className="text-xs text-gray-400 hover:text-gray-600">← Back</Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{workshop.title}</h1>
        <span className="text-[10px] uppercase tracking-wider bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-bold">
          {workshop.level}
        </span>
        <p className="text-gray-600 mt-6 mb-6 text-lg leading-relaxed">
          {workshop.description}
        </p>


        
        <hr className="my-6 border-gray-100" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="text-sm">
            <span className="font-semibold block text-gray-500 uppercase text-xs">Venue:</span>
            <p className="text-gray-700">{workshop.venue}</p>
          </div>
          <div className="text-sm">
            <span className="font-semibold block text-gray-500 uppercase text-xs">Duration:</span>
            <p className="text-gray-700">{workshop.duration}</p>
          </div>
          <div className="text-sm">
            <span className="font-semibold block text-gray-500 uppercase text-xs">Pre-requisites:</span>
            <p className="text-gray-700 ">{workshop.preRequisites}</p>
          </div>
          <div className="text-sm">
            <span className="font-semibold block text-gray-500 uppercase text-xs">Instructor:</span>
            <p className="text-gray-700">{workshop.instructor}</p>
          </div>
        </div>
        <div className="mt-10">
          <button 
            onClick={()=> window.location.href='/register'}
            className="w-full md:w-auto bg-yellow-400 text-gray-900 px-8 py-3 rounded shadow hover:shadow-md transition-all font-bold"> Register Now
          </button>
        </div>
      </div>
    </div>);};export default WorkshopDetail;