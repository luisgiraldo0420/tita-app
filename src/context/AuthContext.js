import React, {useState, useEffect, createContext} from 'react';
import {getToken, removeToken, setToken} from '../api/token';
import {getData, removeData, setData} from '../api/user';


export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
});

export function AuthProvider(props){
    const {children} = props;
    const [auth, setAuth] = useState(undefined);
   
    useEffect(() => {
        (async () => {
            const token = getToken();
            const data = getData();
          if (token && token !== undefined) {
            setAuth({ token, data });
          } else {
            setAuth(null);
          }
        })();
      }, []);

    const login = async (token, data) => {
        setToken(token);
        setData(data);
        setAuth({token, data})   
    }

    const logout = () => {
        if(auth){
            removeToken();
            removeData();
            setAuth(null);
        }
    }

    const valueContext = {
        auth,
        login,
        logout,
    }
    if(auth === undefined ) return null;
    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}