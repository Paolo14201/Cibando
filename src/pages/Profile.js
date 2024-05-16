import React, { useState , useEffect , useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../auth/AuthContext";
import UserApi from "../api/userApi";
import moment from 'moment';
import 'moment/locale/it';

const Profile = () =>{
    const [dati , setDati] = useState({}); // dato che il back end ci fornira un oggetto
    const {email} = useContext(AuthContext);
    async function getUser () {
        try {
            const response = await UserApi.getDetail(email);
            if(response) {
                setDati(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (() =>{
        getUser();
    },[]);

    return(
        <Contenitore>

            {dati && (
                <>
            Ciao  {dati.name} ecco il riepilogo dei tuoi dati
            <ul>
             <li>Nome: {dati.name}</li>
             <li>Email: {dati.email}</li>
             <li>Ruolo: {dati.role}</li>
            <li>Iscritto dal: {moment(dati.createdAt).locale('it').format('dddd DD MMMM YYYY')}</li>
            <li>Note: {dati.note !== null ? dati.note : 'nessuna nota'}</li>
            </ul>
             </>
            )}

        </Contenitore>
    )
}

const Contenitore = styled.div`
`;

export default Profile;