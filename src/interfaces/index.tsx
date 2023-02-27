import { ReactNode } from "react";

export interface IChildren {
    children: ReactNode;
}

export interface IAuthInterface {
    loginFunc: (data: ILoginData) => void;
}

export interface ILoginData {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
}