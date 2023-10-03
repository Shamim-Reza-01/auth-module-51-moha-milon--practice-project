import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import auth from "../Firebase/Firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
        const [user, setUser]= useState(null)
        const [loder, setLoder] = useState(true)

     const GooglePorvider = new GoogleAuthProvider()
     const GithubPorvider = new GithubAuthProvider

    const createUser = (email,password) =>{
        setLoder(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const signUser = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleSign = () => {
        return signInWithPopup(auth, GooglePorvider)
    }
    const GithubSign = () => {
        return signInWithPopup(auth,GithubPorvider)
    }
    const logOut = () => {
        setLoder(true)
        return signOut(auth)
    }

    useEffect(() =>{
     const unSubcribe =   onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoder(false)
            console.log('curent User',currentUser)
        })
       return () =>{
        unSubcribe()
       }
    },[])

    const AuthInfo = {
        user,
        createUser,
        signUser,
        logOut,
        loder,
        GoogleSign,
        GithubSign
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;

    AuthProvider.propTypes = {
        children : PropTypes.node
    }