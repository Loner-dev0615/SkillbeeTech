import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const quickPicks = [
  { id: 'morning', label: 'Morning', time: '07:00', period: 'AM', icon: '☀️' }, 
  { id: 'lunch', label: 'Lunch', time: '12:00', period: 'PM', icon: '🍲' },
  { id: 'evening', label: 'Evening', time: '06:00', period: 'PM', icon: '🌇' },
  { id: 'night', label: 'Night', time: '09:00', period: 'PM', icon: '🌙' },
];

const ReminderPage = () => {
  const navigate = useNavigate();
  
  const [selectedTime, setSelectedTime] = useState({ hour: '08:00', period: 'AM' });

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSetReminder = () => {
    const finalTime = `${selectedTime.hour} ${selectedTime.period}`;
    console.log("Saving Reminder:", finalTime);
    
    alert(`Reminder set for ${finalTime}!`);
    navigate('/dashboard'); 
  };

  const handleSkip = () => {
    console.log("User skipped reminder setup");
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 font-sans relative">
      
      <button 
        onClick={handleGoBack}
        className="absolute top-8 left-8 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      <div className="text-center mt-16 mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">When should we remind you?</h1>
        <p className="text-gray-400 text-sm">Consistent reminders builds habits faster</p>
      </div>

      <div className="bg-gray-100 rounded-[2.5rem] px-16 py-10 mb-16 text-center `min-w-[300px]">
        <div className="text-6xl font-black tracking-tight flex items-baseline justify-center gap-2">
          <span>{selectedTime.hour}</span>
          <span className="text-[#f05a28]">{selectedTime.period}</span>
        </div>
        <p className="text-gray-500 font-medium mt-1">Daily reminder</p>
      </div>

      <h2 className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-8">Quick Pick</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-12">
        {quickPicks.map((pick) => {
          const isActive = selectedTime.hour === pick.time && selectedTime.period === pick.period;
          
          return (
            <button
              key={pick.id}
              onClick={() => setSelectedTime({ hour: pick.time, period: pick.period })}
              className={`flex items-center justify-between p-4 border rounded-2xl transition-all group cursor-pointer ${
                isActive 
                ? 'border-[#f05a28] bg-orange-50 ring-1 ring-[#f05a28]' 
                : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <span className="text-xl">{pick.icon}</span>
              <div className="text-right">
                <p className="font-bold text-sm text-gray-900">{pick.label}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase">{pick.time}{pick.period}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-xs mt-auto md:mt-0">
        <button 
          onClick={handleSetReminder}
          className="w-full bg-[#f05a28] text-white font-bold py-4 rounded-full shadow-lg hover:bg-[#d64a1d] transition-transform active:scale-95 cursor-pointer"
        >
          Set Reminder
        </button>
        
        <a href="/dashboard" 
          onClick={handleSkip}
          className="text-gray-400 font-medium text-sm hover:text-gray-600 transition-colors cursor-pointer" >Skip for now</a>
      </div>
    </div>
  );
};

export default ReminderPage;