import {Navigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import api from "../api.js";
import {REFRESH_TOKEN,ACCESS_TOKEN} from "../constants.js";
import { useState,useEffect } from "react";


export default function ProtectedRoute({children}){
    const [isAuthorized,setisAuthorized]=useState(null);

    useEffect(()=>{
        auth().catch(()=>setisAuthorized(false));
    },[])

    const refreshToken = async() => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        if(!refreshToken){
            setisAuthorized(false);
            return;
        }
        try{
            const response = await api.post("/api/token/refresh/",{refresh:refreshToken});
            if(response.status===200){    
                localStorage.setItem(ACCESS_TOKEN,response.data.access);
                setisAuthorized(true);
            }else{
                setisAuthorized(false);
            }
        }catch(error){
            console.error("Error refreshing token:",error);
            setisAuthorized(false);
        }


    }
    

   const auth = async() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if(!token){
        setisAuthorized(false);
        return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;


    if(tokenExpiration<now){
        await refreshToken();
    }
    else{
        setisAuthorized(true);
    }
   }


   if(isAuthorized===null){
     return <div>Loading...</div>

}
   return isAuthorized?children:<Navigate to="/login" />;
}