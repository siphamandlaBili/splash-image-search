import { createContext,useContext,useState,useEffect } from "react";

const context = createContext();

export const AppProvider =({children})=>{
    const [isDarkTHeme,setDarkTheme] = useState(false);
    const [input,setInput] = useState('');

    const toggleDarkTheme =()=>{
        const newDarkTheme = !isDarkTHeme
        setDarkTheme(newDarkTheme);
        const body = document.querySelector("body");
        body.classList.toggle('dark-theme',newDarkTheme);
        console.log(isDarkTHeme)
        console.log(body)
       
    }

    const formOnsubmit=(e)=>{
        e.preventDefault()
    }
    return <context.Provider value={{isDarkTHeme,setDarkTheme,toggleDarkTheme,formOnsubmit,input,setInput}}>
        {children}
    </context.Provider>
}

export const useGlobalContext = ()=> useContext(context)