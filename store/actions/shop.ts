import { ComicsType, ComicType } from "../../screens/models/Comics";
import { BUY, EDITASYNCHCOMICTHUNK, GETASYNCHCOMICSTHUNK, TOGGLEPREFERITES } from "../types/types";

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
export const editComicAsynchThunk = (comic: ComicType) => ({
    type: EDITASYNCHCOMICTHUNK,
    payload: {
        comicedited: comic
    }
})

