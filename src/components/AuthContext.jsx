import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    //   setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = (userCredentials) => {
    setUser(userCredentials.user);
    console.log("Logged in user:", userCredentials.user);
  };

  const logout = async () => {
    console.log("kkkkkkkk")
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,  }}>
      {children}
    </AuthContext.Provider>
  );
};
