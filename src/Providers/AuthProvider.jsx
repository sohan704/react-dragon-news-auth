import { useState } from "react";
import { createContext } from "react";

import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [user,setUser] = useState();
  //at the beginning it is in the loading state
  const [loading, setLoading] = useState(true);
   
  const createUser = (email, password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = () => {
    setLoading(true); //sending signals mean loading loading...true
    return signOut(auth);
  }
  
  useEffect(()=>{
   const observe = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state changed', currentUser);
      setUser(currentUser);
      setLoading(false);
      //loading stops
    })

    return () => {
      observe();
    }
  },[])
 
  const authInfo = {
     user,
     createUser,
     loading,
     logOut,
     signIn

  }
  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;