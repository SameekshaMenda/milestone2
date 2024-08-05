import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AttendanceManagement from './components/AttendanceManagement';
import LeaveManagement from './components/LeaveManagement';
import PolicyManagement from './components/PolicyManagement';
import EmployeeProfile from './components/EmployeeProfile';
import OnboardingManagement from './components/OnboardingManagement';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/attendance" element={<AttendanceManagement />} />
        <Route path="/leave-management" element={<LeaveManagement />} />
        <Route path="/policy-management" element={<PolicyManagement />} />
        <Route path="/employee-profile" element={<EmployeeProfile />} />
        <Route path="/onboarding" element={<OnboardingManagement />} />
      </Routes>
    </div>
  );
};

export default App;
