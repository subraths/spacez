"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Define the shape of the context value
interface AuthContextType {
  login: () => void;
  logout: () => void;
  checkAuthStatus: () => boolean;
}

// Create context with proper type (undefined for when outside provider)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  // Check if user is already logged in (e.g., from stored token)
  const checkAuthStatus = () => {
    return isAuthenticated;
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
  };

  const value: AuthContextType = {
    login,
    logout,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
