import { createContext, Dispatch, useState, SetStateAction } from "react";
import {User} from 'firebase/auth';

interface IUserContextProps{
    currentUser: User | null,
    setCurrentUser: Dispatch<SetStateAction <User | null>>
}

export const UserContext = createContext<IUserContextProps | null>(null);

export const ProveedorUsuario:React.FC<{children:JSX.Element}> = ({children}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    return(
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}