import axios from "axios";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const LoginContext = createContext({});

export default function AuthContext({ children }) {
    const [userObject, setUserObject] = useState(null);

    useEffect(() => {
        let user = localStorage.getItem('userObject');

        if (!user) {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/getAdmin`, { withCredentials: true })
                .then(res => {
                    if (res.data) {
                        setUserObject(res.data);
                        localStorage.setItem('userObject', JSON.stringify(res.data));
                    }
                })
                .catch(err => {
                    console.log('Error:', err);
                })
        } else {
            setUserObject(JSON.parse(user));
        }
    }, []);

    return (
        <LoginContext.Provider value={{userObject}}>{children}</LoginContext.Provider>
    )
}