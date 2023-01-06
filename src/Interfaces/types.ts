import { UserDTO } from "@dtos/UserDTO";
import { ReactNode } from "react";

export interface IInputProps {
    placeholder: string;
}

export interface ISignInFormInputData {
    email: string,
    password: string
}

export interface ISignUpFormInputData {
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
}

export type AuthContextProps = {
    user: UserDTO,
    setUser: (user: UserDTO) => void
}

export type AuthContextProviderProps = {
    children: ReactNode;
}