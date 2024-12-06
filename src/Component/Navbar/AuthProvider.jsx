import React, { createContext, useState, useEffect } from "react";
import { auth } from "../Firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state

  // রেজিস্ট্রেশন ফাংশন
  const userRejister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // লগইন ফাংশন
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // লগআউট ফাংশন
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Firebase এর user state ট্র্যাক করা
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // বর্তমান ব্যবহারকারী সেট করা
      setLoading(false); // লোডিং শেষ
    });

    // Clean up function
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    userRejister,
    userLogIn,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
