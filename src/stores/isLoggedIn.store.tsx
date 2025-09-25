"use client"

import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        if (typeof window !== "undefined") { return localStorage.getItem("isLoggedIn") === "true"; }
        return false;
    });

    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        router.push("/"); // redirect properly
    }, [router]);

    const logout = () => { localStorage.removeItem('isLoggedIn');  setIsLoggedIn(false);}
    const login = () => { 
        const code = prompt("Enter admin code:");
        if (code === process.env.NEXT_PUBLIC_ADMIN_CODE) {
            localStorage.setItem('isLoggedIn', 'true'); 
            setIsLoggedIn(true); 
        } else { logout(); alert("Incorrect code"); }
    }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}