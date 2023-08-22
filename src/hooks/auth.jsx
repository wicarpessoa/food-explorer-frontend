import { useContext, createContext, useState,useEffect } from "react";
import {api} from "../services/api"
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

function AuthProvider({children}) {
  const [data, setData] =useState({})

  async function signIn({email, password}){
    try {
      const response = await api.post("/sessions", {email, password})
      const { user, token } = response.data;

      console.log(user)
      const {isAdmin} = user;
      console.log(toString(isAdmin))
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);
      localStorage.setItem("@foodexplorer:isadmin", isAdmin)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setData({user,token,isAdmin})
    } catch (e) {
      if(e.response) {
        alert(e.response.data.message)
      } else {
        alert("Não foi possível entrar!")
      }
    }
  }
  function signOut() {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:isadmin");

    setData({});
    navigate("/")
  }
  useEffect(()=> {
    const user = localStorage.getItem("@foodexplorer:user");
    const token = localStorage.getItem("@foodexplorer:token");
    const isAdmin = localStorage.getItem("@foodexplorer:isadmin");
    if (token && user && isAdmin) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
        isAdmin: parseInt(isAdmin)
      })
    }
  },[])
  return (
      <AuthContext.Provider value={{signIn, signOut, user: data.user, isAdmin: data.isAdmin}} >
        {children}
      </AuthContext.Provider  >
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider, useAuth}