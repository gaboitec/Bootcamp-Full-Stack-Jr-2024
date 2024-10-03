import { useContext, useEffect } from "react"
import {UserContext} from '../context/UserDataContext';
import {Navigate} from 'react-router-dom';

interface IProtectedRouterProp{
    children: JSX.Element
}

export const ProtectedRouter:React.FC<IProtectedRouterProp> = ({children}) => {
    const {currentUser} = useContext(UserContext);

    useEffect(() => {
        console.log("ddfsdfsf");

    },[])

    return currentUser ? children : <Navigate to='/session' />
}