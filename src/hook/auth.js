import { useState, useContext, createContext } from 'react'

const authContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false)


  
 
    return (
        <authContext.Provider value={{ user, setUser}}>
            {children}
        </authContext.Provider>
    )
}


export function useAuth() {
    const context = useContext(authContext)

    return context
}