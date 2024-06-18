import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { useAuth } from './AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Session from './Session'

const Body = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Navigate to="/browse" />} />
        <Route path="/browse" element={user ? <Browse /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default Body;
