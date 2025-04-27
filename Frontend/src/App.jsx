import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Counselors from "./pages/Counselors";
import AIChat from "./pages/AIChat";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Assessment from "./pages/Assessment";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/counselor" element={<Counselors />} />
        <Route path="/ask-ai" element={<AIChat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/assessments" element={<Assessment />} />
      </Routes>
    </BrowserRouter>
  );
}