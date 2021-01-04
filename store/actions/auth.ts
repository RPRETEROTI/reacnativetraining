import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { AuthenticationType } from "../../screens/models/Authentication";
import { AUTHENTICATE, FORMEDITPRODUCT, LOGIN, LOGOUT, RESETSTART, SIGNUP } from "../types/types";

// export const login = (credentials: AuthenticationType) => ({
//     type: LOGIN,
//     payload: {
//         email: credentials.email,
//         password: credentials.password
//     }
// })
// export const signup = (credentials: AuthenticationType) => ({
//     type: SIGNUP,
//     payload: {
//         email: credentials.email,
//         password: credentials.password
//     }
// })


let timer: any;
const clearLogoutTimer = () => {
    if (timer) {
        clearTimeout(timer);
    }
};

// const setLogoutTimer = (expirationTime: number) => {
//     return (dispatch: Dispatch<any>) => {
//         timer = setTimeout(() => {
//             dispatch(logout());
//         }, expirationTime);
//     };
// };
export const authenticate = (token: any, userId: any, expireTime: number, email: any) => {

    return (dispatch: Dispatch<any>) => {
        // dispatch((setLogoutTimer(expireTime)));
        dispatch({
            type: AUTHENTICATE,
            payload: {
                token: token,
                userId: userId,
                email: email
            }
        })
    }
}

export const resetStartAppState = () => {
    console.log('cane')
    return (dispatch: Dispatch<any>) => {
        dispatch({ type: RESETSTART })
    }
}
export const validateCredentials = (inputId: string, inputValue: string, isValid: boolean) => ({
    type: FORMEDITPRODUCT,
    payload: {
        value: inputValue,
        id: inputId,
        isValid: isValid
    }
})

export const logout = () => {
    // clearLogoutTimer();
    AsyncStorage.removeItem('userData');

    return ({
        type: LOGOUT
    })
}
// export const prelogout = () => {
//     clearLogoutTimer();
//     AsyncStorage.removeItem('userData');
//     logout()
// }
// export const logout = () => ({
//     type: LOGOUT
// })

const saveDataToStorage = (token: any, userId: any, expirationDate: Date) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token: token, userId: userId, expireData: expirationDate.toISOString()
    }))
}
export const signupAsynch = (credentials: AuthenticationType) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6QFa_Gs4Yt13LNzkcjhf0XVkoCAWNYbU', {
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
            })
            const resData = await response.json();
            console.log('resData', resData)
            const expirationDate = new Date(
                new Date().getTime() + parseInt(resData.expiresIn) * 1000
            );
            saveDataToStorage(resData.idToken, resData.localId, expirationDate)
            // dispatch(signup(resData));
            dispatch(authenticate(resData.idToken, resData.localId, parseInt(resData.expiresIn) * 1000, resData.email))
        }
        catch (err) {
            console.log('the winner is', err)
        }
    }
}

export const loginAsynch = (credentials: AuthenticationType) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6QFa_Gs4Yt13LNzkcjhf0XVkoCAWNYbU', {
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
            })
            const resData = await response.json();
            console.log('resDataLogin', resData)
            const expirationDate = new Date(
                new Date().getTime() + parseInt(resData.expiresIn) * 1000
            );
            saveDataToStorage(resData.idToken, resData.localId, expirationDate)
            // dispatch(login(resData));
            dispatch(authenticate(resData.idToken, resData.localId, parseInt(resData.expiresIn) * 1000, resData.email))

        }
        catch (err) {
            console.log('the winner is', err)
        }
    }
}

