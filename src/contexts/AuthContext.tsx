import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { createContext, useState } from "react";
import { AuthContextProps, AuthContextProviderProps } from "src/Interfaces/types";

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState<UserDTO>({} as UserDTO)

    async function signIn(email, password) {
        try {
            const { data } = await api.post("/sessions", {
                email,
                password
            })
            setUser(data.user)
        } catch (err) {
            throw err
        }
    }

    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
} 