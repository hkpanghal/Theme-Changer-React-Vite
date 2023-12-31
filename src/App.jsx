import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeButton from "./components/ThemeButton";
import ThemeCard from "./components/ThemeCard";

function App() {

  const [themeMode,setThemeMOde] = useState("light")

  const lightTheme = ()=>{
    setThemeMOde("light")
  }
  const darkTheme = ()=>{
    setThemeMOde("dark")
  }

  // actual change in the theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center bg-zinc-700">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme button component */}
            <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card component */}
            <ThemeCard/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
