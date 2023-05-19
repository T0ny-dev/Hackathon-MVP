import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,
onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {auth} from "../firebase"
import Loader from "../components/Loader.jsx";

export const authContext = createContext()


/** Create a custom hook for context authContext */
export const useAuth = () => {
  const context  = useContext(authContext)
  return context
}

/** This is a provider all app */
export function AuthProvider ({children}) {

  /* this use state begin un null information the user*/

  const [user, setUser ] = useState(null)

  const [loading, setLoading] = useState(true);

  /**this is a function the firebase  */
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>  signInWithEmailAndPassword(auth, email, password);
  
  const logout = () => signOut(auth);

  /**this function is a google login  */
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider
    return signInWithPopup(auth, googleProvider);
  }

  /**this function retun the user information and save the state en setUser*/
  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => unSubscribe();

  },[])


  if (loading) return <Loader/>

  return (
    <authContext.Provider value={{signup, login, user, logout, loading, loginWithGoogle}}>{children}</authContext.Provider>
  )
}