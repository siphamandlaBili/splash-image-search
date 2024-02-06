import { createContext,useContext,useState,useEffect } from "react";

const context = createContext();

const onloadTheme = () =>{
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return prefersDarkMode
}

export const AppProvider =({children})=>{
    const [isDarkTHeme,setDarkTheme] = useState(onloadTheme());
    const [input,setInput] = useState('cat');
    
    const toggleDarkTheme =()=>{
        const newDarkTheme = !isDarkTHeme
        setDarkTheme(newDarkTheme);
        const body = document.querySelector("body");
        body.classList.toggle('dark-theme',newDarkTheme);
        console.log(isDarkTHeme)
        console.log(body) 
    }

    useEffect(()=>{ document.body.classList.toggle('dark-theme',isDarkTHeme)},[])
    return <context.Provider value={{isDarkTHeme,setDarkTheme,toggleDarkTheme,input,setInput}}>
        {children}
    </context.Provider>
}

export const useGlobalContext = ()=> useContext(context)