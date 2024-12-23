import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Implement actual login logic here
    setUser({ email });
  };

  const guestLogin = () => {
    setUser({
      email: "guest@example.com",
      isGuest: true,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const signup = (email, password) => {
    // Implement actual signup logic here
    setUser({ email });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, guestLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
