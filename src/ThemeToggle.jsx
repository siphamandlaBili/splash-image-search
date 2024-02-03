import { useGlobalContext } from "./Context";
import {BsFillSunFill,BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = ()=>{
    const{isDarkTHeme,setDarkTheme,toggleDarkTheme}=useGlobalContext();
    
    return <section  className="toggle-container">
        <button className="dark-toggle" onClick={toggleDarkTheme}>
            {isDarkTHeme? 
            <BsFillMoonFill className="toggle-icon"/>
            :
            <BsFillSunFill className="toggle-icon"/>}
            </button>
        </section>
}

export default ThemeToggle;