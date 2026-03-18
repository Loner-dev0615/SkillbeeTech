import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
        
        {/* Protected/Dashboard Routes using DashboardLayout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="lessonOverview" element={<LessonOverview />} />
          <Route path="lessonContent" element={<LessonContent />} />
          <Route path="quiz" element={<div className="p-8">Quiz Page (Coming Soon)</div>} />
          <Route path="tracks" element={<div className="p-8">Tracks Page (Coming Soon)</div>} />
          <Route path="bookmarks" element={<div className="p-8">Bookmarks Page (Coming Soon)</div>} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Individual Profile Route if accessed directly, 
            but it's better handled inside the layout */}
        <Route path="/profile" element={<Navigate to="/dashboard/profile" replace />} />
        
        {/* Redirect /dashboard-layout if it exists in bookmarks/history */}
        <Route path="/dashboard-layout" element={<Navigate to="/dashboard" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
