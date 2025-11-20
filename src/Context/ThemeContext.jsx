import { createContext, useState } from "react";

//context : where we declared state and functions
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>{
       setTheme((prev) => prev == 'light' ? 'dark': 'light')
    }

    const Value = {theme, toggleTheme}

    // Declare Provider which will pass state and functions in to components
    return(
        <ThemeContext.Provider value={Value}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}