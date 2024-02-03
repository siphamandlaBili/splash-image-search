import { createContext,useContext,useState,useEffect } from "react";

const context = createContext();

export const AppProvider =({children})=>{

    return <context.Provider value={{}}>
        {children}
    </context.Provider>
}

export const useGlobalContext = ()=> useContext(context)