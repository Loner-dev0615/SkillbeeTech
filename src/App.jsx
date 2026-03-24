import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Landing from './Component/Landing'
import Welcome from './Component/Welcome'
import Nav from './Component/Nav'


import JoinNow from './Pages/JoinNow'
import Onboarding from './Pages/Onboarding'
import ReminderPage from './Pages/ReminderPage'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import LessonOverview from './Pages/LessonOverview'
import LessonContent from './Pages/LessonContent'
import DashboardLayout from './Pages/DashboardLayout'
import Settings  from './Pages/Settings';
import Bookmark from './Pages/Bookmark';
import Quiz from './Pages/Quiz';
import QuizPage from './Pages/QuizPage';


const App = () => {
  return (
    <Router>
    
      <Routes>
        
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/join" element={<JoinNow />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/reminder" element={<ReminderPage />} />
        <Route path="/landing" element={<Landing />} />
        
      
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="lessonOverview" element={<LessonOverview />} />
          <Route path="lessonContent" element={<LessonContent />} />
          <Route path="quiz" element={<Quiz /> } />
          <Route path="quiz-page" element={<QuizPage />} />
          <Route path="tracks" element={<div className="p-8">Tracks Page (Coming Soon)</div>} />
          <Route path="bookmarks" element={<Bookmark />} />
          <Route path="profile" element={<Profile />} />
          <Route path='settings' element={<Settings/>} />

          
        </Route>

        
        <Route path="/profile" element={<Navigate to="/dashboard/profile" replace />} />
        
       
        <Route path="/dashboard-layout" element={<Navigate to="/dashboard" replace />} />

     
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
