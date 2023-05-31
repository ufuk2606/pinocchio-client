import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect, useState } from "react";
import { initializeHttpService } from "../services/httpService";
import userService from '../services/userService';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();

    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(user);
    const [meineBestellung, setMeineBestellung] = useState([]);
    const [total, setTotal] = useState(0);

    initializeHttpService(getAccessTokenSilently, "http://localhost:8000/api/v1/");
    
    const checkUser = async () => {
        if (isAuthenticated) {
          const remoteUser = await userService.getUser(user.email);
          if (remoteUser) {
            setCurrentUser({
              ...user,
              role:remoteUser.role,
              id:remoteUser.id
            })
            navigate('/');
          } else {
            navigate('/welcome');
          }
        }
      };

      useEffect(() => {
        checkUser();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isAuthenticated]);


    return (
        <UserContext.Provider value={{currentUser, meineBestellung,setMeineBestellung,total,setTotal}}>
            {children}
        </UserContext.Provider>
    )
}