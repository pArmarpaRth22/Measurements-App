// src/context/AuthContext.js
import React, { createContext, useState } from "react";
import { auth, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ SIGNUP (create account ONLY)
  const signup = async ({ name, phone, email, password, role }) => {
    try {
      setLoading(true);

      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save extra data in Firestore
      await setDoc(doc(db, "users", res.user.uid), {
        name,
        phone,
        email,
        role,
        createdAt: new Date(),
      });

      // ❌ DO NOT auto-login user here
      return true;
    } catch (error) {
      console.log("Signup error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGIN (email + password)
  const login = async ({ email, password }) => {
    try {
      setLoading(true);

      const res = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const snap = await getDoc(doc(db, "users", res.user.uid));

      if (snap.exists()) {
        setUser({
          uid: res.user.uid,
          ...snap.data(),
        });
      } else {
        console.log("User data not found in Firestore");
      }
    } catch (error) {
      console.log("Login error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGOUT
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
