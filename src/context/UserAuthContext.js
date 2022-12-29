import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
    confirmPasswordReset,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";


//storage imports
import { storage } from "../firebase";
import {
    collection,
    getDocs
} from 'firebase/firestore'

const userAuthContext = createContext();

//getting categories titles
const collections = collection(storage, 'categoryTitles');

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function signUp(email, name, password) {

        return createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                return updateProfile(auth.currentUser, {
                    displayName: name,
                })
            })
            .then((currentuser) => console.log(currentuser))
    }

    function googleSignIn() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    function facebookSignIn() {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider)
    }

    function logOut() {
        return signOut(auth);
    }

    function forgetpassword(email) {
        return sendPasswordResetEmail(auth, email, {
            url: 'https://prepquizzes-homepage.netlify.app/forgetpassword?'
        });
    }

    function changepassword(oobCode, password) {
        return confirmPasswordReset(auth, oobCode, password)
            .then(() => {

            })
    }

    function addCategory() {
        getDocs(collections)
            .then((storedData) => {
                let titles = []
                storedData.docs.forEach((doc) => {
                    titles.push({ ...doc.data(), id: doc.id})
                })
                console.log(titles)
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            //console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{ user, logIn, signUp, googleSignIn, facebookSignIn, logOut, forgetpassword, changepassword, addCategory }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}