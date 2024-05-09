import React, {useContext} from "react";
import { Navigate , useLocation } from 'react-router-dom';
import { AuthContext } from "./AuthContext";

export const ProtectedRoutes = ({children}) => {
    const {isAuth, userRole} = useContext(AuthContext); // mi fai accedere a tutto quello che dice is Auth e userRole  dal authContext
    const location =  useLocation();

    if(!isAuth || userRole !== 'admin') {
        return <Navigate to= '/login' state= {{from: location }} replace/>  // il return qua sopra indica che se non sei loggato ti riporta alla pagina di log in
    }

return children; // questo return ti porta al children in caso in cui sei loggato
}