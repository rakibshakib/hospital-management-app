import axios from 'axios';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFireBase from '../firebase/firebase.config';

initializeFireBase(); // firbase initialization

const useFireBase = () => {
    const [name, setName] = useState();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsloading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvide = new GoogleAuthProvider();

    const googleSignIn = () => {
        setIsloading(true);
        signInWithPopup(auth, googleProvide)
            .then((result) => {
                const user = result.user;
                setUser(user);
                // get user data when login
                saveUserData(user.email, user.displayName, 'PUT');
                // const destination = location?.state?.from || '/';
                // history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsloading(false));
    };
    const logOutUser = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
            })
            .catch((error) => {
                const errMsg = error.message;
                setError(`${errMsg}`);
            })
            .finally(() => setIsloading(false));
    };
    const createUserWithEmailPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                saveUserData(email, name, 'POST');
                setError('Account Creating Success, please login..');
                getName();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(`${errorCode} - ${errorMessage}`);
            });
    };
    const loginWithEmailPassword = () => {
        return signInWithEmailAndPassword(auth, email, password);
        // .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;
        //     setUser(user);
        //     setError('')
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     setError(`${errorCode} - ${errorMessage}`)
        // });
    };
    const getName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {
                // Profile updated!
                // ...
            })
            .catch((error) => {
                setError('something went wrong');
            });
    };
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
            }
            setIsloading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    // save user
    const saveUserData = (email, displayName, method) => {
        const user = { email, displayName };
        method === 'POST'
            ? axios
                  .post(
                      'https://guarded-depths-47296.herokuapp.com/users-data',
                      user
                  )
                  .then(function (response) {})
                  .catch(function (error) {
                      console.log(error);
                  })
            : axios
                  .put(
                      'https://guarded-depths-47296.herokuapp.com/users-data',
                      user
                  )
                  .then(function (response) {
                      console.log(response);
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
    };
    // check user isAdmin or not
    useEffect(() => {
        const url = `https://guarded-depths-47296.herokuapp.com/users-data/${user.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);

    // setTimeout(() => {
    //     setError('');
    // }, 10000);

    return {
        googleSignIn,
        user,
        setUser,
        error,
        setError,
        logOutUser,
        createUserWithEmailPassword,
        setEmail,
        setPassword,
        loginWithEmailPassword,
        setName,
        isLoading,
        setIsloading,
        admin,
        saveUserData,
    };
};
export default useFireBase;
