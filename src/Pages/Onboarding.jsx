import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const skillsList = [
  "Public Speaking", "Time Management", "Excel & Data", "Leadership",
  "Marketing", "Writing", "Coding", "Design Thinking", "Finance"
];

const Onboarding = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
  };

  const handleGoBack = () => {
    navigate(-1);
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 font-sans">
      <div className="w-full max-w-2xl mb-8 mr-220 ">
        <button 
          onClick={handleGoBack}
          aria-label="Go back"
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition shadow-sm cursor-pointer absolute w-12 h-12 left-8 top-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">What do you want to improve?</h1>
      <p className="text-gray-500 mb-8">Select all that apply - we'll build your personalized path</p>
      
      <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-10">Choose Your Skills</h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mb-12">
        {skillsList.map((skill) => {
          const isSelected = selectedSkills.includes(skill);
          return (
            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`
                px-6 py-2.5 rounded-full border transition-all duration-200 text-sm font-medium
                ${isSelected 
                  ? 'border-black bg-gray-50 text-black shadow-sm scale-105' 
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'}
              `}
            >
              {skill}
            </button>
          );
        })}
      </div>

    
      <div className="flex flex-col items-center gap-4 mt-auto">
        <span className="text-sm text-gray-500">{selectedSkills.length} Skills selected</span>
        <a href='/reminder' className="px-24 py-4 rounded-2xl text-white font-semibold transition-all mb-25" style={{ background: 'linear-gradient(90deg, #f05a28 0%, #ee5822 100%)' }}>
          Continue
        </a>
      </div>
    </div>
  );
};

export default Onboarding;