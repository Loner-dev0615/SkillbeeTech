import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const quickPicksData = [
  { id: 'morning', label: 'Morning', sub: 'Review vocab (08:00)', items: '4 ITEMS', icon: '☀️', time: '07:00 AM' },
  { id: 'lunch', label: 'Lunch', sub: 'Short quiz (12:30)', items: '2 ITEMS', icon: '🍴', time: '12:00 PM' },
  { id: 'evening', label: 'Evening', sub: 'Daily Recap (18:00)', items: '6 ITEMS', icon: '🔆', time: '06:00 PM' },
  { id: 'night', label: 'Night', sub: 'Read 10 mins (21:00)', items: '3 ITEMS', icon: '🌙', time: '09:00 PM' },
];

const initialSchedule = [
  { id: 1, time: '07:30 AM', title: 'Public Speaking', sub: 'Mindfulness course', color: 'border-orange-500' },
  { id: 2, time: '09:00 AM', title: 'Coding', sub: 'Unit 3: Javascript', color: 'border-gray-200' },
  { id: 3, time: '11:00 AM', title: 'Marketing', sub: 'Sales', color: 'border-gray-200' },
];

const ReminderPage = () => {
  const navigate = useNavigate();
  
  const [selectedId, setSelectedId] = useState('morning');
  const [currentTime, setCurrentTime] = useState('07:00 AM');
  const [schedule, setSchedule] = useState(initialSchedule);

  const handleQuickPick = (pick) => {
    setSelectedId(pick.id);
    setCurrentTime(pick.time);
  };

  const handleSetReminder = () => {
    const selectedPick = quickPicksData.find(p => p.id === selectedId);
    alert(`Reminder successfully set for ${selectedPick.label} at ${currentTime}`);
    navigate('/dashboard');
  };

  const handleItemMenu = (id) => {
    const action = window.confirm("Do you want to remove this item from your schedule?");
    if (action) {
      setSchedule(schedule.filter(item => item.id !== id));
    }
  };

  const addNewTask = () => {
    const newTaskName = window.prompt("Enter new task name:");
    if (newTaskName) {
      const newTask = {
        id: Date.now(),
        time: '12:00 PM',
        title: newTaskName,
        sub: 'New Activity',
        color: 'border-gray-200'
      };
      setSchedule([...schedule, newTask]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 font-sans">
      
      <div className="w-full max-w-2xl bg-white rounded-[2rem] p-10 shadow-sm mt-8 flex flex-col items-center relative">
        <div className="bg-orange-50 p-3 rounded-full mb-4">
           <span className="text-orange-500 text-2xl">🕒</span>
        </div>
        <h1 className="text-6xl font-bold text-[#1a202c] mb-4">{currentTime}</h1>
        <div className="bg-orange-50 text-[#1a202c] px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
          Next reminder based on selection
        </div>
      </div>

      <div className="w-full max-w-5xl mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">Quick Picks</h2>
          <button onClick={() => alert("Viewing all categories...")} className="text-orange-500 text-sm font-bold">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {quickPicksData.map((pick) => (
            <div
              key={pick.id}
              onClick={() => handleQuickPick(pick)}
              className={`bg-white p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col h-56 relative ${
                selectedId === pick.id ? 'border-orange-500 ring-2 ring-orange-100' : 'border-transparent hover:border-gray-200'
              }`}
            >
              <div className="bg-orange-50 w-12 h-12 flex items-center justify-center rounded-2xl text-2xl mb-4">
                {pick.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{pick.label}</h3>
              <p className="text-gray-400 text-xs mt-1">{pick.sub}</p>
              
              <div className="mt-auto flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-400 tracking-widest">{pick.items}</span>
                <span className={`text-lg ${selectedId === pick.id ? 'text-orange-500' : 'text-gray-300'}`}>›</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-12 w-full max-w-xs gap-4">
        <button 
          onClick={handleSetReminder}
          className="w-full bg-[#f05a28] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-[#d64a1d] transition-all active:scale-95"
        >
          Set Reminder
        </button>
        <button onClick={() => navigate('/dashboard')} className="text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors">
          Skip for now
        </button>
      </div>

      <div className="w-full max-w-5xl mt-16 mb-20">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Today's Schedule</h2>
        <div className="flex flex-col gap-3">
          {schedule.length > 0 ? schedule.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-2xl flex items-center justify-between shadow-sm border border-gray-50 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-6">
                <span className="text-gray-400 text-sm font-semibold w-20">{item.time}</span>
                <div className={`w-3 h-3 rounded-full border-2 ${item.color}`}></div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.sub}</p>
                </div>
              </div>
              <button 
                onClick={() => handleItemMenu(item.id)}
                className="text-gray-300 text-xl font-bold px-2 hover:text-gray-600"
              >
                ⋮
              </button>
            </div>
          )) : (
            <p className="text-gray-400 text-center py-10">No tasks scheduled for today.</p>
          )}
        </div>
      </div>

      
      <button 
        onClick={addNewTask}
        className="fixed bottom-8 right-8 bg-orange-500 text-white w-14 h-14 rounded-full text-3xl shadow-xl hover:bg-orange-600 hover:rotate-90 transition-all flex items-center justify-center"
      >
        +
      </button>

    </div>
  );
};

export default ReminderPage;