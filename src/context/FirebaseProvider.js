import React, { createContext } from 'react';
import useFireBase from '../Hooks/useFirebase';

export const FirebaseContext = createContext();
const FirebaseProvider = ({ children }) => {
    const firebaseAuth = useFireBase();
    return (
        <FirebaseContext.Provider value={firebaseAuth}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;
