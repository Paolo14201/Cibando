import React, {createContext, useContext, useState} from "react";

const UserContext = createContext();


export const useUserContext = () => useContext(UserContext);

export function UserProvider({children}) {
    const [user, setUser]  = useState(null);    // PROVIDER: il provider ha il compito di avvolgere tutti gli altri componenti

    const registerUser = (userData) => {
        setUser(userData);            // se richiamata va a settare dentro setUser tutto quello che riceve
}

    return(

        <UserContext.Provider value= {{user, registerUser}}>   {/* user e registerUser vengono messi a disposizione da tutti i componenenti che vogliono usare questo context*/}
            {children}
        </UserContext.Provider>

    )
}

