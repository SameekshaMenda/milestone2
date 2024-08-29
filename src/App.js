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
import EmployeeDetailPage from './components/EmployeeDetailPage';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout'; // Import Logout component

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        <Route
          path="/home"
          element={
            <>
              <NavigationBar />
              <HomePage />
            </>
          }
        />
        
        <Route
          path="/dashboard"
          element={
            <>
              <NavigationBar />
              <Dashboard />
            </>
          }
        />
        
        <Route
          path="/attendance-management"
          element={
            <>
              <NavigationBar />
              <AttendanceManagement />
            </>
          }
        />
        
        <Route
          path="/leave-management"
          element={
            <>
              <NavigationBar />
              <LeaveManagement />
            </>
          }
        />
        
        <Route
          path="/policy-management"
          element={
            <>
              <NavigationBar />
              <PolicyManagement />
            </>
          }
        />
        
        <Route
          path="/employee-profile"
          element={
            <>
              <NavigationBar />
              <EmployeeProfile />
            </>
          }
        />
        
        <Route
          path="/onboarding-management"
          element={
            <>
              <NavigationBar />
              <OnboardingManagement />
            </>
          }
        />
        
        <Route
          path="/employee/:id"
          element={
            <>
              <NavigationBar />
              <EmployeeDetailPage />
            </>
          }
        />

        {/* Add the Logout route */}
        <Route
          path="/logout"
          element={
            <>
              <NavigationBar />
              <Logout />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
