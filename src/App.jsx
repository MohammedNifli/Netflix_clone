import React from 'react';
import { AuthProvider } from './components/AuthContext.jsx';
import Body from './components/Body.jsx';
import Header from './components/Header.jsx';
import './App.css';

const App = () => {
  return (

    <AuthProvider>
      <Header/>
      <Body />
    </AuthProvider>
  );
};

export default App;

