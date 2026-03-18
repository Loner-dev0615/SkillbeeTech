import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Landing from './Component/Landing'
import Welcome from './Component/Welcome'
import Nav from './Component/Nav'

// Page imports
import JoinNow from './Pages/JoinNow'
import Onboarding from './Pages/Onboarding'
import ReminderPage from './Pages/ReminderPage'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import LessonOverview from './Pages/LessonOverview'
import LessonContent from './Pages/LessonContent'
import DashboardLayout from './Pages/DashboardLayout'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/join" element={<JoinNow />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/reminder" element={<ReminderPage />} />
        <Route path="/landing" element={<Landing />} />
        
        {/* Dashboard Routes - Using DashboardLayout if needed, 
            but Dashboard.jsx currently has its own Sidebar.
            Let's keep them consistent. */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* If we want to use the Layout for sub-routes: */}
        <Route path="/dashboard-layout" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="lessonOverview" element={<LessonOverview />} />
          <Route path="lessonContent" element={<LessonContent />} />
        </Route>

        <Route path="/profile" element={<Profile />} />
        
        {/* Redirects or Fallbacks could be added here */}
      </Routes>
    </Router>
  )
}

export default App
