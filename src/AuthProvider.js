import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AuthProvider = ({element, userInfo}) => {
    const navigate = useNavigate();
    console.log('user ifno : ', userInfo)
    console.log('path : ', window.location.pathname)
    useEffect(() => {
        if (!userInfo) navigate('/login');
        else if (userInfo && window.location.pathname === '/login') navigate('/');
    }, [])

    return element;
}
