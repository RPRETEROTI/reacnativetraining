import { Dispatch } from "redux";
import { AuthenticationType } from "../screens/models/Authentication";
import { saveDataToStorage } from "../store/actions/auth";

export const signupService = (credentials: AuthenticationType) => {
    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: credentials.email,
                password: credentials.password,
                returnSecureToken: true
            }
        )
    }
    const apiendpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6QFa_Gs4Yt13LNzkcjhf0XVkoCAWNYbU'

    return async () => {
        try {
            const response = await fetch(apiendpoint, parameters)
            const data = await response.json();
            console.log('data', data)
            const expirationDate = new Date(
                new Date().getTime() + parseInt(data.expiresIn) * 1000
            );
            saveDataToStorage(data.idToken, data.localId, expirationDate)
            // return data.idToken, data.localId, parseInt(data.expiresIn) * 1000, data.email
            return data;

            // dispatch(signup(data));
            // dispatch(authenticate(data.idToken, data.localId, parseInt(data.expiresIn) * 1000, data.email))
        }
        catch (err) {
            console.log('the winner is', err)
            return err;
        }
    }
}


export const loginService = (credentials: AuthenticationType) => {
    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: credentials.email,
                password: credentials.password,
                returnSecureToken: true
            }
        )
    }
    const endpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6QFa_Gs4Yt13LNzkcjhf0XVkoCAWNYbU';
    return async () => {
        try {
            const response = await fetch(endpoint, parameters)
            const data = await response.json();
            console.log('resDataLogin', data)
            const expirationDate = new Date(
                new Date().getTime() + parseInt(data.expiresIn) * 1000
            );
            saveDataToStorage(data.idToken, data.localId, expirationDate)
            // dispatch(login(data));
            return data;

            // dispatch(authenticate(data.idToken, data.localId, parseInt(data.expiresIn) * 1000, data.email))

        }
        catch (err) {
            console.log('the winner is', err)
        }
    }
}