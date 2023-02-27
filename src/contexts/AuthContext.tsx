import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api/api";
import { IAuthInterface, IChildren, ILoginData } from "../interfaces";

export const AuthContext = createContext<IAuthInterface>({} as IAuthInterface)

function AuthProvider({ children }: IChildren) {

    const navigate = useNavigate()

    const loginFunc = (data: ILoginData) => {
        API.post("/auth/login", data)
            .then(res => {
                console.log(res)
                window.localStorage.setItem("@token", res.data.authToken)
                // toast.success("Login realizado com sucesso!", {
                //     position: "top-right",
                //     autoClose: 800,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "dark",
                // });
                navigate(`/dashboard`, { replace: true })
            })
            .catch(error => {
                console.log(error)
                // toast.error("Email ou senha incorretos", {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "dark",
                // });
            })
    }

    return (
        <AuthContext.Provider value={{
            loginFunc
        }}>{children}
        </AuthContext.Provider>
    )
}

export default AuthProvider