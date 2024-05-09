import React, {createContext, useState, useEffect} from 'react';
import {login as authenticate} from './AuthService'


export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isAuth , setIsAuth] = useState(localStorage.getItem('isAuth') == true)
    const [userRole, setUserRole] = useState (localStorage.getItem('userRole'));
    const [name, setName] = useState(localStorage.getItem('name'));
    const [email, setEmail] = useState(localStorage.getItem('email'));

    useEffect(() =>{
        localStorage.setItem('isAuth', isAuth);
        localStorage.setItem('userRole', userRole);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);

    }, [isAuth, userRole])

    const login = async (email, password) => {
        const { success , userData } = await authenticate (email , password) // questo è il return della funzione nel AuthService
        if (success){
            setIsAuth(true);
            setUserRole(userData.role);
            setName(userData.name);
            setEmail(userData.email);
        } else{
            setIsAuth(false);
        }
            return { success , userData }
    }

    const logout = () => {
        setIsAuth(false);
        setUserRole(null);

        // ripulire le local storage:

        localStorage.removeItem('isAuth');
        localStorage.removeItem('userRole');
        localStorage.removeItem('name');
        localStorage.removeItem('email');

        localStorage.clear();
        return { success: true }
    }

    return (
        <AuthContext.Provider value={{isAuth , userRole , name , email , login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}