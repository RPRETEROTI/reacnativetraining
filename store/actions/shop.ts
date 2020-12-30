import { Dispatch } from "react";
import { createSwitchNavigator } from "react-navigation";
import { useDispatch } from "react-redux";
import { ComicsType, ComicType } from "../../screens/models/Comics";
import { RootState } from "../store";
import { BUY, EDITASYNCHCOMICTHUNK, FORMEDITPRODUCT, CHANGEINPUT, BLURINPUT, CREATEASYNCHCOMICSTHUNK, GETASYNCHCOMICSTHUNK, TOGGLEPREFERITES } from "../types/types";

export const buy = (comic: ComicType) => ({
    type: BUY,
    payload: {
        comic: comic
    }
})
export const togglePreferites = (comic: ComicType) => ({
    type: TOGGLEPREFERITES,
    payload: {
        favrcomic: comic
    }
})
export const getComicsAsynchThunk = (comics: ComicsType) => ({
    type: GETASYNCHCOMICSTHUNK,
    payload: {
        comics: comics
    }
})

export const editComicAsynchThunk = (comic: Partial<ComicType>) => ({
    type: EDITASYNCHCOMICTHUNK,
    payload: {
        comicedited: comic
    }
})

export const editComic = (inputId: string, inputValue: string, isValid: boolean) => ({
    type: FORMEDITPRODUCT,
    payload: {
        value: inputValue,
        id: inputId,
        isValid: isValid
    }
})
export const changeInput = (inputValue: string, isValid: boolean) => ({
    type: CHANGEINPUT,
    value: inputValue,
    isValid: isValid,
})
export const blurInput = () => ({
    type: BLURINPUT,
    touched: true
})
export const editComics = (comic: Partial<ComicType>) => {
    //const dispatch=useDispatch();

    return async (dispatch: Dispatch<any>, getState: any) => {
        console.log('getState', getState)
        const token = getState().auth.token
        const x = getState()
        console.log('x', x)

        console.log('token', token)
        try {
            const response = await fetch(`https://reactnative-98d6e-default-rtdb.firebaseio.com/comicsedited.json?auth=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    comic
                )
            })

            const resData = await response.json()
            console.log('resdata', resData)
            dispatch(editComicAsynchThunk(resData))
        } catch (err) {
            console.log('err', err)
        }

    }
}