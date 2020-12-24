import { AuthenticationType } from "../../screens/models/Authentication";
import { LOGIN, LOGOUT } from "../types/types";

export const login = (credentials: AuthenticationType) => ({
    type: LOGIN,
    payload: {
        username: credentials.username,
        password: credentials.password
    }
})
export const logout = () => ({
    type: LOGOUT
})