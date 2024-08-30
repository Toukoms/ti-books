"use client"
import { AuthContext } from "@/contexts/auth-context";
// import { auth } from "@/lib/firebase-config";
import {
  GoogleAuthProvider,
  signOut,
  User,
  onAuthStateChanged,
  signInWithPopup
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAuthSource = (): AuthContextType => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()

  const login = async () => {
    // const provider = new GoogleAuthProvider();
    // const result = await signInWithPopup(auth, provider);
    // if (result.user) {
    //   router.push("/stories");
    // }
  };

  const logout = () => {
    // signOut(auth);
    // router.push("/");
  };

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth,(user) => {
    //   console.log(user);
    //   if (user) {
    //     setUser(user);
    //     setIsAuthenticated(true);
    //   } else {
    //     setUser(null);
    //     setIsAuthenticated(false);
    //   }
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 3000);
    // });
    // return unsubscribe; // Clean up subscription when component unmounts
  }, []);

  return {
    user: user,
    login,
    logout,
    isAuthenticated,
    isLoading,
  };
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContext.Provider value={useAuthSource()}>
      {children}
    </AuthContext.Provider>
  );
}
