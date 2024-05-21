import { createContext, useState } from "react";

type Theme = 'dark' | 'light'

interface AppContextType {
  theme?: Theme
  changeTheme?: () => void
}

const AppContext = createContext<AppContextType>({})

export function AppProvider({children}:any) {
  const [theme, setTheme] = useState<Theme>('dark')

  function changeTheme() {
    setTheme(theme == 'dark' ? 'light' : 'dark')
    console.log(theme)
  }

  return (
    <AppContext.Provider value={{
      theme: theme,
      changeTheme: changeTheme
    }}>
       {children}
    </AppContext.Provider>
  )
}

export default AppContext
