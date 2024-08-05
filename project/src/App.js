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
import EmployeeDetailPage from './components/EmployeeDetailPage'; // Add this import

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
          path="/attendance"
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
          path="/onboarding"
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
      </Routes>
    </div>
  );
};

export default App;
