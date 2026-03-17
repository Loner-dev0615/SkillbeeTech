import React from 'react'
import Nav from './Component/Nav'
import Landing from './Component/Landing'
import Welcome from './Component/Welcome'
import JoinNow from './Pages/JoinNow'
import Onboarding from './Pages/Onboarding'
import ReminderPage from './Pages/ReminderPage'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPages from './Component/Landing'
import WelcomePages from './Component/Welcome'
import LessonOverview from './Pages/LessonOverview'
import LessonContent from './Pages/LessonContent'


const App = () => {
  return (
    
    <Router>
     
      <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/welcome" element={<Welcome />} />
        <Route path="/join" element={<JoinNow />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/reminder" element={<ReminderPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<LandingPages />} />
        <Route path="/welcome" element={<WelcomePages />} />
         <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App



